import { LegalPageLayout } from "../components/LegalPageLayout";

export function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <p>
        These Terms & Conditions govern access to and use of Benzoe. By using
        Benzoe, users agree to these Terms. If a user does not agree, they
        should not use the service.
      </p>

      <h2 className="text-lg font-semibold text-ink">1. Benzoe Services</h2>
      <p>
        Benzoe provides technology tools for clinics, hospitals, doctors, staff,
        and patients.
      </p>

      <h3 className="font-semibold text-ink">
        For Clinics, Doctors, and Staff
      </h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Walk-in queue management</li>
        <li>Digital prescription generation and storage</li>
        <li>Billing and payment workflow support</li>
        <li>Patient history and visit record management</li>
        <li>Clinic operations and reporting tools</li>
      </ul>

      <h3 className="font-semibold text-ink">For Patients</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Live queue position updates</li>
        <li>Access to prescriptions and visit history</li>
        <li>Digital receipts and payment records</li>
        <li>Personal health record access where enabled by the clinic</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        2. Technology Platform Only
      </h2>
      <p>
        Benzoe is a technology platform. Benzoe does not provide medical advice,
        diagnosis, treatment, emergency care, or clinical services. Doctors and
        healthcare professionals using Benzoe remain solely responsible for all
        medical decisions, prescriptions, diagnosis, and patient care.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        3. User Responsibilities
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Users must provide accurate and lawful information.</li>
        <li>
          Clinics are responsible for information entered by their doctors and
          staff.
        </li>
        <li>Users must keep account access secure and confidential.</li>
        <li>
          Users must use Benzoe only for lawful healthcare-related purposes.
        </li>
        <li>
          Users must not access or attempt to access another user&apos;s data
          without permission.
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        4. Subscriptions and Payments
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Some Benzoe features may require a paid plan or subscription.</li>
        <li>
          Plan details, pricing, and billing cycles are shown before purchase or
          activation.
        </li>
        <li>
          Failure to pay applicable fees may result in suspension or restriction
          of access.
        </li>
        <li>
          Refunds and cancellations are handled according to the Refund Policy.
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        5. Data Between Clinics and Patients
      </h2>
      <p>
        Patient records created through a clinic may be made available to that
        patient where Benzoe enables patient access. A patient&apos;s data
        should not be visible to unrelated clinics, patients, or unauthorised
        users. Clinics are responsible for ensuring that the information they
        enter is accurate and shared appropriately.
      </p>

      <h2 className="text-lg font-semibold text-ink">6. Prohibited Use</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Entering false, misleading, or fraudulent information</li>
        <li>Using Benzoe for unlawful, harmful, or unauthorised purposes</li>
        <li>Attempting to bypass security, permissions, or access controls</li>
        <li>Copying, scraping, reverse engineering, or misusing the service</li>
        <li>
          Uploading malware, harmful code, or content that disrupts the service
        </li>
        <li>
          Accessing another clinic&apos;s, patient&apos;s, or user&apos;s data
          without authorisation
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        7. Availability and Changes
      </h2>
      <p>
        Benzoe may improve, modify, suspend, or discontinue parts of the service
        over time. We aim to maintain reliable access but do not guarantee
        uninterrupted or error-free availability.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        8. Limitation of Liability
      </h2>
      <p>
        To the fullest extent permitted by law, Benzoe is not liable for
        clinical harm, misdiagnosis, patient injury, indirect losses, lost
        profits, loss of data, or consequences arising from incorrect
        information entered by users or clinics.
      </p>

      <h2 className="text-lg font-semibold text-ink">9. Termination</h2>
      <p>
        Benzoe may suspend or terminate access if a user violates these Terms,
        misuses the service, fails to pay applicable fees, or creates security,
        legal, or operational risk.
      </p>

      <h2 className="text-lg font-semibold text-ink">10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. Disputes should first be
        attempted to be resolved through good-faith discussion. If unresolved,
        they may be handled through the dispute resolution process available
        under applicable law.
      </p>

      <h2 className="text-lg font-semibold text-ink">11. Contact</h2>
      <p>
        Users can contact Benzoe through the official support or contact
        channels made available inside the product or on the website.
      </p>
    </LegalPageLayout>
  );
}
