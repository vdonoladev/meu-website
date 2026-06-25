---
title: "Astro Sphere: Primeiros Passos"
summary: "Você baixou e instalou o projeto. Vamos colocar tudo para funcionar."
date: "Mar 16 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---

O Astro Sphere foi projetado para ser configurável. Este artigo cobre o básico para personalizar o site.

### Primeiro, vamos alterar a URL

```js
//astro.config.mjs

export default defineConfig({
  site: "https://astro-sphere.vercel.app", // seu domínio aqui
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})
```

### Em seguida, vamos configurar o Site

```js
// src/consts.ts

export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Bem-vindo ao Astro Sphere, portfólio e blog para designers e desenvolvedores.",
  AUTHOR: "Mark Horn",
}
```

| Campo       | Tipo   | Descrição                                                                      |
| :---------- | :----- | :----------------------------------------------------------------------------- |
| TITLE       | String | Título do site. Exibido no cabeçalho e rodapé. Usado no SEO.                   |
| DESCRIPTION | String | Descrição da página inicial do site. Usada no SEO.                             |
| AUTHOR      | String | Seu nome.                                                                      |

### Altere a identidade visual

O ícone do navegador está em `/public/favicon.svg`

O ícone de marca do cabeçalho e rodapé está em `/public/brand.svg` como um sprite com id="brand"

### O restante do arquivo consts

Cada página possui uma entrada de metadados útil para SEO.

```js
export const WORK: Page = {
  TITLE: "Experiências",
  DESCRIPTION: "Lugares onde trabalhei.",
}
```

Os links exibidos no cabeçalho e no menu lateral

```js
export const LINKS: Links = [
  { HREF: "/", TEXT: "Home" },
  { HREF: "/experiencias", TEXT: "Experiências" },
  { HREF: "/blog", TEXT: "Blog" },
  { HREF: "/projetos", TEXT: "Projetos" },
]
```

Os links para redes sociais

```js
export const SOCIALS: Socials = [
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
]
```

| Campo | Tipo   | Obrigatório | Descrição                                                    |
| :---- | :----- | :---------- | :----------------------------------------------------------- |
| NAME  | string | sim         | Nome acessível                                               |
| ICON  | string | sim         | Corresponde ao id do símbolo em `public/social.svg`          |
| TEXT  | string | sim         | Nome abreviado do perfil                                     |
| HREF  | string | sim         | Link para o perfil na rede social                            |
