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
    title: "Lightning Fast CDN",
    description:
      "Content delivered through our global edge network with sub-50ms latency for buffer-free streaming.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "AES-256 encryption, DRM protection, and SOC 2 compliance to keep your content and users safe.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Device Sync",
    description:
      "Seamless handoff between devices. Start watching on your TV and continue on your phone.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Streaming infrastructure across 40+ regions ensuring low-latency playback anywhere in the world.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Auto-scaling infrastructure that handles millions of concurrent viewers without breaking a sweat.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Deep insights into viewer engagement, content performance, and quality of experience metrics.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Platform Capabilities
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              Built for scale, designed for speed
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every layer of Cryoflix is engineered to deliver exceptional
            streaming experiences at any scale.
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
