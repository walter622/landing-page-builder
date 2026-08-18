import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/ofertas";
import { cn } from "@/lib/utils";

export function CtaWhatsapp({
  contexto,
  className,
  label = "Quero falar com um consultor no WhatsApp",
}: {
  contexto?: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappLink(contexto)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "pulse-cta group inline-flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-5 text-center font-display text-xl font-extrabold uppercase italic tracking-tight text-whatsapp-foreground transition-all hover:brightness-110 active:translate-y-0.5 sm:w-auto sm:px-10 sm:text-2xl",
        className,
      )}
    >
      <MessageCircle className="size-6 shrink-0" strokeWidth={2.5} />
      <span>{label}</span>
    </a>
  );
}
