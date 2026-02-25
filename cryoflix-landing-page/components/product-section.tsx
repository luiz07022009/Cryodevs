import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Catálogo de filmes em uma interface moderna",
  "Integração simples com sua API existente",
  "Interface responsiva em qualquer dispositivo",
  "Foco em qualidade de código e organização",
  "Fluxo de navegação intuitivo para o usuário",
  "Sem promessas difíceis de cumprir",
];

export function ProductSection() {
  return (
    <section id="product" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <div className="relative rounded-xl border border-border bg-gradient-to-br from-background via-card to-primary/10 p-6 shadow-lg">
                <div className="mb-4 h-4 w-28 rounded-full bg-primary/40" />
                <div className="mb-2 h-6 w-52 rounded-full bg-primary/60" />
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="h-28 rounded-lg bg-card/80 shadow-sm" />
                  <div className="h-28 rounded-lg bg-card/80 shadow-sm" />
                  <div className="h-28 rounded-lg bg-card/80 shadow-sm" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Área ilustrativa do produto. Conecte aqui os dados reais da
                  sua API de filmes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nosso produto
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">Conheça o Cryoflix</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Uma aplicação de catálogo de filmes pensada para ser clara e
              direta. O Cryoflix foi construído para demonstrar uma arquitetura
              moderna, mantendo promessas que você realmente consegue entregar
              com sua API atual.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#pricing">
                  Ver planos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
