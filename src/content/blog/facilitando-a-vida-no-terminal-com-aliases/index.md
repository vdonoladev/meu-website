---
title: "Facilitando a vida no terminal com aliases"
summary: "Como criar e configurar aliases no terminal Linux para automatizar rotinas e otimizar o fluxo de trabalho."
date: "Oct 29 2025"
draft: false
tags:
- Dicas
- Linux
- Terminal
- Tecnologia
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

```bash {base_url="https://github.com/vdonoladev/myConfigFiles/blob/main/home/.bash_aliases", filename="home/.bash_aliases"}
# CONFIGURAÇÕES
alias aliasconf='code .bash_aliases' # Abre o próprio .bash_aliases para edição rápida.

# COMANDOS
alias cat='batcat'                                    # Substitui o comando cat pelo batcat, que é uma versão melhorada do cat.
alias update='sudo apt update && sudo apt upgrade -y' # Atualiza o sistema.
alias ips='ip -c -br a'                               # Mostra os endereços IP de todas as interfaces de rede.
alias ls='exa'                                        # Substitui o comando ls pelo exa, que é uma versão melhorada do ls.
alias gh='history|grep'                               # Busca no histórico de comandos.

# MISC
alias please='sudo' # Adiciona "please" antes de comandos que requerem sudo.
alias nf='neofetch' # Mostra informações do sistema de forma estilizada.
```

Esse tipo de coisinha simples faz uma **diferença absurda** quando a gente começa a usar o terminal com mais frequência. Vale muito a pena investir um tempinho organizando esses atalhos do jeito que funciona melhor pra você.

Até o próximo post!