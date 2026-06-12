import { LegalPageLayout } from "../components/LegalPageLayout";

export function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy">
      <p>
        This Refund Policy explains how cancellations and refunds work for paid
        Benzoe plans and services. It applies to clinic-facing and
        patient-facing paid features where billing is enabled.
      </p>

      <h2 className="text-lg font-semibold text-ink">1. General Policy</h2>
      <p>
        Benzoe provides digital tools for clinic management, patient queue
        visibility, prescriptions, billing, and health records. Refunds are
        reviewed based on the plan type, billing cycle, usage, and reason for
        the request.
      </p>

      <h2 className="text-lg font-semibold text-ink">2. Monthly Plans</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Monthly plans may be cancelled at any time.</li>
        <li>
          Access generally continues until the end of the active billing period.
        </li>
        <li>
          Unused days in an active monthly billing cycle are usually not
          refundable.
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">3. Annual Plans</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Annual plans may be eligible for a refund if cancellation is requested
          shortly after purchase.
        </li>
        <li>
          Refund eligibility may depend on usage, onboarding status, and whether
          premium features were used.
        </li>
        <li>
          After the initial review window, annual plan access generally
          continues until the end of the paid term.
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        4. Refunds We May Approve
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Duplicate payments caused by a technical error</li>
        <li>Charges made after a confirmed cancellation</li>
        <li>
          Major service unavailability caused by Benzoe for an extended period
        </li>
        <li>
          New annual subscription cancellation requests with minimal usage
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        5. Non-Refundable Cases
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Change of mind after meaningful use of the service</li>
        <li>Unused time within a monthly billing period</li>
        <li>Failure to use the service after subscribing</li>
        <li>Suspension or termination due to violation of Benzoe terms</li>
        <li>
          Issues caused by incorrect information entered by the clinic, staff,
          or patient
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        6. How to Request a Refund
      </h2>
      <p>
        Refund requests should be submitted through the official support or
        billing channels provided by Benzoe. Requests should include the user or
        clinic name, plan details, payment date, reason for the request, and any
        relevant proof of payment.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        7. Review and Processing
      </h2>
      <p>
        Benzoe reviews refund requests in good faith. Approved refunds are
        processed through the original payment method where possible. Processing
        timelines may vary depending on the payment provider or banking partner.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        8. Changes to This Policy
      </h2>
      <p>
        Benzoe may update this Refund Policy from time to time. The version
        published on the website or inside the product will apply to refund
        requests made after the update.
      </p>
    </LegalPageLayout>
  );
}
