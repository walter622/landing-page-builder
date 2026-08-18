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
        "pulse-cta group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-4 py-4 text-center font-display text-base font-extrabold uppercase italic tracking-tight text-whatsapp-foreground transition-all hover:brightness-110 active:translate-y-0.5 sm:w-auto sm:gap-3 sm:px-10 sm:py-5 sm:text-2xl",
        className,
      )}
    >
      <MessageCircle className="size-5 shrink-0 sm:size-6" strokeWidth={2.5} />
      <span>{label}</span>
    </a>
  );
}
