---
title: "Dotfiles & Automação de Ambiente Linux"
summary: "Coleção de arquivos de configuração (.bash_aliases, scripts de manutenção e atalhos) para otimizar a produtividade diária no terminal Linux (Pop!_OS / Ubuntu)."
date: "Oct 29 2025"
draft: false
tags:
- Linux
- Bash
- Terminal
- Produtividade
repoUrl: "https://github.com/vdonoladev/myConfigFiles"
---

Quem trabalha diariamente com desenvolvimento e administração de sistemas sabe que pequenas fricções repetidas centenas de vezes por semana custam caro no foco. Criei este repositório para versionar e manter meus arquivos de configuração (**dotfiles**) sempre prontos para replicar em qualquer máquina Linux.

### O que faz parte do ambiente

- **Aliases de Operação Rápida (`.bash_aliases`):** Atalhos pensados para atualização completa de pacotes (`update`), inspeção rápida de interfaces e endereços IP (`ips` com `ip -c -br a`), busca filtrada no histórico (`gh`) e substituição transparente de utilitários clássicos por alternativas modernas como `batcat` e `exa`.
- **Padronização entre Ambientes:** Facilita subir rapidamente meu fluxo de trabalho em novas instalações de **Ubuntu** ou **Pop!_OS**, mantendo o mesmo comportamento no terminal integrado do **VS Code** e do **Zed**.
- **Evolução Contínua:** Funciona como base viva para scripts de diagnóstico de rede, limpeza de pacotes órfãos e automação de containers Docker.

