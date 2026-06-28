import * as THREE from 'three';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { AIVoiceInput } from '../components/ui/ai-voice-input';
import { DiaText } from '../components/ui/dia-text';

// --- Custom Shaders ---
const innerVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    
    // Calculate normal and view direction for shiny lighting
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const innerFragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  // --- Simplex Noise 3D ---
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 ); 
    vec4 p = permute( permute( permute( 
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    // Massive, un-fragmented blobs moving extremely slowly
    float n1 = snoise(vPosition * 0.6 + uTime * 0.015);
    float n2 = snoise(vPosition * 0.8 - uTime * 0.02);
    float n3 = snoise(vPosition * 0.5 + uTime * 0.025);

    vec3 color1 = vec3(0.992, 0.322, 0.0);   // #fd5200 - Brand Orange
    vec3 color2 = vec3(0.78, 0.77, 0.72);    // Muted Beige (dimmed)
    vec3 color3 = vec3(0.902, 0.29, 0.0);    // #e64a00 - Darker Orange
    vec3 color4 = vec3(0.7, 0.69, 0.65);     // Darker Beige

    float m1 = smoothstep(0.2, 0.8, n1 * 0.5 + 0.5);
    float m2 = smoothstep(0.25, 0.75, n2 * 0.5 + 0.5);
    float m3 = smoothstep(0.3, 0.7, n3 * 0.5 + 0.5);

    vec3 finalColor = mix(color1, color2, m1);
    finalColor = mix(finalColor, color3, m2);
    finalColor = mix(finalColor, color4, m3);

    // Boost saturation and contrast
    finalColor = pow(finalColor, vec3(0.85)) * 1.3;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- R3F Components ---

function InnerSphere() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), []);

  return (
    <mesh scale={0.96}>
      <sphereGeometry args={[1, 256, 256]} />
      <shaderMaterial 
        ref={materialRef}
        vertexShader={innerVertexShader}
        fragmentShader={innerFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Eyes() {
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const [blinkScale, setBlinkScale] = useState(1);

  // Blinking logic
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const blink = () => {
      setBlinkScale(0.01);
      setTimeout(() => setBlinkScale(1), 150); // duration of blink closed
      
      // Schedule next blink
      const nextBlink = Math.random() * 4000 + 2000; // random interval between 2s and 6s
      timeout = setTimeout(blink, nextBlink);
    };
    timeout = setTimeout(blink, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useFrame(() => {
    if (leftEyeRef.current && rightEyeRef.current) {
      leftEyeRef.current.scale.y = THREE.MathUtils.lerp(leftEyeRef.current.scale.y, blinkScale, 0.3);
      rightEyeRef.current.scale.y = THREE.MathUtils.lerp(rightEyeRef.current.scale.y, blinkScale, 0.3);
    }
  });

  return (
    <group position={[0, 0, 1.05]}>
      <mesh ref={leftEyeRef} position={[-0.2, 0, 0]}>
        <capsuleGeometry args={[0.06, 0.2, 4, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} toneMapped={false} transparent={true} />
      </mesh>
      <mesh ref={rightEyeRef} position={[0.2, 0, 0]}>
        <capsuleGeometry args={[0.06, 0.2, 4, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={3} toneMapped={false} transparent={true} />
      </mesh>
    </group>
  );
}

function MainAssistant({ isFullScreen = false }: { isFullScreen?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : viewport.width < 4.0;

  useFrame((state) => {
    if (groupRef.current) {
      // Calculate sphere's center in NDC (Normalized Device Coordinates)
      // posX is viewport.width * 0.28, which in NDC is 0.56
      const ndcX = isFullScreen ? 0 : (isMobile ? 0 : 0.56);
      // posY is -viewport.height * 0.15, which in NDC is -0.3
      const ndcY = isFullScreen ? 0.1 : (isMobile ? -0.3 : 0);

      // Mouse pointer relative to the sphere's actual position on screen
      const relX = state.pointer.x - ndcX;
      const relY = state.pointer.y - ndcY;

      // Rotate ONLY the sphere and eyes based on relative mouse to track cursor
      const targetX = (relX * Math.PI) / 3;
      const targetY = (relY * Math.PI) / 3;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.1);
    }
  });

  return (
    <group scale={0.85}>
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <group scale={isMobile ? 0.65 : 1.0}>
          <group ref={groupRef}>
            <InnerSphere />
            <Eyes />
          </group>
          {!isFullScreen && <Particles />}
        </group>
        <SoundWaves />
      </Float>
    </group>
  );
}

const particleVertexShader = `
  attribute float size;
  attribute vec4 aColor;
  varying vec4 vColor;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    // sizeAttenuation effect (points get smaller as they go further away)
    // 800.0 is a multiplier that scales the pixel size correctly for our perspective
    gl_PointSize = size * (800.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = `
  varying vec4 vColor;
  void main() {
    // gl_PointCoord goes from (0,0) to (1,1) across the point sprite
    vec2 pt = gl_PointCoord - vec2(0.5);
    float dist = length(pt) * 2.0; // 0 at center, 1 at edge
    
    // Discard corners to make it a perfect circle
    if (dist > 1.0) discard;
    
    // Glow effect: very bright in the center, smoothly fading out
    float core = smoothstep(0.2, 0.0, dist);
    float halo = smoothstep(1.0, 0.2, dist) * 0.5;
    
    float alpha = core + halo;
    
    gl_FragColor = vec4(vColor.rgb, vColor.a * alpha);
  }
`;

const particlesCount = 5000;

function createParticleState() {
  const sPos = new Float32Array(particlesCount * 3);
  const l = new Float32Array(particlesCount);
  const spd = new Float32Array(particlesCount);
  const d = new Float32Array(particlesCount);
  const currCols = new Float32Array(particlesCount * 4);
  const sz = new Float32Array(particlesCount);

  for (let i = 0; i < particlesCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 1.0 + Math.random() * 0.05; // strict outline
    
    sPos[i * 3] = Math.cos(angle) * r;
    sPos[i * 3 + 1] = Math.sin(angle) * r;
    sPos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

    d[i] = sPos[i * 3 + 1] >= 0 ? 1 : -1;
    
    l[i] = Math.random(); // random start life so it's continuous
    spd[i] = 0.15 + Math.random() * 0.1; // rate of falling

    // Always white for better visibility on orange background
    currCols[i * 4] = 1.0;
    currCols[i * 4 + 1] = 1.0;
    currCols[i * 4 + 2] = 1.0;
    currCols[i * 4 + 3] = 1.0;

    // Two size variants as requested by the user
    sz[i] = Math.random() > 0.5 ? 0.025 : 0.05;
  }
  return { startPos: sPos, life: l, speeds: spd, dirs: d, currentColors: currCols, sizes: sz };
}

const globalParticleState = createParticleState();
const globalInitialPositions = new Float32Array(particlesCount * 3);

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const colorArray = pointsRef.current.geometry.attributes.aColor.array as Float32Array;
    
    // Use the global state object
    const state = globalParticleState;

    for (let i = 0; i < particlesCount; i++) {
      state.life[i] += state.speeds[i] * delta;
      
      if (state.life[i] > 1.0) {
        state.life[i] = 0; // Recycle particle back to outline

        // Reroll outline position to keep the cluster dynamic
        const angle = Math.random() * Math.PI * 2;
        const r = 1.0 + Math.random() * 0.05;
        state.startPos[i * 3] = Math.cos(angle) * r;
        state.startPos[i * 3 + 1] = Math.sin(angle) * r;
        state.startPos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
        state.dirs[i] = state.startPos[i * 3 + 1] >= 0 ? 1 : -1;
      }

      // Calculate position using an exponential curve (gravity)
      const t = state.life[i];
      const fallDistance = 6.0 * Math.pow(t, 2.5);

      posArray[i * 3] = state.startPos[i * 3];
      posArray[i * 3 + 1] = state.startPos[i * 3 + 1] + (state.dirs[i] * fallDistance);
      posArray[i * 3 + 2] = state.startPos[i * 3 + 2];

      // Fade out particles extremely close to the sphere via ALPHA channel
      let fade = 1.0;
      if (t > 0.25) {
        fade = Math.max(0, 1.0 - ((t - 0.25) / 0.2)); // Fades from 1.0 to 0.0 between t=0.25 and t=0.45
      }
      colorArray[i * 4] = 1.0;
      colorArray[i * 4 + 1] = 1.0;
      colorArray[i * 4 + 2] = 1.0;
      colorArray[i * 4 + 3] = fade;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.aColor.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={globalInitialPositions.length / 3} 
          array={globalInitialPositions} 
          itemSize={3} 
          args={[globalInitialPositions, 3]}
        />
        <bufferAttribute 
          attach="attributes-aColor" 
          count={globalParticleState.currentColors.length / 4} 
          array={globalParticleState.currentColors} 
          itemSize={4} 
          args={[globalParticleState.currentColors, 4]}
        />
        <bufferAttribute 
          attach="attributes-size" 
          count={globalParticleState.sizes.length} 
          array={globalParticleState.sizes} 
          itemSize={1} 
          args={[globalParticleState.sizes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial 
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        transparent={true} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// --- Sound Wave Rings (3D) ---

const waveVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const waveFragmentShader = `
  varying vec2 vUv;
  uniform float uOpacity;
  void main() {
    float dist = distance(vUv, vec2(0.5));
    float nDist = dist * 2.0; // 0.0 at center, 1.0 at edge
    
    // Create a sharp edge that trails off softly inwards (the gradient effect)
    float alpha = smoothstep(0.0, 1.0, pow(nDist, 4.0));
    
    // Hard cutoff outside the circle
    if (nDist > 1.0) discard;
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * uOpacity);
  }
`;

function SoundWaveRing({ delay, maxScale }: { delay: number, maxScale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uOpacity: { value: 0.0 }
  }), []);

  useFrame((state) => {
    const cycleLength = 4.0; // Total time for the burst-and-pause cycle
    const expansionDuration = 2.5; // How long a single wave lives before disappearing

    // Calculate time within the current cycle
    let timeInCycle = (state.clock.elapsedTime - delay) % cycleLength;
    if (timeInCycle < 0) timeInCycle += cycleLength;

    if (meshRef.current && materialRef.current) {
      if (timeInCycle <= expansionDuration) {
        const progress = timeInCycle / expansionDuration;

        // Shockwave effect: incredibly fast initial burst, then slows down
        const easeOut = 1.0 - Math.pow(1.0 - progress, 4);
        
        // Expand to the dynamically passed maxScale
        const currentScale = 1.0 + (easeOut * (maxScale - 1.0));
        meshRef.current.scale.set(currentScale, currentScale, 1);

        // Fade out completely by the end of the expansion
        materialRef.current.uniforms.uOpacity.value = 0.3 * (1.0 - progress);
        meshRef.current.visible = true;
      } else {
        // Hide the ring during the pause before the next cycle
        meshRef.current.visible = false;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Plane geometry is perfect for rendering a smooth radial gradient shader */}
      <planeGeometry args={[2, 2]} />
      <shaderMaterial 
        ref={materialRef}
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
        transparent={true} 
        depthWrite={false} 
        side={THREE.DoubleSide} 
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function SoundWaves() {
  return (
    <group>
      {/* Shockwaves originate from the equator to perfectly eliminate parallax misalignment */}
      <SoundWaveRing delay={0.0} maxScale={6.5} />
      <SoundWaveRing delay={0.5} maxScale={4.5} />
    </group>
  );
}

function SceneLayout({ children, isFullScreen = false }: { children: React.ReactNode, isFullScreen?: boolean }) {
  const { viewport } = useThree();
  
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : viewport.width < 4.0;
  
  // Shift the assistant further to the right on desktop so it completely clears the text area
  const posX = isFullScreen ? 0 : (isMobile ? 0 : viewport.width * 0.28);
  // Move it up slightly on mobile so it sits right under the main text
  const posY = isFullScreen ? 0.2 : (isMobile ? -viewport.height * 0.15 : 0);
  
  return (
    <group position={[posX, posY, 0]}>
      {children}
    </group>
  );
}

// --- Main Page Component ---

export function AssistantCanvas({ isFullScreen = false }: { isFullScreen?: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={3} />
      <Environment resolution={256}>
        <mesh position={[0, 20, 10]} scale={15}>
          <sphereGeometry args={[32, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Environment>
      <SceneLayout isFullScreen={isFullScreen}>
        <MainAssistant isFullScreen={isFullScreen} />
      </SceneLayout>
    </Canvas>
  );
}

type ConversationState = 'idle' | 'greeting' | 'listening' | 'speaking';

export function AIVoiceAssistant() {
  const [convState, setConvState] = useState<ConversationState>('idle');
  const [caption, setCaption] = useState("");
  
  // Clean up any ongoing speech on unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = (text: string, callback?: () => void) => {
    setCaption(text);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      
      // Attempt to use a female voice
      const preferredVoice = englishVoices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Google UK English Female')) || englishVoices[0] || voices[0];
      
      if (preferredVoice) utterance.voice = preferredVoice;
      utterance.rate = 1.0;
      utterance.pitch = 1.1;
      
      utterance.onend = () => {
        if (callback) callback();
      };
      
      // Fallback in case onend doesn't fire properly on some browsers
      const fallbackTimeout = setTimeout(() => {
        if (callback) callback();
      }, (text.length / 15) * 1000 + 1000);
      
      utterance.addEventListener('end', () => clearTimeout(fallbackTimeout));
      
      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback if no TTS
      setTimeout(() => {
        if (callback) callback();
      }, text.length * 60);
    }
  };

  useEffect(() => {
    // Start conversation after a short delay
    const startTimer = setTimeout(() => {
      setConvState('greeting');
      speak("Hey, I am Benzoe AI. Are you a doctor or a patient?", () => {
        setConvState('listening');
      });
    }, 1500);

    return () => clearTimeout(startTimer);
  }, []);

  const handleChoice = (role: string) => {
    setConvState('speaking');
    
    if (role === 'patient') {
      speak("Great! Let's get you booked for an appointment without any waiting. I can find the best doctors near you and book a slot instantly. What specialty are you looking for?", () => {
        setConvState('listening');
      });
    } else {
      speak("Welcome doctor. Let me show you how to completely automate your clinic, from intelligent queuing to digital prescriptions. Would you like a quick demo?", () => {
        setConvState('listening');
      });
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center font-functional bg-[#f6f6ef] bg-[radial-gradient(150%_45%_at_50%_100%,rgba(253,82,0,1)_10.5%,rgba(253,110,30,1)_16%,rgba(245,140,60,1)_17.5%,rgba(245,180,130,1)_25%,rgba(240,230,215,1)_40%,rgba(240,240,232,1)_65%,rgba(246,246,239,1)_100%)] md:bg-[radial-gradient(80%_60%_at_50%_100%,rgba(253,82,0,1)_10.5%,rgba(253,110,30,1)_16%,rgba(245,140,60,1)_17.5%,rgba(245,180,130,1)_25%,rgba(240,230,215,1)_40%,rgba(240,240,232,1)_65%,rgba(246,246,239,1)_100%)]">
      
      {/* R3F Canvas */}
      <div className={`absolute inset-0 z-10 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        (convState === 'listening' || convState === 'speaking') ? '-translate-y-[12vh]' : 'translate-y-0'
      }`}>
        <AssistantCanvas isFullScreen={true} />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-end items-center pb-12 md:pb-16 px-6">
        
        {/* Captions */}
        <div className={`transition-all duration-700 ease-out max-w-2xl text-center ${caption && (convState === 'greeting' || convState === 'speaking') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="font-light text-3xl md:text-4xl tracking-tight text-[#252525] drop-shadow-sm leading-tight">
            <DiaText text={`"${caption}"`} />
          </div>
        </div>

        {/* Listening Indicator / Voice Input */}
        <div className={`mt-6 transition-all duration-500 flex flex-col items-center pointer-events-auto ${convState === 'listening' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          <AIVoiceInput 
            onStart={() => console.log("User started speaking...")}
            onStop={() => {
              // Mock picking a response after voice input stops
              handleChoice(Math.random() > 0.5 ? 'patient' : 'doctor');
            }}
          />
        </div>

      </div>
    </div>
  );
}
