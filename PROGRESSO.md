# PROGRESSO - Landing Page Oficina da Multa

Data: 2025-09-24 17:06:40 -03

## Alterações realizadas

- Atualização completa de WhatsApp:
  - Todos os links para `https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!`
  - Todos os números exibidos atualizados para `(22) 99261-3485`
  - Placeholder do telefone alterado para `(22) 99261-3485`

- CTAs de alta conversão:
  - Barra sticky (desktop) com mensagem “CNH suspensa? Fale agora com um especialista via WhatsApp”
  - Botão flutuante (mobile) fixo no canto inferior direito “WhatsApp”

- Mensagem do Herói:
  - Texto focado em Lei Seca/CNH suspensa, alinhado com a campanha

- Nova seção: `#gravissimas`
  - Título: “Recursos de Multas Gravíssimas (Lei Seca, CNH Suspensa)”
  - Cards: Lei Seca, CNH Suspensa, Excesso +50%, Racha
  - CTAs para WhatsApp em cada card e CTA principal no final da seção
  - Item de menu "Gravíssimas" (desktop e mobile)

- Elementos de confiança
  - Badges no herói: 15+ anos, 6.000+ processos, 95% sucesso
  - Mini depoimento junto do CTA em `#gravissimas`

- Otimizações de performance
  - `loading="lazy"` e `decoding="async"` nas imagens fora da primeira dobra
    - Imagem da seção "Sobre"
    - Logo do rodapé

- Tag e Conversão Google Ads
  - Adicionada Google tag (gtag.js) em `index.html` com ID `AW-16474951542`
  - Adicionado snippet de conversão `gtag_report_conversion` (Clique WhatsApp – Site)
  - Disparo de conversão aplicado em todos os links/botões de WhatsApp (`onClick`)

- Rastreamento de campanha (UTM)
  - Adicionados parâmetros UTM na mensagem dos links `wa.me` para diferenciação de origem/variação:
    - `utm_source=google`, `utm_medium=cpc`, `utm_campaign=leiseca`, e `utm_content` contextual (ex.: `nav_cta_desktop`, `floating_cta_mobile`, `hero_cta_whatsapp`, `gravissimas_*`, `sobre_cta`, `contato_info`, `footer_*`)
  - Observação: como `wa.me` não aceita múltiplos parâmetros de URL além de `text`, as UTMs foram incorporadas no corpo da mensagem, após uma quebra de linha, para referência manual ou automação futura.

## Próximos passos sugeridos
- Revisar deploy no Netlify após commit/push
- Acompanhar métricas (cliques no WhatsApp) via UTM/Netlify Analytics
- Opcional: adicionar evento de clique no WhatsApp para monitoramento

## Observações
- Todas as alterações foram centralizadas em `src/App.tsx`, sem quebrar a identidade visual, navegação ou estrutura do site.
