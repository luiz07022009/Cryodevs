import { Snowflake } from "lucide-react";

const stats = [
  { value: "2024", label: "Início do projeto" },
  { value: "Pequeno", label: "Time enxuto" },
  { value: "Brasil", label: "Focado no contexto local" },
  { value: "Em teste", label: "Usuários em ambiente de demo" },
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
              Sobre a Cryo Devs
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Somos um time de pessoas desenvolvedoras e designers que gosta de
            construir produtos digitais bem estruturados. O Cryoflix nasceu
            como uma aplicação de exemplo para estudar e demonstrar boas
            práticas em aplicações de filmes.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Em vez de prometer motores de streaming proprietários, infraestrutura
            global e sistemas de recomendação com IA, preferimos focar em um
            código limpo, transparente e fácil de adaptar à sua realidade.
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
