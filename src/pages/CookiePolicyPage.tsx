import { LegalPageLayout } from '../components/LegalPageLayout'

export function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy">
      <p>
        This Cookie Policy explains how Benzoe uses cookies and similar technologies on our
        website.
      </p>
      <h2 className="text-lg font-semibold text-ink">What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device that help us remember preferences and
        understand how visitors use our site.
      </p>
      <h2 className="text-lg font-semibold text-ink">Cookies we use</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Essential cookies — required for site functionality</li>
        <li>Analytics cookies — help us improve performance and user experience</li>
        <li>Preference cookies — remember your settings</li>
      </ul>
      <h2 className="text-lg font-semibold text-ink">Managing cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. Disabling essential cookies
        may affect how the site works.
      </p>
    </LegalPageLayout>
  )
}
