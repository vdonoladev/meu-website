import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "vdonoladev",
  DESCRIPTION:
    "Portfólio e insights de Víctor Donola Ferreira — Desenvolvedor Full-Stack, Instrutor de TI e Estrategista focado em soluções digitais de alto impacto.",
  AUTHOR: "Víctor Donola Ferreira",
};

// Work Page
export const WORK: Page = {
  TITLE: "Experiências",
  DESCRIPTION: "Minha trajetória profissional, desafios superados e resultados entregues através da tecnologia.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION:
    "Artigos e insights sobre engenharia de software, arquitetura de sistemas, performance e a intersecção entre tecnologia e negócios.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Aplicações reais, sistemas escaláveis e soluções digitais focadas em eficiência técnica e regras de negócio.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Pesquise artigos, soluções e projetos por palavra-chave.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Experiências",
    HREF: "/experiencias",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projetos",
    HREF: "/projetos",
  },
];

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
    HREF: "https://github.com/vdonoladev/",
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
];