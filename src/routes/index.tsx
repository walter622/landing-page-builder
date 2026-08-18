import { createFileRoute } from "@tanstack/react-router";
import { BadgePercent, CreditCard, ShieldCheck } from "lucide-react";
import logoFestival from "@/assets/logo-festival.png.asset.json";
import logoMarca from "@/assets/logo-a9-branco-transp.png.asset.json";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";
import { CarrosselCriativos } from "@/components/CarrosselCriativos";
import { WhatsappFlutuante } from "@/components/WhatsappFlutuante";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Festival de Implementos A9 | Até 20% OFF em 10x sem juros",
      },
      {
        name: "description",
        content:
          "Subsoladores, cortadores de soqueira, pulverizadores e escarificadores com até 20% OFF e 10x sem juros. Fale com um consultor A9 Máquinas Agrícolas.",
      },
      { property: "og:title", content: "Festival de Implementos A9 | Até 20% OFF" },
      {
        property: "og:description",
        content:
          "Renove seu maquinário pagando menos: implementos agrícolas com desconto e parcelamento em até 10x sem juros no cartão.",
      },
      { name: "twitter:title", content: "Festival de Implementos A9 | Até 20% OFF" },
      {
        name: "twitter:description",
        content:
          "Implementos agrícolas com até 20% OFF e 10x sem juros. Consulte um consultor A9 Máquinas Agrícolas.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Cabeçalho */}
      <header className="bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-5">
          <img
            src={logoMarca.url}
            alt="A9 Máquinas Agrícolas — Concessionária Massey Ferguson"
            className="h-20 w-auto sm:h-24"
          />
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="grain-dark relative overflow-hidden border-b border-border">
          <div className="mx-auto max-w-4xl px-5 py-12 text-center sm:py-20">
            <img
              src={logoFestival.url}
              alt="Logo do Festival de Implementos A9"
              className="mx-auto mb-8 w-64 max-w-full sm:w-96"
            />

            <h1 className="text-4xl text-foreground sm:text-6xl">
              Seu próximo investimento no campo{" "}
              <span className="text-brand">pode custar muito menos</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl font-display text-xl font-bold uppercase italic text-gold sm:text-2xl">
              Até 20% OFF e parcelamento em até 10x sem juros no cartão de crédito
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A oportunidade que seu maquinário esperava chegou. Renove sua operação com
              inteligência, aumente a produtividade da sua fazenda e invista mais na lavoura
              pagando menos na estrutura.
            </p>

            <div className="mt-9 flex justify-center">
              <CtaWhatsapp />
            </div>

            <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                { icon: BadgePercent, texto: "Até 20% de desconto" },
                { icon: CreditCard, texto: "10x sem juros no cartão" },
                { icon: ShieldCheck, texto: "Concessionária Massey Ferguson" },
              ].map(({ icon: Icon, texto }) => (
                <li
                  key={texto}
                  className="flex items-center justify-center gap-2 border border-border bg-card/60 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-foreground"
                >
                  <Icon className="size-5 shrink-0 text-brand" strokeWidth={2.5} />
                  {texto}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Carrossel de criativos */}
        <section className="border-b border-border bg-ink py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="mb-8 text-center text-3xl text-foreground sm:text-4xl">
              Algumas de <span className="text-gold">nossas ofertas</span>
            </h2>
            <CarrosselCriativos />
          </div>
        </section>

        {/* CTA final */}
        <section className="grain-dark border-y border-border py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl text-foreground sm:text-5xl">
              Garanta sua condição <span className="text-brand">exclusiva</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Clique no botão para consultar disponibilidade de estoque e garantir sua condição
              exclusiva.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaWhatsapp />
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-ink py-10">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <img
            src={logoMarca.url}
            alt="A9 Máquinas Agrícolas — Concessionária Massey Ferguson"
            className="mx-auto h-16 w-auto"
          />
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            *Valores sob consulta. *Frete não incluso. Condições válidas enquanto durar o estoque.
            Parcelamento em até 10x sem juros no cartão de crédito.
          </p>
          <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-foreground">
            A9 Máquinas Agrícolas | Concessionária Massey Ferguson
          </p>
        </div>
      </footer>
    </div>
  );
}
