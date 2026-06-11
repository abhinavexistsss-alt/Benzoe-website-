import { LegalPageLayout } from '../components/LegalPageLayout'

export function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy">
      <p>
        Benzoe is currently in pre-launch. This Refund Policy will apply to any paid subscriptions
        or services once billing goes live.
      </p>
      <h2 className="text-lg font-semibold text-ink">Waitlist & pre-launch</h2>
      <p>
        Joining the Benzoe waitlist is free. No charges apply and no refunds are necessary during
        the waitlist phase.
      </p>
      <h2 className="text-lg font-semibold text-ink">Future paid plans</h2>
      <p>
        When paid plans launch, eligible refunds may be requested within 14 days of purchase if you
        are unsatisfied with the service, unless otherwise stated in your plan agreement.
      </p>
      <h2 className="text-lg font-semibold text-ink">How to request a refund</h2>
      <p>
        Contact{' '}
        <a href="mailto:billing@benzoe.health" className="text-blue underline">
          billing@benzoe.health
        </a>{' '}
        with your account email and transaction details. We aim to process valid requests within 7–10
        business days.
      </p>
    </LegalPageLayout>
  )
}
