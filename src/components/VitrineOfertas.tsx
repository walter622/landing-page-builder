import { ofertas } from "@/data/ofertas";
import { CtaWhatsapp } from "@/components/CtaWhatsapp";

export function VitrineOfertas() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ofertas.map((o) => (
        <article
          key={o.nome}
          className="flex flex-col justify-between border-2 border-border bg-card transition-colors hover:border-brand"
        >
          <div className="p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="diagonal-band bg-brand py-1 pr-8 pl-3 font-display text-sm font-extrabold uppercase italic text-brand-foreground">
                {o.desconto}
              </span>
              <span className="border border-gold/50 px-2 py-1 font-display text-xs font-bold uppercase text-gold">
                10x sem juros
              </span>
            </div>

            <h3 className="text-2xl leading-tight text-foreground">{o.nome}</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {o.detalhe}
            </p>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                De <span className="line-through">{o.de}</span>
              </p>
              <p className="price-display mt-1 text-4xl text-brand">{o.por}</p>
            </div>
          </div>

          <div className="px-5 pb-5">
            <CtaWhatsapp
              contexto={o.nome}
              label="Quero esta oferta"
              className="w-full px-4 py-3 text-base shadow-none active:translate-y-0 sm:w-full sm:px-4 sm:text-base"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
