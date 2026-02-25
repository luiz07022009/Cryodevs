import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 lg:py-32">
      {/* Decorative background dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-accent-foreground">
                Catálogo de filmes simples para demonstração
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                O seu catálogo de filmes{" "}
                <span className="text-primary">do jeito certo.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl">
              A Cryo Devs criou o Cryoflix como uma aplicação de exemplo para
              listar e organizar filmes. Focamos em uma experiência simples,
              estável e fácil de integrar com a sua API atual.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#product">
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">
                  100+
                </p>
                <p className="text-xs text-muted-foreground">
                  Filmes no catálogo de exemplo
                </p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">
                  HD
                </p>
                <p className="text-xs text-muted-foreground">
                  Focado em qualidade simples e estável
                </p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">
                  API
                </p>
                <p className="text-xs text-muted-foreground">
                  Integração direta com sua API
                </p>
              </div>
            </div>
          </div>

          {/* Right illustration (sem imagem externa para evitar erros) */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <div className="relative rounded-xl border border-border bg-gradient-to-br from-background via-card to-primary/10 p-6 shadow-xl">
                <div className="mb-4 h-4 w-24 rounded-full bg-primary/30" />
                <div className="mb-6 h-6 w-40 rounded-full bg-primary/50" />
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="h-32 rounded-lg bg-card/80 shadow-sm" />
                  <div className="h-32 rounded-lg bg-card/80 shadow-sm" />
                  <div className="h-32 rounded-lg bg-card/80 shadow-sm" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Visual de exemplo dos cartões de filmes. Substitua pelos dados
                  reais da sua API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
