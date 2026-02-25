import Link from "next/link";
import { Snowflake } from "lucide-react";

const footerLinks = {
  Produto: [
    { label: "Cryoflix", href: "#product" },
    { label: "Recursos", href: "#features" },
    { label: "Planos", href: "#pricing" },
    { label: "Registro de mudanças", href: "#" },
  ],
  Empresa: [
    { label: "Sobre", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  Suporte: [
    { label: "Central de ajuda", href: "#" },
    { label: "Contato", href: "#contact" },
    { label: "Status", href: "#" },
    { label: "Docs da API", href: "#" },
  ],
  Legal: [
    { label: "Política de privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
    { label: "Política de cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Snowflake className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                Cryo Devs
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Construindo aplicações de streaming e catálogo de filmes com foco
              em clareza, organização e código de qualidade.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">
                {category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cryo Devs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Cryo Devs no X (Twitter)"
            >
              X
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Cryo Devs no GitHub"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Cryo Devs no LinkedIn"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
