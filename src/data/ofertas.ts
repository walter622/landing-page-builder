import criativoSubsolador from "@/assets/criativo-subsolador.png.asset.json";
import criativoPulverizador from "@/assets/criativo-pulverizador.png.asset.json";
import criativoEscarificador from "@/assets/criativo-escarificador.png.asset.json";

export type Oferta = {
  nome: string;
  detalhe: string;
  de: string;
  por: string;
  desconto: string;
};

export const ofertas: Oferta[] = [
  {
    nome: "Subsolador Baldan ASDADR 07/07",
    detalhe: "Com discos e rolo",
    de: "R$ 56.000,00",
    por: "R$ 49.792,99",
    desconto: "11% OFF",
  },
  {
    nome: "Cortador de Soqueira DROP CS 600L",
    detalhe: "3 linhas",
    de: "R$ 67.800,00",
    por: "R$ 60.736,84",
    desconto: "10% OFF",
  },
  {
    nome: "Cortador de Soqueira DROP CS 900L",
    detalhe: "3 linhas",
    de: "R$ 68.700,00",
    por: "R$ 61.452,63",
    desconto: "10% OFF",
  },
  {
    nome: "Pulverizador Maxxforte Maxx Wind 450",
    detalhe: "Com kit herbicida",
    de: "R$ 33.880,00",
    por: "R$ 30.315,79",
    desconto: "10% OFF",
  },
  {
    nome: "Escarificador São José Ripper 11",
    detalhe: "Com discos e rolo",
    de: "R$ 119.650,00",
    por: "R$ 112.799,86",
    desconto: "6% OFF",
  },
];

export const criativos = [
  { url: criativoSubsolador.url, alt: "Subsolador Baldan ASDADR 07/07 em oferta no Festival de Implementos A9" },
  { url: criativoPulverizador.url, alt: "Pulverizador Maxxforte Maxx Wind 450 em oferta no Festival de Implementos A9" },
  { url: criativoEscarificador.url, alt: "Escarificador São José Ripper 11 em oferta no Festival de Implementos A9" },
];

// Número do consultor A9 (formato internacional, somente dígitos).
export const WHATSAPP_NUMERO = "551155551346";

export const whatsappLink = (contexto?: string) => {
  const msg = contexto
    ? `Olá! Vim pelo Festival de Implementos A9 e quero saber mais sobre: ${contexto}`
    : "Olá! Vim pelo Festival de Implementos A9 e quero falar com um consultor.";
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
};
