import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
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
                Now Streaming Worldwide
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">
                The future of streaming{" "}
                <span className="text-primary">starts here.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Cryo Devs builds the technology that powers Cryoflix, a
              next-generation streaming platform delivering seamless
              entertainment to millions.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#product">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="#product">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">
                  10M+
                </p>
                <p className="text-xs text-muted-foreground">Active Users</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">
                  4K
                </p>
                <p className="text-xs text-muted-foreground">Ultra HD</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">
                  99.9%
                </p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <Image
                src="/images/cryoflix-hero.jpg"
                alt="Cryoflix streaming platform dashboard showing movies and TV shows"
                width={640}
                height={440}
                className="relative rounded-xl border border-border shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
