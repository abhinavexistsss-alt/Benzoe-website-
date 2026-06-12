import { LegalPageLayout } from "../components/LegalPageLayout";

export function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        Benzoe respects the privacy of clinics, doctors, staff, and patients who
        use our services. This Privacy Policy explains what information we
        collect, how we use it, and the choices users have when using Benzoe.
      </p>

      <h2 className="text-lg font-semibold text-ink">1. Scope</h2>
      <p>This Privacy Policy applies to Benzoe services, including:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Clinic and hospital management tools used by doctors, clinic owners,
          and staff
        </li>
        <li>
          Patient-facing tools used to track queues, access prescriptions, and
          view visit records
        </li>
        <li>
          Any related website, dashboard, support, or communication experience
          provided by Benzoe
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        2. Information We Collect
      </h2>
      <h3 className="font-semibold text-ink">
        Clinic, Doctor, and Staff Information
      </h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Clinic or hospital name, location, and operational details</li>
        <li>
          Doctor profile details such as name, qualification, speciality, and
          professional details
        </li>
        <li>
          Staff names, roles, permissions, and activity within the clinic
          workspace
        </li>
        <li>
          Billing, payment, and subscription-related information required to
          operate the service
        </li>
      </ul>

      <h3 className="font-semibold text-ink">Patient Information</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Name, age, gender, and contact details shared during registration or
          clinic visits
        </li>
        <li>Queue tokens, appointment details, and visit history</li>
        <li>
          Symptoms, diagnosis notes, prescriptions, and other records created
          during consultation
        </li>
        <li>Payment and receipt details related to clinic visits</li>
        <li>
          Health identifiers or documents voluntarily provided by the user
        </li>
      </ul>

      <h3 className="font-semibold text-ink">
        Automatically Collected Information
      </h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>Device type, browser, app version, and usage logs</li>
        <li>Approximate location, session activity, and feature usage</li>
        <li>
          Technical information used for security, debugging, and service
          improvement
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        3. How We Use Information
      </h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          To operate clinic queue management, prescription, billing, and patient
          record features
        </li>
        <li>
          To show patients live queue updates and clinic visit information
        </li>
        <li>
          To help doctors and staff access patient history and manage clinic
          workflows
        </li>
        <li>
          To process payments, generate receipts, and maintain billing records
        </li>
        <li>
          To improve product reliability, security, analytics, and support
        </li>
        <li>To comply with applicable laws and valid legal requests</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">4. Data Sharing</h2>
      <p>
        Benzoe does not sell personal data. Information may be shared only when
        necessary:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Between a clinic and the patient connected to that clinic visit</li>
        <li>
          With authorised payment, hosting, messaging, analytics, or support
          service providers
        </li>
        <li>
          With doctors, staff, or clinic administrators based on their role and
          permissions
        </li>
        <li>
          When required to comply with law, regulation, or a valid legal process
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">5. Security</h2>
      <p>
        Benzoe uses reasonable technical and organisational safeguards to
        protect user information. These may include encryption in transit,
        access controls, monitoring, and restricted internal access. No digital
        service can guarantee absolute security, but we work to reduce risk and
        respond responsibly to security concerns.
      </p>

      <h2 className="text-lg font-semibold text-ink">6. Data Retention</h2>
      <p>
        We retain information for as long as needed to provide Benzoe services,
        meet legal or regulatory requirements, resolve disputes, and maintain
        accurate clinic and patient records. Retention periods may vary
        depending on the type of information and the purpose for which it is
        stored.
      </p>

      <h2 className="text-lg font-semibold text-ink">
        7. User Choices and Rights
      </h2>
      <p>Subject to applicable law, users may request to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Access personal information associated with their account or clinic
          visit
        </li>
        <li>Correct inaccurate or incomplete information</li>
        <li>
          Request deletion of information where legally and operationally
          possible
        </li>
        <li>Withdraw consent for optional processing or communications</li>
      </ul>

      <h2 className="text-lg font-semibold text-ink">
        8. Updates to This Policy
      </h2>
      <p>
        Benzoe may update this Privacy Policy from time to time. Continued use
        of Benzoe after an update means the revised policy applies.
      </p>

      <h2 className="text-lg font-semibold text-ink">9. Contact</h2>
      <p>
        For privacy-related requests, users can contact Benzoe through the
        official support or contact channels made available inside the product
        or on the website.
      </p>
    </LegalPageLayout>
  );
}
