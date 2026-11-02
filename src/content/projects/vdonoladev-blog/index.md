---
title: "vdonoladev — Dev Log & Blog Pessoal"
summary: "Meu caderno de anotações público e portfólio construído com Astro, SolidJS, TypeScript e Tailwind CSS, focado em performance máxima e hidratação parcial."
date: "Nov 01 2025"
draft: false
tags:
- Astro
- SolidJS
- TypeScript
- Tailwind CSS
demoUrl: "https://vdonoladev.com.br"
repoUrl: "https://github.com/vdonoladev/meu-website"
---

Este próprio site é um dos meus projetos favoritos porque une duas coisas que valorizo muito no desenvolvimento web: **simplicidade arquitetural** e **performance extrema**.

### O Problema

Eu precisava de um espaço centralizado para publicar meus artigos técnicos, anotações de estudo (Dev Log), experiências profissionais e reflexões pessoais sem depender de plataformas fechadas ou CMS pesados que carregam megabytes de JavaScript desnecessário para exibir texto.

### Arquitetura e Decisões Técnicas

- **Astro Collections (Content Layer):** Todos os artigos, experiências e projetos são escritos em Markdown tipado com validação via **Zod** (`src/content/config.ts`), garantindo segurança de tipos em tempo de build.
- **Ilhas Interativas com SolidJS:** O site envia praticamente zero JavaScript por padrão nas páginas de leitura. Onde há interatividade real — como na busca instantânea com filtros combinados de tags e ordenação —, entra o **SolidJS** com reatividade granular e **Fuse.js** para *fuzzy search*.
- **Estilização e Tipografia Editorial:** Construído com **Tailwind CSS** (`@tailwindcss/typography`) e fonte **Atkinson Hyperlegible**, projetada especificamente para máxima legibilidade e conforto visual tanto no tema claro quanto no escuro.
- **SEO & Distribuição:** Geração automática de Sitemap, Feed RSS (`/rss.xml`), metadados Open Graph dinâmicos por artigo e pontuação máxima no Google Lighthouse.

