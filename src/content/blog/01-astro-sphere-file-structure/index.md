---
title: "Astro Sphere: Estrutura de Arquivos"
summary: "Conheça os diretórios e arquivos do projeto e para que cada um serve."
date: "Mar 17 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---

Um resumo de linha única do que cada arquivo e diretório faz:
```js
/
├── public/ // Arquivos disponíveis publicamente no navegador
│   ├── fonts/ // Fontes padrão do Astro Sphere
│   │   └── atkinson-bold.woff  // peso da fonte 700
│   │   └── atkinson-regular.woff // peso da fonte 400
│   ├── js/ // Javascript importado no <head>
│   │   └── animate.js // função para animar elementos da página
│   │   └── bg.js // função para gerar o plano de fundo
│   │   └── scroll.js // controla os estilos do cabeçalho ao rolar
│   │   └── theme.js // controla o tema claro e escuro
│   └── brand.svg // ícone exibido no cabeçalho e rodapé
│   └── favicon.svg // ícone exibido na aba do navegador
│   └── ui.svg // sprite SVG com todos os ícones de interface
│   └── social.svg // sprite SVG com todos os ícones de redes sociais
│   └── open-graph.jpg // imagem padrão para open-graph
│   └── robots.txt // instruções para rastreadores e bots
├── src/ // Tudo que será compilado para o site
│   ├── components/ // Todos os componentes Astro e SolidJS
│   ├── content/ // Contém todo o conteúdo Markdown estático
│   │   |  blog/ // Posts do blog em Markdown
│   │   |  projects/ // Projetos em Markdown
│   │   |  work/ // Experiências profissionais em Markdown
│   │   |  legal/ // Documentos legais em Markdown
│   │   └── config.ts // Configuração das coleções do Astro
│   ├── layouts/ // Layouts reutilizados em todo o site
│   └── pages/ // Todas as páginas do site
│   └── styles/ // CSS e estilos globais do Tailwind
│   └── lib/ // Funções utilitárias globais
│   └── consts.ts // Metadados das páginas e configurações gerais
│   └── types.ts // Tipos para consts.ts
└── .gitignore // Arquivos e diretórios ignorados pelo Git
└── .eslintignore // Arquivos e diretórios ignorados pelo ESLint
└── eslintrc.cjs // Configuração do ESLint
└── astro.config.mjs // Configuração do Astro
└── tailwind.config.mjs // Configuração do Tailwind
└── tsconfig.json // Configuração do TypeScript
└── package.json // Todos os pacotes instalados
```
