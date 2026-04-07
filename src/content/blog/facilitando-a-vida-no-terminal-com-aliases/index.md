---
title: "Facilitando a vida no terminal com aliases"
summary: "Aprenda como usar aliases no terminal para simplificar comandos e aumentar a produtividade."
date: "Jun 14 2025"
draft: false
tags:
- Produtividade
- Terminal
---

Hoje quero compartilhar com vocês algo que me ajuda bastante no dia a dia com o temrinal: os **aliases** no Linux – mais precisamente no **Pop!_OS**, que é o sistema que utilizo atualmente.

### O que são aliases?

Aliases são basicamente **atalhos personalizados** que a gente cria no terminal pra facilitar comandos que usamos com frequência ou que são muito grandes. Em vez de digitar toda vez `sudo apt update && sudo apt upgrade -y`, por exemplo, você pode simplismente digitar `update`, e pronto – missão dada, missão cumprida! 😎

Eles ajudam demais a **automatizar e acelerar o fluxo de trabalho**. Imagina ter que digitar o mesmo comando toda hora, sendo que dá pra encurtar isso em uma palavra? Pois é, meu amigo, é aí que entra o poder dos aliases.

### Como criar um alias

É bem simples de configurar. Vou mostrar passo a passo como fazer funcionar no seu terminal:

1. Primeiramente, no seu terminal, vá até sua **home** e crie o arquivo `.bash_aliases` (se ele já não existir):

```bash
touch ~/.bash_aliases
```

2. Agora, abra o arquivo com seu editor favorito. Eu uso o **VSCode**, então: 

```bash
code ~/.bash_aliases
```

3. Dentro desse arquivo, você pode começar a adicionar seus aliases. A sintaxe é bem simples:

```bash
alias nome_do_alias='comando que você quer encurtar'
```

4. Depois de salvar, ou você reinicia o terminal, ou executa o seguinte comando para carregar as alterações:

```bash
source ~/.bash_aliases
```

### Meus Aliases

Aqui abaixo vou colocar os que eu utilizo, que podem servir como referência pra vocês. Claro, tudo adaptável — o ideal é que você vá montando conforme o seu uso e rotina. Mas esses aqui são os que me acompanham diariamente:

```bash
# CONFIGURAÇÕES
alias aliasconf='code .bash_aliases' # Abre o arquivo .bash_aliases no editor VSCode para edição rápida

# COMANDOS
alias cat='batcat' # Substitui o comando cat pelo batcat, que exibe arquivos com syntax highlighting
alias update='sudo apt update && sudo apt upgrade -y' # Atualiza a lista de pacotes e instala atualizações do sistema
alias ips='ip -c -br a' # Mostra os endereços IP de todas as interfaces de rede de forma colorida e resumida
alias ls='exa' # Substitui o comando ls pelo exa, que lista arquivos com cores e ícones
alias gh='history|grep' # Busca um comando específico no histórico do terminal
alias lt='tree -L 2' # Mostra a estrutura de diretórios em árvore com até 2 níveis de profundidade
alias ll='ls -lah' # Lista detalhada com arquivos ocultos
alias ..='cd ..' # Volta um diretório
alias ...='cd ../..' # Volta dois diretórios

# Git
alias gadd='git add' # Atalho para adicionar arquivos ao staging do Git
alias gaddall='git add .' # Adiciona todos os arquivos modificados ao staging
alias gcom='git commit -m' # Atalho para fazer commit com mensagem (uso: gcom "mensagem")
alias gstatus='git status' # Mostra o status do repositório Git
alias glog='git log --oneline' # Mostra o histórico de commits de forma resumida
alias gpull='git pull' # Atalho para puxar alterações do repositório remoto
alias gpush='git push' # Atalho para enviar commits para o repositório remoto
alias gbranch='git branch' # Lista todas as branches locais
alias gcheckout='git checkout' # Muda de branch ou restaura arquivos

# MISC
alias please='sudo' # Permite usar "please" em vez de "sudo" para executar comandos como administrador
alias nf='neofetch' # Exibe informações do sistema (distro, kernel, CPU, etc.) de forma estilizada
```

Esse tipo de coisinha simples faz uma **diferença absurda** quando a gente começa a usar o terminal com mais frequência. Vale muito a pena investir um tempinho organizando esses atalhos do jeito que funciona melhor pra você.

Até o próximo post!