# Agência Pixel — SASS

## Requisitos
- Node.js compatível com a versão do Sass declarada no `package.json` (Node.js 20.19 ou superior).
- npm.

## Instalação e compilação
No terminal, dentro desta pasta, execute:

```bash
npm install
npm run sass
```

O comando compila `estilos.scss` para `css/style.css`, arquivo utilizado pelo `index.html`.

Para recompilar automaticamente durante o desenvolvimento:

```bash
npm run sass:watch
```

Os cinco partials (`_variaveis.scss`, `_mixins.scss`, `_base.scss`, `_layout.scss` e `_componentes.scss`) e o ponto de entrada `estilos.scss` ficam dentro de `scss/`. O CSS compilado fica em `css/style.css`, referenciado pelo `index.html`.
