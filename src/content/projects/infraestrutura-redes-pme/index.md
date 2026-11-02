---
title: "Padronização de Redes & Infraestrutura para PMEs"
summary: "Estudo de caso da VD Tech & Suporte: reestruturação de rede local, segmentação de tráfego, rotinas de backup e serviços em containers para pequenas empresas."
date: "Oct 15 2025"
draft: false
tags:
- Infraestrutura
- Redes
- Linux
- Docker
---

Na **VD Tech & Suporte**, grande parte dos chamados em pequenas e médias empresas nasce da mesma raiz: infraestrutura que cresceu no improviso — cabos sem identificação, roteadores domésticos sobrecarregados, compartilhamento de arquivos sem controle de permissão e ausência total de backup testado.

### Abordagem Técnica

Este projeto consolida a metodologia prática que aplico em campo para transformar ambientes instáveis em operações previsíveis:

1. **Diagnóstico e Mapeamento Físico/Lógico:** Identificação de gargalos de switch/roteamento, interferência de canais Wi-Fi, revisão de cabeamento estruturado e organização de endereçamento IP fixo para equipamentos críticos (impressoras de rede, servidores locais e terminais de caixa).
2. **Segmentação e Segurança Básica:** Separação entre a rede administrativa/financeira e a rede de visitantes, revisão de DNS (com filtros de segurança e baixa latência via Cloudflare) e controle de acesso a pastas compartilhadas.
3. **Serviços Locais & Conteinerização:** Uso de servidores **Linux** enxutos rodando serviços essenciais isolados em **Docker**, reduzindo conflito de dependências e facilitando a manutenção remota segura via **SSH**.
4. **Rotina de Backup 3-2-1:** Estruturação de cópias automatizadas e verificadas para garantir que falhas de hardware não paralisem o faturamento da empresa.

