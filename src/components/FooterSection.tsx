import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "Problem", href: "/#problem" },
    { label: "Solution", href: "/#solution" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Book demo", href: "/#contact" },
  ],
  Company: [
    { label: "For doctors", href: "/#solution" },
    { label: "For patients", href: "/#solution" },
    { label: "Contact", href: "mailto:hello@benzoe.health" },
    { label: "benzoe.in", href: "https://benzoe.in" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
  Support: [
    { label: "Help Center", href: "mailto:support@benzoe.health" },
    { label: "For clinics", href: "mailto:partners@benzoe.health" },
    {
      label: "WhatsApp",
      href: "https://wa.me/919999999999?text=Hi%20Benzoe%2C%20I%20want%20to%20book%20a%20demo",
    },
    { label: "Report an issue", href: "mailto:support@benzoe.health" },
  ],
};

function FooterLink({ href, label }: { href: string; label: string }) {
  const isInternalRoute = href.startsWith("/") && !href.startsWith("/#");

  if (isInternalRoute) {
    return (
      <Link
        to={href}
        className="text-sm text-white/55 transition-colors hover:text-green"
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="text-sm text-white/55 transition-colors hover:text-green"
    >
      {label}
    </a>
  );
}

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="section-wrap py-12 md:py-16">
        <div className="mb-10 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-blue">
            B
          </span>
          <div>
            <p className="text-lg font-semibold">Benzoe</p>
            <p className="text-xs text-white/45">
              Digitizing India&apos;s clinics, one at a time
            </p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-white uppercase">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/45">
            © 2026 Benzoe Global Private Limited. All rights reserved.
          </p>
          <p className="text-sm text-white/45">
            Private Limited · Built in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
