---
title: "Astro Sphere: Escrevendo em Markdown"
summary: "Sintaxe básica de Markdown para usar ao escrever conteúdo no Astro Sphere."
date: "Mar 13 2024"
draft: false
tags:
- Tutorial
- Astro
- Astro Sphere
- Markdown
---

### Títulos

```text
# H1

## H2

### H3

#### H4

##### H5

###### H6

```

# H1

## H2

### H3

#### H4

##### H5

###### H6

### Parágrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

### Imagens

Imagem relativa na pasta /public

```markdown
![placeholder do blog](/open-graph.jpg)
```

![placeholder do blog](/open-graph.jpg)

Imagem relativa na mesma pasta do arquivo Markdown

```markdown
![Imagem de Teste Relativa](./spongebob.png)
```

![Imagem de Teste Relativa](./spongebob.png)

## Citações em Bloco

O elemento de citação em bloco representa conteúdo citado de outra fonte, opcionalmente com uma referência dentro de um elemento `footer` ou `cite`.

### Citação sem atribuição

#### Sintaxe

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota:** você pode usar _sintaxe Markdown_ dentro de uma citação.
```

#### Resultado

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota:** você pode usar _sintaxe Markdown_ dentro de uma citação.

### Citação com atribuição

#### Sintaxe

```markdown
> Não se comunique compartilhando memória; compartilhe memória comunicando-se.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Resultado

> Não se comunique compartilhando memória; compartilhe memória comunicando-se.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima é um trecho da [palestra](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike no Gopherfest, 18 de novembro de 2015.

## Tabelas

#### Sintaxe

```markdown
| Itálico   | Negrito  | Código |
| --------- | -------- | ------ |
| _itálico_ | **negrito** | `código` |
```

#### Resultado

| Itálico   | Negrito     | Código   |
| --------- | ----------- | -------- |
| _itálico_ | **negrito** | `código` |

## Blocos de Código

#### Sintaxe

Use 3 acentos graves ``` em uma nova linha, escreva o trecho de código e feche com 3 acentos graves em uma nova linha. Para realce de sintaxe, adicione o nome da linguagem após os primeiros 3 acentos graves, por exemplo: html, javascript, css, markdown, typescript, txt, bash.

````markdown
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Exemplo de Documento HTML5</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```
````

Resultado

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Exemplo de Documento HTML5</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```

## Tipos de Lista

### Lista Ordenada

#### Sintaxe

```markdown
1. Primeiro item
2. Segundo item
3. Terceiro item
```

#### Resultado

1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista Não Ordenada

#### Sintaxe

```markdown
- Item da lista
- Outro item
- Mais um item
```

#### Resultado

- Item da lista
- Outro item
- Mais um item

### Lista Aninhada

#### Sintaxe

```markdown
- Frutas
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo
```

#### Resultado

- Frutas
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo

## Outros Elementos — abbr, sub, sup, kbd, mark

#### Sintaxe

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Pressione <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> para encerrar a sessão.

A maioria das <mark>salamandras</mark> são noturnas e caçam insetos, vermes e outras criaturas pequenas.
```

#### Resultado

<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Pressione <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> para encerrar a sessão.

A maioria das <mark>salamandras</mark> são noturnas e caçam insetos, vermes e outras criaturas pequenas.
