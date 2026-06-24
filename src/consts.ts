import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Víctor Donola Ferreira",
  DESCRIPTION: "Portfólio e blog pessoal de Víctor Donola Ferreira — desenvolvedor web, instrutor de TI e eterno aprendiz.",
  AUTHOR: "Víctor Donola Ferreira",
}

// Work Page
export const WORK: Page = {
  TITLE: "Experiências",
  DESCRIPTION: "Lugares onde trabalhei e o que fiz por lá.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Textos sobre tecnologia, desenvolvimento e tudo que me faz perder o sono de curiosidade.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Projetos recentes que desenvolvi ou estou desenvolvendo.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Pesquise posts e projetos por palavra-chave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Experiências", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projetos", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contato@vdonoladev.com.br",
    HREF: "mailto:contato@vdonoladev.com.br",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "vdonoladev",
    HREF: "https://github.com/vdonoladev/"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "vdonoladev",
    HREF: "https://www.linkedin.com/in/vdonoladev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "donoladev",
    HREF: "https://twitter.com/donoladev",
  },
]