import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individual viewers who want great content.",
    features: [
      "HD streaming (1080p)",
      "1 device at a time",
      "Standard audio",
      "Basic recommendations",
      "Mobile & desktop",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description: "The ultimate streaming experience for the whole family.",
    features: [
      "4K Ultra HD + HDR10+",
      "4 devices simultaneously",
      "Dolby Atmos audio",
      "AI-powered recommendations",
      "Offline downloads",
      "Family profiles",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "White-label streaming solutions for your business.",
    features: [
      "Custom branding",
      "Dedicated infrastructure",
      "SLA guarantee",
      "Priority support",
      "Analytics dashboard",
      "API access",
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
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Simple, transparent pricing
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
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
                    Most Popular
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
