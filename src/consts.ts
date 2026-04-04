import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "@vdonoladev",
  DESCRIPTION: "Bem-vindo ao meu espaço, um blog e portfólio onde compartilho meus projetos, ideias e aprendizados como desenvolvedor.",
  AUTHOR: "Víctor Donola Ferreira",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Locais onde já trabalhei.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Escrevo sobre temas pelos quais sou apaixonado.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Projetos recentes em que trabalhei.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Pesquisa",
  DESCRIPTION: "Pesquise todas as publicações e projetos por palavra-chave.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contato.victordonolaferreira@outlook.com",
    HREF: "contato.victordonolaferreira@outlook.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "vdonoladev",
    HREF: "https://github.com/vdonoladev"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Víctor Donola Ferreira",
    HREF: "https://www.linkedin.com/in/vdonoladev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "@donoladev",
    HREF: "https://twitter.com/donoladev",
  },
]

