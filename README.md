# Fluxora

Fluxora é um projeto frontend desenvolvido com Next.js para simular um SaaS de controle de matérias-primas.

O sistema possui duas áreas principais:

- uma home pública para apresentação do produto;
- uma página de demonstração do sistema.

## Tecnologias

- Next.js
- JavaScript
- Tailwind CSS
- shadcn/ui
- Recharts

## Funcionalidades

### Home

- apresentação da Fluxora;
- benefícios e funcionalidades;
- prévia do dashboard;
- formulário fictício para captação de leads;
- navegação para a demonstração.

### Demonstração

- indicadores de estoque;
- tabela de matérias-primas;
- busca por nome ou código;
- filtros por categoria e situação;
- gráficos de estoque;
- cadastro de novos materiais;
- entrada e saída de estoque;
- atualização automática dos indicadores e gráficos.

## Rotas

```text
/        Home da Fluxora
/demo    Demonstração do SaaS
```

## Como executar

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

## Observação

O projeto é totalmente frontend e utiliza dados fictícios. Não possui backend, banco de dados ou integração com APIs.

## Objetivo

O projeto foi desenvolvido para demonstrar uma solução de controle de matérias-primas para indústrias, permitindo acompanhar estoques, identificar materiais em falta e visualizar indicadores de forma simples.