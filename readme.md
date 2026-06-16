# Projeto Integrador de Redes — Minha Página na Rede

> **Grupo 5 — VideCoders**

Aplicação web (portfólio da equipe) desenvolvida em HTML, CSS e JavaScript e
hospedada em uma **infraestrutura de rede simulada no Cisco Packet Tracer**, com
serviços de **HTTP** e **DNS** configurados em um servidor local.

---

## Integrantes

| Integrante | Atribuição |
|---|---|
| **Eric Ferraz** | Infraestrutura de rede, topologia e roteamento (Cisco Packet Tracer) |
| **Gabriel Antunes** | Desenvolvimento Front-End (HTML, CSS, JavaScript) |
| **Lucas Sabino** | Desenvolvimento Front-End (HTML, CSS, JavaScript) |
| **Francisco Maganhotto** | Elaboração e redação do artigo técnico |
| **Wayron de Souza** | Elaboração e redação do artigo técnico |

- **Matéria:** Redes de Computadores
- **Professor orientador:** Elton Dal Bem Galvão
- **Local / Data:** Curitiba, 16 de junho de 2026

---

## Objetivo

Desenvolver uma página web e disponibilizá-la a computadores clientes por meio de
uma rede configurada no Cisco Packet Tracer, demonstrando na prática a arquitetura
**cliente-servidor** e a integração entre **desenvolvimento web** e **redes de
computadores** (endereçamento IP, roteamento, HTTP e DNS).

---

##  Tecnologias utilizadas

- **HTML5** — marcação semântica (`<header>`, `<nav>`, `<main>`, `<section>`)
- **CSS3** — layout com Flexbox, responsividade e **Modo Escuro (Dark Mode)**
- **JavaScript (Vanilla)** — manipulação do DOM e interatividade
- **Node.js** — servidor HTTP simples para testes locais (`main.js`)
- **Cisco Packet Tracer** — simulação da topologia, serviços HTTP e DNS

---

## Estrutura do projeto

```
pagina/
├── README.md
├── frontend/                 # Aplicação web
│   ├── index.html
│   ├── estilo.css
│   ├── script.js
│   ├── main.js               # Servidor de teste local (Node.js)
│   └── imagens/
│       ├── logo.png
│       └── banner.jpg
├── packet-tracer/
│   ├── projeto.pkt           # Arquivo da simulação
│   └── screenshots/
│       ├── topologia.png
│       ├── ping-servidor.png
│       └── acesso-web.png
├── relatorio/
│   ├── relatorio.pdf
│   └── relatorio.docx
├── documentacao/
│   ├── tabela-ip.pdf         # Tabela de endereçamento IP
│   ├── comandos-roteador.txt # Comandos de configuração do roteador
│   └── testes-realizados.txt
└── video/
    └── link-video.txt
```

---

## Aplicação Web

A página funciona como um portfólio do projeto, apresentando a equipe, as
tecnologias utilizadas e uma área de testes em JavaScript.

**Funcionalidades JavaScript:**
- **Saudação ("Me mande um Oi")** — exibe um alerta confirmando a comunicação com a página hospedada no servidor.
- **Modo Escuro ("Ativar Modo Escuro")** — alterna dinamicamente o tema da página (claro ↔ escuro) e o estilo do próprio botão.

### Como executar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
cd frontend
node main.js
```

Depois acesse no navegador: **http://localhost:3000**

---

## Rede (Cisco Packet Tracer)

### Topologia

| Dispositivo | Modelo | Função |
|---|---|---|
| PC0 / PC1 | PC-PT | Computadores clientes |
| Switch0 | 2960-24TT | Conecta os clientes à rede local |
| Router0 | ISR4331 | Interliga a rede dos clientes à rede do servidor |
| Maquina 01 | Server-PT | Servidor Web (HTTP) e DNS |

### Endereçamento IP

| Dispositivo | Interface | Endereço IP | Máscara | Gateway | DNS |
|---|---|---|---|---|---|
| PC0 | FastEthernet0 | 192.168.1.10 | 255.255.255.0 | 192.168.1.1 | 10.0.0.10 |
| PC1 | FastEthernet0 | 192.168.1.11 | 255.255.255.0 | 192.168.1.1 | 10.0.0.10 |
| Router0 | Gig0/0/0 | 192.168.1.1 | 255.255.255.0 | — | — |
| Router0 | Gig0/0/1 | 10.0.0.1 | 255.255.255.0 | — | — |
| Maquina 01 | FastEthernet0 | 10.0.0.10 | 255.255.255.0 | 10.0.0.1 | 10.0.0.10 |

- **Rede dos clientes:** `192.168.1.0/24`
- **Rede do servidor:** `10.0.0.0/24`

> Tabela detalhada em [documentacao/tabela-ip.pdf](documentacao/tabela-ip.pdf).

### Serviços do servidor

- **HTTP** — hospeda os arquivos da aplicação (`index.html` como página inicial).
- **DNS** — registro `www.meuprojeto.com` → `10.0.0.10`, permitindo o acesso pelo nome de domínio.

---

## Testes realizados

| Teste | Descrição | Evidência |
|---|---|---|
| Conectividade | `ping 10.0.0.10` dos clientes ao servidor → 0% de perda | [ping-servidor.png](packet-tracer/screenshots/ping-servidor.png) |
| Acesso Web | Acesso a `http://www.meuprojeto.com` pelo navegador do cliente | [acesso-web.png](packet-tracer/screenshots/acesso-web.png) |
| Topologia | Montagem completa da rede | [topologia.png](packet-tracer/screenshots/topologia.png) |

Detalhes em [documentacao/testes-realizados.txt](documentacao/testes-realizados.txt).

---

## Entregáveis

- 📘 **Relatório:** [relatorio/relatorio.pdf](relatorio/relatorio.pdf)
- 🗺️ **Tabela de IPs:** [documentacao/tabela-ip.pdf](documentacao/tabela-ip.pdf)
- 🧩 **Simulação:** [packet-tracer/projeto.pkt](packet-tracer/projeto.pkt)
- 🎬 **Vídeo de apresentação:** ver [video/link-video.txt](video/link-video.txt)
