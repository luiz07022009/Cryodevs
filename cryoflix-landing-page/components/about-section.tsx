import { Snowflake } from "lucide-react";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "120+", label: "Team Members" },
  { value: "40+", label: "Countries" },
  { value: "10M+", label: "Users Worldwide" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
            <Snowflake className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-balance">
              About Cryo Devs
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are a team of engineers, designers, and media technologists on a
            mission to redefine digital entertainment. Founded with the belief
            that streaming should be seamless, beautiful, and accessible to
            everyone, we built Cryoflix from the ground up using cutting-edge
            technology.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our proprietary streaming engine, edge infrastructure, and
            AI-powered recommendation system set us apart in a crowded market.
            We don&apos;t just stream content, we craft experiences.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-background p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
