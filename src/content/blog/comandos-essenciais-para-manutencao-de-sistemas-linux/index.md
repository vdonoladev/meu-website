---
title: "Comandos essenciais para manutenção de sistemas Linux"
summary: "Comandos Linux essenciais para manter sistemas Debian e Ubuntu atualizados, limpos, organizados e livres de problemas com pacotes e dependências."
date: "Feb 11 2025"
draft: false
tags:
- Dicas
- Linux
- Tecnologia
- Terminal
---

Se você usa Linux para desenvolvimento, administração de servidores ou simplesmente no dia a dia, conhecer alguns comandos básicos de manutenção pode evitar muita dor de cabeça.

Este guia reúne os comandos mais úteis e atuais para sistemas baseados em **Debian**, como **Debian e Ubuntu**, utilizando principalmente o `apt`, que é a interface recomendada para operações interativas.

## Atualizar a lista de pacotes

O primeiro passo antes de atualizar ou instalar qualquer pacote é atualizar o índice dos repositórios:

```bash
sudo apt update
```

Esse comando **não atualiza os programas instalados**. Ele apenas atualiza as informações sobre quais versões estão disponíveis nos repositórios.

## Ver quais pacotes podem ser atualizados

Para verificar quais pacotes possuem novas versões disponíveis:

```bash
apt list --upgradable
```

É uma boa prática executar esse comando antes de uma atualização quando você quer saber exatamente o que será atualizado.

## Atualizar os pacotes instalados

Para instalar as atualizações disponíveis sem remover pacotes existentes:

```bash
sudo apt upgrade
```

Esse costuma ser o comando mais seguro para atualizações rotineiras do sistema.

## Fazer uma atualização completa

Quando uma atualização exige novas dependências ou alterações na instalação de outros pacotes, utilize:

```bash
sudo apt full-upgrade
```

O `full-upgrade` pode instalar novos pacotes ou remover pacotes quando isso for necessário para concluir a atualização corretamente. Ele é o equivalente moderno, na interface `apt`, ao antigo `apt-get dist-upgrade`.

### Atualização completa + limpeza

Para uma manutenção periódica, você pode fazer:

```bash
sudo apt update
sudo apt full-upgrade
sudo apt autoremove
```

O `autoremove` remove dependências que foram instaladas automaticamente e que não são mais necessárias.

## Instalar um pacote

Para instalar um programa:

```bash
sudo apt install nome-do-pacote
```

Por exemplo:

```bash
sudo apt install git
```

Você também pode instalar vários pacotes de uma vez:

```bash
sudo apt install git curl wget vim
```

## Procurar um pacote

Se você não sabe exatamente o nome do pacote:

```bash
apt search termo
```

Por exemplo:

```bash
apt search docker
```

O `apt search` é especialmente útil para encontrar pacotes diretamente pelo terminal.

## Ver informações de um pacote

Para consultar detalhes sobre determinado pacote:

```bash
apt show nome-do-pacote
```

Exemplo:

```bash
apt show git
```

Você poderá consultar informações como versão, descrição, dependências, tamanho e outras propriedades do pacote.

## Ver a versão instalada

Para verificar a versão de um pacote instalado:

```bash
apt policy nome-do-pacote
```

Exemplo:

```bash
apt policy git
```

Esse comando é particularmente útil para descobrir **qual versão está instalada e qual versão está disponível nos repositórios**.

## Corrigir dependências quebradas

Se o sistema apresentar problemas de dependências, tente:

```bash
sudo apt --fix-broken install
```

A opção `--fix-broken` tenta corrigir dependências quebradas e concluir instalações pendentes.

Depois, você pode verificar se ainda existem problemas:

```bash
sudo apt check
```

## Concluir configurações de pacotes pendentes

Se uma instalação foi interrompida ou existem pacotes que ficaram parcialmente configurados:

```bash
sudo dpkg --configure -a
```

Depois disso, caso necessário:

```bash
sudo apt --fix-broken install
```

Uma sequência comum para recuperar um sistema após uma instalação interrompida é:

```bash
sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt update
sudo apt full-upgrade
```

## Remover um pacote

Para remover um programa:

```bash
sudo apt remove nome-do-pacote
```

O `remove` desinstala o pacote, mas normalmente mantém seus arquivos de configuração.

## Remover um pacote e suas configurações

Se quiser remover também os arquivos de configuração:

```bash
sudo apt purge nome-do-pacote
```

Use `purge` com atenção, especialmente em servidores, pois arquivos de configuração podem conter ajustes importantes.

## Remover dependências que não são mais utilizadas

Para limpar pacotes que foram instalados automaticamente e não são mais necessários:

```bash
sudo apt autoremove
```

Se quiser também remover os arquivos de configuração desses pacotes:

```bash
sudo apt autoremove --purge
```

## Limpar o cache de pacotes

Para remover os arquivos `.deb` armazenados no cache do APT:

```bash
sudo apt clean
```

Isso pode liberar espaço em disco, especialmente em sistemas que recebem muitas atualizações.

## Limpar pacotes antigos do cache

Uma alternativa mais conservadora é:

```bash
sudo apt autoclean
```

Ela remove apenas arquivos de pacotes que não podem mais ser baixados dos repositórios.

## Verificar se o sistema precisa ser reiniciado

Depois de algumas atualizações, principalmente de kernel e componentes importantes do sistema, pode ser necessário reiniciar.

No Ubuntu, você pode verificar:

```bash
test -f /run/reboot-required && echo "Reinicialização necessária" || echo "Não é necessário reiniciar"
```

Se for necessário:

```bash
sudo reboot
```

## Verificar espaço em disco

Para descobrir quanto espaço está sendo utilizado:

```bash
df -h
```

Para descobrir quais diretórios estão ocupando mais espaço:

```bash
sudo du -sh /var/* 2>/dev/null
```

E para analisar o diretório atual:

```bash
du -sh ./* 2>/dev/null | sort -h
```

Esses comandos são bastante úteis quando o sistema começa a apresentar problemas por falta de espaço.

## Verificar processos em execução

Para uma visão rápida dos processos:

```bash
ps aux
```

Para acompanhar processos em tempo real:

```bash
top
```

Se você tiver o `htop` instalado:

```bash
htop
```

Para instalar:

```bash
sudo apt install htop
```

## Consultar serviços do sistema

Em distribuições modernas que utilizam `systemd`, você pode verificar o estado de um serviço com:

```bash
systemctl status nome-do-servico
```

Por exemplo:

```bash
systemctl status ssh
```

Para iniciar um serviço:

```bash
sudo systemctl start nome-do-servico
```

Para parar:

```bash
sudo systemctl stop nome-do-servico
```

Para reiniciar:

```bash
sudo systemctl restart nome-do-servico
```

E para habilitá-lo durante a inicialização:

```bash
sudo systemctl enable nome-do-servico
```

Você também pode combinar `enable` e `start`:

```bash
sudo systemctl enable --now nome-do-servico
```

## Consultar logs do sistema

O `journalctl` é uma das ferramentas mais importantes para investigar problemas em sistemas Linux que utilizam `systemd`.

Ver os logs mais recentes:

```bash
journalctl -xe
```

Ver os logs do boot atual:

```bash
journalctl -b
```

Acompanhar os logs em tempo real:

```bash
journalctl -f
```

Ver os logs de um serviço específico:

```bash
journalctl -u nome-do-servico
```

Por exemplo:

```bash
journalctl -u ssh
```

## Verificar a versão do sistema

Para descobrir informações sobre a distribuição:

```bash
cat /etc/os-release
```

Em Ubuntu, também é possível usar:

```bash
lsb_release -a
```

E para verificar a versão do kernel:

```bash
uname -r
```

Para obter informações mais completas:

```bash
uname -a
```

## Um fluxo simples de manutenção

Para uma manutenção periódica em uma máquina Debian ou Ubuntu, uma sequência prática é:

```bash
sudo apt update
sudo apt upgrade
sudo apt autoremove
sudo apt autoclean
```

Se você quiser fazer uma atualização mais completa:

```bash
sudo apt update
sudo apt full-upgrade
sudo apt autoremove
```

Depois, verifique se é necessário reiniciar:

```bash
test -f /run/reboot-required && echo "Reinicialização necessária" || echo "Sistema atualizado"
```

## Resumo dos principais comandos

| Objetivo                            | Comando                         |
| ----------------------------------- | ------------------------------- |
| Atualizar índices                   | `sudo apt update`               |
| Ver atualizações                    | `apt list --upgradable`         |
| Atualizar pacotes                   | `sudo apt upgrade`              |
| Atualização completa                | `sudo apt full-upgrade`         |
| Instalar pacote                     | `sudo apt install pacote`       |
| Procurar pacote                     | `apt search termo`              |
| Ver informações                     | `apt show pacote`               |
| Ver versão/disponibilidade          | `apt policy pacote`             |
| Corrigir dependências               | `sudo apt --fix-broken install` |
| Verificar pacotes                   | `sudo apt check`                |
| Corrigir instalação interrompida    | `sudo dpkg --configure -a`      |
| Remover pacote                      | `sudo apt remove pacote`        |
| Remover pacote + configurações      | `sudo apt purge pacote`         |
| Remover dependências desnecessárias | `sudo apt autoremove`           |
| Limpar cache                        | `sudo apt clean`                |
| Limpar cache antigo                 | `sudo apt autoclean`            |
| Reiniciar sistema                   | `sudo reboot`                   |

## Conclusão

Com esses comandos, você consegue realizar praticamente toda a manutenção básica de um sistema Linux baseado em Debian, desde atualizar pacotes e instalar ferramentas até corrigir dependências, analisar serviços, consultar logs e liberar espaço em disco.

Para quem trabalha com desenvolvimento, vale a pena dominar principalmente:

```bash
apt
dpkg
systemctl
journalctl
df
du
ps
top
```

E lembre-se: **`apt update` atualiza a lista de pacotes; `apt upgrade` atualiza os pacotes instalados; e `apt full-upgrade` permite alterações mais completas nas dependências do sistema.**