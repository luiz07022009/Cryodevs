import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16 lg:py-20">
          {/* Decorative pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              <span className="text-balance">
                Ready to revolutionize your streaming?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Join millions of viewers already enjoying crystal-clear streaming
              on Cryoflix. Start your free trial today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                asChild
              >
                <Link href="#product">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
