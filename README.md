# atv1-fed-it

Projeto: Atividade 1 - Desenvolvimento Front-End com React

Este repositório contém uma pequena aplicação React criada como atividade do curso "Desenvolvimento Front-End com React" da iTalents. O objetivo é demonstrar componentes simples, passagem de props e uso de state.

## Estrutura do projeto

src/
- App.js            # Componente raiz da aplicação
- index.js          # Ponto de entrada (renderização do React)
- components/
	- Header/         # Componente de cabeçalho
	- Card/           # Componente de cartão (usa children)
	- Footer/         # Componente de rodapé

## Pré-requisitos

- Node.js (recomenda-se v14 ou superior)
- npm ou yarn

## Como executar

1. Instale as dependências (no diretório raiz do projeto):

```bash
npm install
# ou
yarn install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

3. Abra http://localhost:3000 no navegador (padrão do Create React App).

## O que está demonstrado

- Uso de componentes funcionais (Header, Card, Footer)
- Passagem de props (por exemplo, `titulo`, `nome`, `idade`)
- Uso de `children` para composição (em `Card`)
- Uso de `useState` para gerenciar estado local (contador no `App`)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
