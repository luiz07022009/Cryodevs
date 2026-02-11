import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "4K Ultra HD & HDR10+ streaming",
  "Adaptive bitrate for any connection",
  "AI-powered content recommendations",
  "Offline downloads on all devices",
  "Multi-profile family sharing",
  "No ads, ever",
];

export function ProductSection() {
  return (
    <section id="product" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <Image
                src="/images/cryoflix-devices.jpg"
                alt="Cryoflix streaming on multiple devices including laptop, tablet and phone"
                width={600}
                height={420}
                className="relative rounded-xl border border-border shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Product
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              <span className="text-balance">Meet Cryoflix</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A streaming platform that puts quality and experience first.
              Powered by Cryo Devs&apos; proprietary streaming engine, Cryoflix
              delivers crystal-clear content with zero buffering.
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
                  Explore Cryoflix
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
