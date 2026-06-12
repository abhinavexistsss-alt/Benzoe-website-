import { LegalPageLayout } from "../components/LegalPageLayout";

export function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <p className="font-semibold text-ink">Benzoe Global</p>

      <h2 className="text-lg font-semibold text-ink">1. Introduction</h2>
      <p>These Terms govern your use of:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="text-ink">Benzoe Clinic App</strong> — for doctors,
          clinic owners, and hospital staff
        </li>
        <li>
          <strong className="text-ink">Benzoe Patient App</strong> — for
          patients to track queues, access prescriptions, and manage health
          records
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">2. Services Provided</h2>
      <h3 className="font-semibold text-ink">Clinic App</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Real-time walk-in queue management</li>
        <li>Digital prescription generation and storage</li>
        <li>UPI and digital payment integration</li>
        <li>Patient health record management</li>
      </ul>

      <h3 className="font-semibold text-ink">Patient App</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Live queue position tracking</li>
        <li>Access to digital prescriptions</li>
        <li>Digital receipts and visit history</li>
        <li>Personal health record storage</li>
      </ul>
      <p>
        Benzoe is a technology platform only — not a medical service. All
        clinical decisions are the sole responsibility of the licensed doctor.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        3. Subscriptions & Payments
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Monthly or annual billing in INR via UPI, card, or net banking</li>
        <li>Pricing changes communicated with 30 days&apos; notice</li>
        <li>Non-payment may result in account suspension</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        4. Data Sharing Between Apps
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Patient data from the Clinic App flows to that patient&apos;s account
          on the Patient App only
        </li>
        <li>
          No patient&apos;s data is visible to any other clinic or patient
        </li>
        <li>
          Clinics are responsible for the accuracy of patient data they enter
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        5. Prohibited Use (Both Apps)
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Entering false or fraudulent information</li>
        <li>Attempting unauthorised access to any account or data</li>
        <li>Reverse engineering or copying any part of either app</li>
        <li>Uploading malware or harmful code</li>
        <li>
          Accessing another patient&apos;s or clinic&apos;s data without
          authorisation
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        6. Limitation of Liability
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Maximum liability capped at 3 months of fees paid by that user</li>
        <li>
          Benzoe is not liable for clinical harm, misdiagnosis, or patient
          injury
        </li>
        <li>No liability for indirect, consequential, or punitive damages</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">7. Governing Law</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Governed by the laws of India</li>
        <li>
          Disputes resolved first by negotiation (30 days), then arbitration
          under the Arbitration and Conciliation Act, 1996
        </li>
        <li>Exclusive jurisdiction: Courts of India</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">8. Contact Us</h2>
      <p>
        Benzoe Global
        <br />
        Email:{" "}
        <a href="mailto:benzoe.mail1@gmail.com" className="text-blue underline">
          benzoe.mail1@gmail.com
        </a>
      </p>
      <p>
        Governed by the IT Act 2000, Consumer Protection Act 2019, and DPDP Act
        2023.
      </p>
    </LegalPageLayout>
  );
}
