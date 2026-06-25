---
title: "Astro Sphere: Adicionando um novo post ou projeto."
summary: "Adicionar um novo artigo (post ou projeto) é bem simples."
date: "Mar 14 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---
### Básico

Crie uma pasta na coleção correspondente ao tipo de conteúdo que deseja criar. O nome da pasta será o slug pelo qual seu conteúdo será acessado.

```text
ao criar

/content/blog/meu-novo-post/index.md

será publicado em

https://seudominio.com.br/blog/meu-novo-post

```

### Frontmatter

O frontmatter é escrito em YAML. Todos os posts e projetos exigem frontmatter no início do documento. Todo o frontmatter deve estar entre três traços, similar ao formato do Astro. Veja o exemplo abaixo.

### Coleção Blog

| Campo   | Tipo    | Obrig.? | Descrição                                                         |
| :------ | :------ | :------ | :---------------------------------------------------------------- |
| title   | string  | sim     | Título do post. Usado no SEO.                                     |
| summary | string  | sim     | Descrição curta do post. Usada no SEO.                            |
| date    | string  | sim     | Qualquer string de data que o JavaScript consiga converter.       |
| tags    | array   | sim     | Tópico do post. Array de strings. Usado para filtragem.           |
| draft   | boolean | não     | Oculta o post das coleções. Entrada não publicada.                |

Exemplo de frontmatter para post do blog

```yaml
---
title: "Astro Sphere: Adicionando um novo post ou projeto."
summary: "Adicionar um novo artigo (post ou projeto) é bem simples."
date: "Mar 18 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
---
```

### Coleção Projetos (estende a Coleção Blog)

| Campo   | Tipo    | Obrig.? | Descrição                                                         |
| :------ | :------ | :------ | :---------------------------------------------------------------- |
| title   | string  | sim     | Título do post. Usado no SEO.                                     |
| summary | string  | sim     | Descrição curta do post. Usada no SEO.                            |
| date    | string  | sim     | Qualquer string de data que o JavaScript consiga converter.       |
| tags    | array   | sim     | Tópico do post. Array de strings. Usado para filtragem.           |
| draft   | boolean | não     | Oculta o post das coleções. Entrada não publicada.                |
| demoUrl | string  | não     | Link para o projeto publicado, se aplicável.                      |
| repoUrl | string  | não     | Link para o repositório, se aplicável.                            |

Exemplo de frontmatter para projeto

```yaml
---
title: "Astro Sphere"
summary: "Astro Sphere, portfólio e blog para designers e desenvolvedores."
date: "Mar 18 2024"
draft: false
tags:
- Astro
- Typescript
- Javascript
- Tailwind
- SolidJS
demoUrl: https://astro-sphere.vercel.app
repoUrl: https://github.com/markhorn-dev/astro-sphere
---
```

### Escreva seu conteúdo
Chegou a hora de escrever! Basta adicionar o conteúdo abaixo do frontmatter. A escrita em Markdown será abordada no próximo artigo.
