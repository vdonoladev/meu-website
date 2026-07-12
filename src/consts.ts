import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "vdonoladev",
  DESCRIPTION:
    "Espaço pessoal de Víctor Donola Ferreira — dev full-stack, instrutor de TI e eterno estudante, compartilhando o que aprendo (e erro) pelo caminho.",
  AUTHOR: "Víctor Donola Ferreira",
};

// Work Page
export const WORK: Page = {
  TITLE: "Experiências",
  DESCRIPTION: "Um pouco da minha caminhada até aqui: os projetos que passaram pela minha mão e o que cada um me ensinou.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION:
    "Anotações e reflexões sobre código, sistemas, disciplina e as ideias que vou juntando no dia a dia — sem fórmula pronta, só experiência real.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projetos",
  DESCRIPTION: "Coisas que construí por curiosidade, necessidade ou só pra testar uma ideia. Nem tudo é perfeito, mas tudo é aprendizado.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Procure por assunto, tecnologia ou palavra-chave aqui no site.",
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