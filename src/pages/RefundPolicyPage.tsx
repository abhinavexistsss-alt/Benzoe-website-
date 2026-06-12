import { LegalPageLayout } from "../components/LegalPageLayout";

export function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy">
      <p className="font-semibold text-ink">Benzoe Global Private Limited</p>

      <h2 className="text-lg font-semibold text-ink">1. Overview</h2>
      <p>Applies to all paid plans across:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="text-ink">Benzoe Clinic App</strong> — clinic and
          hospital subscription plans
        </li>
        <li>
          <strong className="text-ink">Benzoe Patient App</strong> — any paid
          patient features or premium plans
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">2. Cancellation Policy</h2>
      <h3 className="font-semibold text-ink">Monthly Plans</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Cancel anytime; access continues till end of billing cycle</li>
        <li>No refund for unused days in the current month</li>
      </ul>

      <h3 className="font-semibold text-ink">Annual Plans</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Cancel within 7 days of first purchase (minimal usage) → Full refund
        </li>
        <li>
          Cancel after 7 days → No refund; access continues till end of period
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        3. Eligible Refund Scenarios
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-ink">
              <th className="py-3 pr-4 font-semibold">Scenario</th>
              <th className="py-3 font-semibold">Refund</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">
                Duplicate payment due to technical error
              </td>
              <td className="py-3">Full refund</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">
                Charged after confirmed cancellation
              </td>
              <td className="py-3">Full refund</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">
                Platform down 72+ consecutive hours (our fault)
              </td>
              <td className="py-3">Pro-rated refund</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">
                Annual plan cancelled within 7 days, minimal use
              </td>
              <td className="py-3">Full refund</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-semibold text-ink">4. Non-Refundable</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Change of mind after 7-day window</li>
        <li>Unused monthly billing cycle</li>
        <li>Never used the app after subscribing</li>
        <li>Account suspended for Terms violation</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">5. How to Request</h2>
      <p>
        Email{" "}
        <a href="mailto:benzoe.mail1@gmail.com" className="text-blue underline">
          benzoe.mail1@gmail.com
        </a>{" "}
        — Subject: &quot;Refund Request – [Your Name / Clinic Name]&quot;
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Mention which app (Clinic App or Patient App)</li>
        <li>
          Include registered phone/email, plan name, payment date, and reason
        </li>
        <li>Attach payment screenshot if available</li>
        <li>
          Response within 5 business days; approved refunds processed in 7–10
          business days
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">6. Contact Us</h2>
      <p>
        Benzoe Global
        <br />
        Email:{" "}
        <a href="mailto:benzoe.mail1@gmail.com" className="text-blue underline">
          benzoe.mail1@gmail.com
        </a>
      </p>
      <p>
        Governed by the Consumer Protection Act, 2019 and applicable Indian
        laws.
      </p>
    </LegalPageLayout>
  );
}
