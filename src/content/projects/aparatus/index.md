---
title: "Aparatus"
summary: "Aparatus é um SaaS de agendamento inteligente para barbearias modernas — simples, bonitas e com tecnologia de ponta."
date: "Nov 10 2025"
draft: false
tags:
- Next.js
- TypeScript
- Prisma
- PostgreSQL (NeonDB)
- ShadCN/UI
- TanStack Query
- Better Auth
- Stripe
- Node.js
- Google Gemini 2.0 Flash
- OpenAI API
demoUrl: https://aparatus-nine.vercel.app/
repoUrl: https://github.com/vdonoladev/aparatus
---

# 💈 Aparatus: o SaaS que eu criei para transformar barbearias modernas

Se tem uma coisa que sempre me incomodou foi ver barbearias ainda presas em agenda de papel, horários confusos e clientes perdidos no WhatsApp. Foi daí que nasceu o **Aparatus**.

Eu quis criar algo simples de usar, bonito e realmente inteligente — não só mais um sistema de agendamento, mas uma experiência.

O resultado? Um SaaS onde o cliente consegue marcar horário conversando naturalmente com uma IA, seja por voz ou texto.

---

## 🚀 A ideia por trás do Aparatus

O **Aparatus** é uma plataforma de agendamento pensada para barbearias modernas que querem subir de nível.

Aqui, o cliente não precisa navegar por telas complicadas. Ele só conversa:

> “Quero cortar o cabelo amanhã à tarde com o João”

E pronto — a IA entende, sugere horários, ajusta detalhes e finaliza o agendamento.

Pra isso, eu usei o **Google Gemini 2.0 Flash** como cérebro principal do chat, garantindo respostas rápidas e naturais. E quando necessário, ainda tenho suporte da API da OpenAI como fallback.

---

## 🧠 O que o sistema faz na prática

Eu foquei em resolver problemas reais:

* 💬 Agendamento por **chat com IA (voz ou texto)**
* 💳 Pagamento direto pelo serviço via Stripe
* 🧔 Gestão completa de barbearias e barbeiros
* 🔐 Login simples e seguro com Google
* 🎨 Interface moderna e agradável

A ideia foi reduzir o atrito ao máximo. Quanto menos cliques, melhor.

---

## ⚙️ As tecnologias que escolhi

Eu montei essa stack pensando em performance, escalabilidade e experiência de desenvolvimento:

* **Next.js** como base fullstack (App Router)
* **TypeScript** pra manter tudo seguro e previsível
* **Prisma** pra lidar com banco de forma limpa
* **PostgreSQL (NeonDB)** como banco serverless
* **ShadCN/UI + Tailwind** pra uma UI moderna sem dor de cabeça
* **TanStack Query** pra controle de dados no front
* **Better Auth** pra autenticação
* **Stripe** pra pagamentos
* **Node.js** no backend

Tudo isso trabalhando junto pra entregar um sistema rápido, confiável e fácil de evoluir.

---

## ⚡ Rodando o projeto localmente

Se você quiser testar ou estudar o projeto, é bem direto:

1. Clone o repositório
2. Instale as dependências
3. Configure o `.env`
4. Rode as migrações com Prisma
5. Suba o servidor

E pronto — o app já vai estar rodando em `http://localhost:3000`.

---

## 💬 A parte mais legal: o chat com IA

Essa é, sem dúvida, a feature que eu mais gostei de construir.

O cliente pode simplesmente falar ou digitar o que quer — como faria com um atendente humano — e o sistema:

* entende contexto
* sugere horários
* ajusta preferências
* confirma o agendamento

E se fizer sentido, já puxa o pagamento na sequência com o Stripe.

Tudo fluindo como uma conversa normal.

---

## 💰 Pagamentos sem complicação

Nada de cobrança manual ou confusão.

* O cliente paga pelo serviço escolhido
* O Stripe processa tudo com segurança
* Webhooks garantem que o sistema saiba exatamente quando o pagamento foi confirmado

Simples e direto.

---

## 🧔 Por que eu criei isso?

O **Aparatus** nasceu de um incômodo real:

Barbearias perdem tempo com gestão manual, clientes perdem tempo tentando agendar — e todo mundo se frustra.

Eu quis resolver isso com tecnologia de verdade, não só “digitalizar” o problema.

Menos burocracia.
Mais organização.
Mais tempo pro barbeiro focar no que importa: o cliente.

---

## 📌 Considerações finais

Esse projeto foi desenvolvido durante a Full Stack Weekend do Felipe Rocha, mas eu levei ele além — pensando como um produto real, pronto pra crescer.

Se você curtiu a ideia ou quer estudar o código, dá uma olhada no repositório.

E se fizer sentido pra você:

⭐ deixa uma estrela — ajuda muito mesmo.

---

💈 **Aparatus é só o começo.**

