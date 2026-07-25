import Link from "next/link";

const socials = [
  {
    href: "https://github.com/azizriza1210",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/mohammad-aziz-riza",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Mohammad Aziz Riza
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
