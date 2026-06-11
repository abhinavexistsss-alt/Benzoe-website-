import { LegalPageLayout } from '../components/LegalPageLayout'

export function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <p>
        By accessing or using Benzoe&apos;s website and services, you agree to these Terms &
        Conditions. If you do not agree, please do not use our platform.
      </p>
      <h2 className="text-lg font-semibold text-ink">Use of service</h2>
      <p>
        Benzoe provides queue visibility tools for patients and healthcare facilities. Wait times
        and queue positions are estimates based on live facility data and may change without notice.
        Benzoe is not a substitute for medical advice or emergency care.
      </p>
      <h2 className="text-lg font-semibold text-ink">Accounts & waitlist</h2>
      <p>
        You agree to provide accurate information when joining our waitlist or creating an account.
        You are responsible for maintaining the confidentiality of your login credentials.
      </p>
      <h2 className="text-lg font-semibold text-ink">Limitation of liability</h2>
      <p>
        Benzoe is provided on an &quot;as is&quot; basis during our pre-launch phase. We are not
        liable for delays, missed appointments, or decisions made based on queue estimates.
      </p>
      <h2 className="text-lg font-semibold text-ink">Contact</h2>
      <p>
        Questions about these terms? Email{' '}
        <a href="mailto:legal@benzoe.health" className="text-blue underline">
          legal@benzoe.health
        </a>
        .
      </p>
    </LegalPageLayout>
  )
}
