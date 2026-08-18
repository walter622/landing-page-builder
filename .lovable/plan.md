# Landing Page — Festival de Implementos A9

## Objetivo
Criar uma landing page de bloco único para qualificar leads vindos do Meta antes de direcioná-los ao WhatsApp. A página deve converter o visitante em clique no botão de conversa com um consultor, usando a oferta do Festival de Implementos A9 como gancho.

## Estrutura da página

### 1. Cabeçalho
- Logo da marca: **A9 Máquinas Agrícolas | Concessionária Massey Ferguson**
- Layout minimalista, fixo ou próximo ao topo, com fundo claro ou escuro conforme a identidade visual que for definida pelos criativos.

### 2. Hero Section
- **Headline principal:** "Seu próximo investimento no campo pode custar muito menos."
- **Sub-headline:** "Aproveite o Festival de Implementos A9 com até 20% OFF e parcelamento em até 10x sem juros no cartão de crédito."
- **Apelo comercial:** "A oportunidade que seu maquinário esperava chegou. Renove sua operação com inteligência, aumente a produtividade da sua fazenda e invista mais na lavoura pagando menos na estrutura."
- **CTA primário:** botão de WhatsApp com ícone de chat e texto "QUERO FALAR COM UM CONSULTOR NO WHATSAPP".

### 3. Vitrine de Ofertas
- Apresentação dos 5 implementos enviados em cards ou tabela visual, com:
  - Nome do implemento
  - Preço "de" tachado
  - Preço promocional em destaque
- Layout em grade responsiva (mobile 1 coluna, desktop 2-3 colunas).
- **Carrossel de criativos:** cada produto pode exibir imagens/criativos já prontos, com navegação por setas ou dots quando houver múltiplos ativos por produto.

### Lista de produtos confirmada
| Implemento | De | Por |
|---|---|---|
| Subsolador Baldan ASDADR 07/07 (Disco e Rolo) | R$ 56.000,00 | R$ 49.792,99 |
| Cortador de Soqueira DROP CS 600L (3 linhas) | R$ 67.800,00 | R$ 60.736,84 |
| Cortador de Soqueira DROP CS 900L (3 linhas) | R$ 68.700,00 | R$ 61.452,63 |
| Pulverizador Maxxforte Maxx Wind 450 + Kit Herbicida | R$ 33.880,00 | R$ 30.315,79 |
| Escarificador São José Ripper 11 (Discos e Rolo) | R$ 119.650,00 | R$ 112.799,86 |

> **Dúvida a confirmar:** o usuário mencionou inicialmente "nove" produtos, mas enviou 5. Verificar se serão incluídos mais 4 produtos ou se o número final é 5.

### 4. CTA secundário
- Repetir o botão "QUERO FALAR COM UM CONSULTOR NO WHATSAPP" abaixo da vitrine.
- Linha de reforço: "Clique no botão para consultar disponibilidade de estoque e garantir sua condição exclusiva."

### 5. Rodapé legal
- Textos obrigatórios:
  - *Valores sob consulta.
  - *Frete não incluso.
  - Condições válidas enquanto durar o estoque.
  - Parcelamento em até 10x sem juros no cartão de crédito.
- Logo/assinatura: A9 Máquinas Agrícolas | Concessionária Massey Ferguson.

## Identidade visual
- Paleta baseada nos criativos enviados, com o **vermelho da marca** e **preto** como cores de destaque.
- Tipografia clean, legível em mobile, com hierarquia forte entre headline e preços.
- Botão de CTA em vermelho/preto com alto contraste para maximizar conversão.
- Imagens dos criativos nos cards, mantendo a identidade visual da campanha.

## Tecnologia e implementação
- TanStack Start + React + Tailwind CSS v4.
- Componente de carrossel leve (shadcn/ui Carousel ou embla-carousel-react) para os criativos dos produtos.
- Links do WhatsApp podem usar mensagem pré-preenchida com a oferta.
- Página única, sem navegação interna, 100% responsiva.

## Próximos passos pendentes
1. Receber os criativos/images dos produtos.
2. Receber o logo da campanha e o logo da marca.
3. Confirmar se o total de produtos será 5 ou 9.
4. Confirmar número/link do WhatsApp dos consultores.
