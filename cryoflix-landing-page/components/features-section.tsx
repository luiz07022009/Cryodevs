import {
  Zap,
  Shield,
  MonitorSmartphone,
  Globe,
  Cloud,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Entrega rápida e estável",
    description:
      "Conteúdo servido de forma simples, focado em estabilidade para o seu catálogo de filmes.",
  },
  {
    icon: Shield,
    title: "Segurança básica",
    description:
      "Boas práticas de API e autenticação para manter seus dados de filmes protegidos.",
  },
  {
    icon: MonitorSmartphone,
    title: "Funciona em vários dispositivos",
    description:
      "Interface responsiva que se adapta a desktop, tablet e celular sem complicação.",
  },
  {
    icon: Globe,
    title: "Pronto para produção simples",
    description:
      "Pensado para projetos reais com necessidades de catálogo e listagem de filmes, sem promessas exageradas.",
  },
  {
    icon: Cloud,
    title: "Arquitetura enxuta",
    description:
      "Stack moderna em Next.js, React e Tailwind, fácil de manter e evoluir.",
  },
  {
    icon: BarChart3,
    title: "Visão do catálogo",
    description:
      "Organização clara de seções para você entender e evoluir o catálogo conforme a sua necessidade.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Recursos da plataforma
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Pensado para ser simples e direto
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Cada parte do Cryoflix foi projetada para ser fácil de entender,
            integrar e adaptar ao seu cenário, sem depender de infraestrutura
            complexa ou recursos de última geração.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
