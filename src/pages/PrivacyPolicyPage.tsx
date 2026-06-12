import { LegalPageLayout } from "../components/LegalPageLayout";

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="font-semibold text-ink">Benzoe Global Private Limited</p>

      <h2 className="text-lg font-semibold text-ink">1. Introduction</h2>
      <p>
        Benzoe Global Private Limited (&quot;Benzoe&quot;, &quot;we&quot;,
        &quot;our&quot;, or &quot;us&quot;) is committed to protecting the
        privacy of all individuals who use our platforms. This Privacy Policy
        applies to both:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="text-ink">Benzoe Clinic App</strong> — the clinic
          and hospital management application used by doctors, clinic owners,
          and hospital staff
        </li>
        <li>
          <strong className="text-ink">Benzoe Patient App</strong> — the
          patient-facing application used by individuals to track queues, access
          prescriptions, and manage health records
        </li>
      </ul>
      <p>
        By accessing or using either app, you agree to the terms of this Privacy
        Policy. If you do not agree, please discontinue use of our services.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        2. Information We Collect
      </h2>
      <h3 className="font-semibold text-ink">
        2.1 Clinic App — Clinics, Doctors & Staff
      </h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Clinic/hospital name, address, city, and state</li>
        <li>
          Doctor&apos;s name, qualification, specialisation, and registration
          number
        </li>
        <li>Contact details including email address and phone number</li>
        <li>UPI ID and payment account details for billing integration</li>
        <li>Staff member names and roles</li>
      </ul>

      <h3 className="font-semibold text-ink">2.2 Patient App — Patients</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Name, age, gender, and contact number</li>
        <li>Visit history, symptoms, and diagnosis notes</li>
        <li>Digital prescriptions issued during consultations</li>
        <li>Payment and billing records</li>
        <li>Queue token and appointment records</li>
        <li>ABHA number, if provided</li>
      </ul>

      <h3 className="font-semibold text-ink">
        2.3 Collected Automatically (Both Apps)
      </h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Device type, OS, and app version</li>
        <li>IP address and approximate location</li>
        <li>Features used and session timestamps</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        3. How We Use Your Information
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Operate the Benzoe Clinic App and Patient App</li>
        <li>Enable real-time queue management and live queue tracking</li>
        <li>Generate and store digital prescriptions and billing records</li>
        <li>Process UPI payments and generate digital receipts</li>
        <li>Send queue status updates and notifications to patients</li>
        <li>Allow doctors to access patient visit history</li>
        <li>Comply with Indian laws including the DPDP Act, 2023</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        4. Sharing of Information
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="text-ink">Between apps:</strong> Patient data from
          the Clinic App is accessible only to that same patient on the Patient
          App — not to any other clinic or patient
        </li>
        <li>
          <strong className="text-ink">Payment Processors:</strong> Shared with
          authorised payment gateways only to process transactions
        </li>
        <li>
          <strong className="text-ink">Service Providers:</strong> Trusted third
          parties (cloud hosting, SMS) under confidentiality agreements
        </li>
        <li>
          <strong className="text-ink">Legal Compliance:</strong> If required by
          Indian law or court order
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        5. Data Storage and Security
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>All data stored on servers in India</li>
        <li>TLS/SSL encryption for all data transmission</li>
        <li>Regular security audits and restricted access controls</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">6. Data Retention</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Clinic data: retained for active subscription + 3 years after
          termination
        </li>
        <li>
          Patient records: retained while clinic is active; patients may request
          a copy before deletion
        </li>
        <li>
          Payment records: retained for 7 years per Indian financial regulations
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        7. Your Rights (under DPDP Act, 2023)
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent at any time</li>
        <li>Nominate a person to exercise rights on your behalf</li>
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
      <p>Governed by the laws of India.</p>
    </LegalPageLayout>
  );
}
