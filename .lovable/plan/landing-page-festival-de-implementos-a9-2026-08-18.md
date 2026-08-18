# Landing Page — Festival de Implementos A9

Página de bloco único para qualificar o lead vindo do Meta antes de mandar para o WhatsApp. Objetivo: apresentar a campanha, mostrar as ofertas e converter em clique no botão de consultor.

## Identidade visual (extraída dos criativos)

- Preto profundo como base, com blocos brancos/claros para respiro — mesma lógica dos criativos.
- Vermelho Massey (#D6001C aprox.) como cor de ação: botões, preço promocional, detalhes.
- Dourado do logo da campanha como acento pontual (selos, "até 20% OFF").
- Verde de destaque (usado em "GASTE MENOS") reservado para o reforço de economia.
- Tipografia condensada/itálica pesada em caixa alta nas headlines e preços, replicando o tom dos criativos. Corpo de texto em sans neutra legível.
- Cantos retos, faixas diagonais e traços de velocidade — nada de cards arredondados genéricos.

## Estrutura da página

### 1. Cabeçalho
Logo Massey Ferguson + A9 no topo (arquivo `massey-a9-preto.png`, versão apropriada ao fundo).

### 2. Hero
- Logo da campanha "Festival de Implementos" em destaque.
- Headline: "Seu próximo investimento no campo pode custar muito menos."
- Subheadline: até 20% OFF e 10x sem juros no cartão.
- Parágrafo de apelo comercial.
- CTA primário: "QUERO FALAR COM UM CONSULTOR NO WHATSAPP".

### 3. Carrossel de criativos
Carrossel com os criativos prontos enviados (subsolador Baldan, pulverizador Maxx Wind 450, escarificador São José Ripper 11), navegação por setas + dots, autoplay suave, responsivo.

### 4. Vitrine de ofertas
Lista das 5 ofertas em cards escuros, com preço "de" tachado e preço promocional em vermelho grande:

| Implemento | De | Por |
|---|---|---|
| Subsolador Baldan ASDADR 07/07 (Disco e Rolo) | R$ 56.000,00 | R$ 49.792,99 |
| Cortador de Soqueira DROP CS 600L (3 linhas) | R$ 67.800,00 | R$ 60.736,84 |
| Cortador de Soqueira DROP CS 900L (3 linhas) | R$ 68.700,00 | R$ 61.452,63 |
| Pulverizador Maxxforte Maxx Wind 450 + Kit Herbicida | R$ 33.880,00 | R$ 30.315,79 |
| Escarificador São José Ripper 11 (Discos e Rolo) | R$ 119.650,00 | R$ 112.799,86 |

Selo "10x sem juros" em cada card.

### 5. CTA secundário
Mesmo botão de WhatsApp, com a linha "Clique no botão para consultar disponibilidade de estoque e garantir sua condição exclusiva."

### 6. Rodapé legal
Valores sob consulta · Frete não incluso · Condições válidas enquanto durar o estoque · Parcelamento em até 10x sem juros no cartão de crédito. Assinatura: A9 Máquinas Agrícolas | Concessionária Massey Ferguson.

## Detalhes técnicos

- Página única em `src/routes/index.tsx`, sem backend.
- Imagens enviadas publicadas via Lovable Assets (CDN) e referenciadas por pointer JSON.
- Carrossel com `embla-carousel-react` (shadcn Carousel).
- Tokens de cor da campanha adicionados em `src/styles.css` (preto, vermelho Massey, dourado, verde) — nada hardcoded nos componentes.
- Botões de WhatsApp com `https://wa.me/<numero>?text=<mensagem pré-preenchida>`.
- SEO: title, description e og tags próprios da campanha.
- Mobile-first, já que o tráfego vem do Meta.

## Pendências para fechar antes de publicar

1. **Número do WhatsApp** do consultor (com DDD) — sem ele o botão fica com link placeholder.
2. **Criativos dos dois Cortadores de Soqueira DROP CS 600L e CS 900L** — ainda não enviados; esses dois entram na vitrine sem imagem no carrossel.
3. Confirmar se há mais produtos além dos 5 listados.
