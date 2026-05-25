import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "vdonoladev",
  DESCRIPTION:
    "Bem-vindo(a) ao vdonoladev, um portfólio pessoal e blog que apresenta meus projetos, artigos e trajetória profissional.",
  AUTHOR: "Víctor Donola Ferreira",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Locais onde já trabalhei.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Escrevo sobre tópicos que me interessam.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Projetos recentes em que trabalhei.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Pesquise todas as publicações e projetos por palavra-chave.",
};

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
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "contato.victordonolaferreira@outlook.com",
    HREF: "mailto:contato.victordonolaferreira@outlook.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "vdonoladev",
    HREF: "https://github.com/vdonoladev",
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
