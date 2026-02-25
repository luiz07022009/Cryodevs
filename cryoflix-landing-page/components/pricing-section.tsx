import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "R$9",
    period: "/mês",
    description: "Para quem quer testar um catálogo simples de filmes.",
    features: [
      "Streaming em HD (1080p)",
      "1 dispositivo por vez",
      "Áudio padrão",
      "Interface responsiva",
      "Uso pessoal",
    ],
    cta: "Começar teste",
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$19",
    period: "/mês",
    description: "Para pequenos projetos que querem um catálogo organizado.",
    features: [
      "Streaming em HD",
      "Até 3 dispositivos",
      "Layout personalizável",
      "Integração com API própria",
      "Sem promessas de 4K ou IA",
      "Suporte por e-mail",
    ],
    cta: "Começar teste",
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "Sob consulta",
    period: "",
    description: "Para empresas que precisam adaptar o Cryoflix ao seu negócio.",
    features: [
      "Branding personalizado",
      "Possibilidade de integrações extras",
      "Ajustes sob medida na interface",
      "Prioridade na fila de suporte",
      "Documentação da API",
      "Acompanhamento técnico dedicado",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Planos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Planos simples e transparentes
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Escolha o plano que faz sentido para o seu projeto. Todos os planos
            podem ser testados antes de qualquer compromisso.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-shadow ${
                plan.highlighted
                  ? "border-primary bg-card shadow-lg ring-1 ring-primary/20"
                  : "border-border bg-card hover:shadow-md"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Mais escolhido
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
