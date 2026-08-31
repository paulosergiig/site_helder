# Site Helder

Landing page institucional da Painel Elétrico, atualmente em desenvolvimento. A implementação segue o layout fornecido pela designer e reúne uma página inicial e uma página de categorias.

## Status

🚧 **Em desenvolvimento**

A publicação no Cloudflare Pages será usada, nesta etapa, como ambiente público de homologação visual e acompanhamento do desenvolvimento. A URL `*.pages.dev` não representa necessariamente a publicação definitiva do site.

## Design

O layout foi elaborado no Figma:

[Referência de design no Figma](https://www.figma.com/design/o9pEmIPVzgABYscTLWHGDw/Sem-t%C3%ADtulo?node-id=0-1&p=f)

## Tecnologias utilizadas

- HTML5 semântico
- CSS
- JavaScript (ES Modules)
- Vite 8
- Lucide Icons

## Estrutura do projeto

```text
.
├── categorias/
│   └── index.html
├── public/
│   └── favicon.svg
├── qa/
│   └── *.png
├── src/
│   ├── data/
│   │   └── site.js
│   ├── categories.js
│   ├── main.js
│   ├── style.css
│   └── ui.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

Os textos, categorias, produtos de demonstração, diferenciais, marcas e etapas de atendimento estão centralizados em `src/data/site.js`. A pasta `qa/` contém capturas usadas na conferência visual durante o desenvolvimento.

## Executando localmente

### Requisitos

- Node.js `^20.19.0` ou `>=22.12.0`
- npm

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173/`. A página de categorias fica em `http://localhost:5173/categorias/`.

## Build

Gere a versão de produção com:

```bash
npm run build
```

O Vite gera os arquivos estáticos na pasta `dist/`. Para conferir essa versão localmente:

```bash
npm run preview
```

## Repositório

[github.com/paulosergiig/site_helder](https://github.com/paulosergiig/site_helder)

## Deploy

O deploy utiliza a integração oficial entre GitHub e Cloudflare Pages:

```text
GitHub → Cloudflare Pages
```

Depois que o projeto for conectado no painel do Cloudflare, novos commits enviados à branch `main` poderão iniciar automaticamente um novo build e uma nova publicação. Outras branches poderão usar Preview Deployments para validação antes da produção.

## Configuração do Cloudflare Pages

Use estes valores ao importar o repositório no painel:

| Campo | Valor |
| --- | --- |
| Project name | `site-helder` |
| Production branch | `main` |
| Framework preset | `Vite` |
| Root directory | deixar em branco (o projeto está na raiz do repositório) |
| Build command | `npm run build` |
| Build output directory | `dist` |

Não são necessárias variáveis de ambiente para o build atual. O projeto requer uma versão do Node.js compatível com o Vite 8 (`^20.19.0` ou `>=22.12.0`); o ambiente de build v3 padrão do Cloudflare Pages atende a esse requisito.

## Fluxo de desenvolvimento

```text
Alteração local
→ teste local
→ commit
→ push para GitHub
→ deploy automático no Cloudflare Pages
→ validação na URL pública
```

## Ambiente de desenvolvimento

Enquanto o site estiver em desenvolvimento, a URL `*.pages.dev` será usada principalmente pela equipe e pela designer para revisão e validação. Domínio personalizado e publicação definitiva não fazem parte desta etapa.

## Assets finais pendentes

Antes da publicação definitiva, a designer ainda deverá fornecer, quando aplicável:

- logo oficial Painel Elétrico/MGX em SVG;
- logos oficiais das marcas Delta, Metaltex e Tron em SVG;
- imagens finais dos produtos em WebP ou AVIF;
- favicon oficial;
- arquivo da fonte tipográfica original, caso a licença permita hospedagem local;
- imagem social/Open Graph oficial, se prevista pela identidade da marca.
