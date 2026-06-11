import { LegalPageLayout } from '../components/LegalPageLayout'

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        Benzoe (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This policy
        explains how we collect, use, and protect your information when you use our website and
        healthtech queue-tracking platform.
      </p>
      <h2 className="text-lg font-semibold text-ink">Information we collect</h2>
      <p>
        We may collect your name, email address, phone number, clinic visit details, queue
        position data, and device information when you join our waitlist or use Benzoe services.
      </p>
      <h2 className="text-lg font-semibold text-ink">How we use your data</h2>
      <p>
        We use your information to provide real-time queue updates, improve our product, communicate
        with you about launches and support, and comply with applicable healthcare and data
        protection laws.
      </p>
      <h2 className="text-lg font-semibold text-ink">Data sharing</h2>
      <p>
        We do not sell your personal data. We may share information with healthcare partners you
        choose to interact with, and with service providers who help us operate Benzoe under strict
        confidentiality agreements.
      </p>
      <h2 className="text-lg font-semibold text-ink">Your rights</h2>
      <p>
        You may request access, correction, or deletion of your personal data by contacting{' '}
        <a href="mailto:privacy@benzoe.health" className="text-blue underline">
          privacy@benzoe.health
        </a>
        .
      </p>
    </LegalPageLayout>
  )
}
