import * as THREE from 'three';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { Link } from 'react-router-dom';

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

    vec3 color1 = vec3(0.0, 1.0, 1.0); // Bright Cyan
    vec3 color2 = vec3(1.0, 0.0, 0.85); // Hot Magenta
    vec3 color3 = vec3(1.0, 0.15, 0.0); // Fiery Red-Orange
    vec3 color4 = vec3(0.45, 0.0, 1.0); // Deep Purple

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

function MainAssistant() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate group based on mouse to track cursor
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <InnerSphere />
        {/* The Outer Glass Sphere - pure gloss, purely additive to avoid transparency issues */}
        <mesh>
          <sphereGeometry args={[1, 256, 256]} />
          <meshPhysicalMaterial 
            transparent
            blending={THREE.AdditiveBlending}
            color="#000000"
            emissive="#000000"
            roughness={0}
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0}
            depthWrite={false}
          />
        </mesh>
        <Eyes />
      </Float>
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesCount = 5000;

  // Store initial positions, lifetimes, and colors
  const { startPos, life, speeds, dirs, baseColors, currentColors } = useMemo(() => {
    const sPos = new Float32Array(particlesCount * 3);
    const l = new Float32Array(particlesCount);
    const spd = new Float32Array(particlesCount);
    const d = new Float32Array(particlesCount);
    const baseCols = new Float32Array(particlesCount * 3);
    const currCols = new Float32Array(particlesCount * 3);

    const gold = new THREE.Color('#ffcc00');
    const white = new THREE.Color('#ffffff');

    for (let i = 0; i < particlesCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 1.0 + Math.random() * 0.05; // strict outline
      
      sPos[i * 3] = Math.cos(angle) * r;
      sPos[i * 3 + 1] = Math.sin(angle) * r;
      sPos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

      d[i] = sPos[i * 3 + 1] >= 0 ? 1 : -1;
      
      l[i] = Math.random(); // random start life so it's continuous
      spd[i] = 0.15 + Math.random() * 0.1; // rate of falling

      // Randomly assign gold or white color
      const color = Math.random() > 0.4 ? gold : white; // 60% gold, 40% white
      baseCols[i * 3] = color.r;
      baseCols[i * 3 + 1] = color.g;
      baseCols[i * 3 + 2] = color.b;

      currCols[i * 3] = color.r;
      currCols[i * 3 + 1] = color.g;
      currCols[i * 3 + 2] = color.b;
    }
    return { startPos: sPos, life: l, speeds: spd, dirs: d, baseColors: baseCols, currentColors: currCols };
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const colorArray = pointsRef.current.geometry.attributes.color.array as Float32Array;

    for (let i = 0; i < particlesCount; i++) {
      life[i] += speeds[i] * delta;
      
      if (life[i] > 1.0) {
        life[i] = 0; // Recycle particle back to outline

        // Reroll outline position to keep the cluster dynamic
        const angle = Math.random() * Math.PI * 2;
        const r = 1.0 + Math.random() * 0.05;
        startPos[i * 3] = Math.cos(angle) * r;
        startPos[i * 3 + 1] = Math.sin(angle) * r;
        startPos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
        dirs[i] = startPos[i * 3 + 1] >= 0 ? 1 : -1;
      }

      // Calculate position using an exponential curve (gravity)
      const t = life[i];
      const fallDistance = 6.0 * Math.pow(t, 2.5);

      posArray[i * 3] = startPos[i * 3];
      posArray[i * 3 + 1] = startPos[i * 3 + 1] + (dirs[i] * fallDistance);
      posArray[i * 3 + 2] = startPos[i * 3 + 2];

      // Fade out particles extremely close to the sphere
      let fade = 1.0;
      if (t > 0.25) {
        fade = Math.max(0, 1.0 - ((t - 0.25) / 0.2)); // Fades from 1.0 to 0.0 between t=0.25 and t=0.45
      }
      colorArray[i * 3] = baseColors[i * 3] * fade;
      colorArray[i * 3 + 1] = baseColors[i * 3 + 1] * fade;
      colorArray[i * 3 + 2] = baseColors[i * 3 + 2] * fade;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  // Calculate an initial dummy position array so bufferAttribute is happy
  const initialPositions = useMemo(() => new Float32Array(particlesCount * 3), []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={initialPositions.length / 3} 
          array={initialPositions} 
          itemSize={3} 
          args={[initialPositions, 3]}
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={currentColors.length / 3} 
          array={currentColors} 
          itemSize={3} 
          args={[currentColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.018} 
        vertexColors={true}
        transparent 
        opacity={0.9} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true} 
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
    <mesh ref={meshRef} position={[0, 0, -2]}>
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
      {/* First wave expands to a larger radius */}
      <SoundWaveRing delay={0.0} maxScale={3.5} />
      {/* Second wave expands to a smaller radius, creating a layered shockwave */}
      <SoundWaveRing delay={0.5} maxScale={2.5} />
    </group>
  );
}

// --- Main Page Component ---

export function AssistantCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ alpha: true }}>
      <ambientLight intensity={3} />
      {/* Custom abstract environment for reflections - a massive soft white dome above */}
      <Environment resolution={256}>
        <mesh position={[0, 20, 10]} scale={15}>
          <sphereGeometry args={[32, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Environment>
      <SoundWaves />
      <MainAssistant />
      <Particles />
    </Canvas>
  );
}

export function AIVoiceAssistant() {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* R3F Canvas */}
      <div className="absolute inset-0">
        <AssistantCanvas />
      </div>

      {/* Back Button */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-20 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-medium text-sm hover:bg-white/20 transition-all flex items-center gap-2"
      >
        <span>←</span> Back to Home
      </Link>
    </div>
  );
}
