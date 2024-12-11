# Landing Page Windsor Idiomas

Este é um projeto de uma aplicação web para a escola de idiomas Windsor, desenvolvida utilizando a tecnologia Next.js.

## Tecnologias Utilizadas
- Next.js: Framework para desenvolvimento de aplicações web
- React: Biblioteca para construção de interfaces de usuário
- TypeScript: Linguagem de programação para desenvolvimento de aplicações web
- CSS: Linguagem de estilo para definição de layouts e estilos
- HTML: Linguagem de marcação para definição de estrutura de conteúdo

## Como Rodar o Projeto


**Ambiente de Desenvolvimento (Dev)**
Para rodar o projeto em um ambiente de desenvolvimento, siga os seguintes passos:

Instale as dependências do projeto executando o comando `npm install` ou `yarn install` no terminal.
Execute o comando `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
Abra o navegador e acesse o endereço `http://localhost:3000` para visualizar a aplicação.

**Ambiente de Produção (Prod)**

Para rodar o projeto em um ambiente de produção, siga os seguintes passos:

Instale as dependências do projeto executando o comando `npm install` ou `yarn install` no terminal.
Execute o comando `npm run build` ou `yarn build` para gerar a build da aplicação.
Execute o comando npm run start ou yarn start para iniciar o servidor de produção.
Abra o navegador e acesse o endereço `http://localhost:3000` para visualizar a aplicação.

**Variáveis de Ambiente**

Para configurar as variáveis de ambiente, crie um arquivo .env no diretório raiz do projeto e defina as variáveis conforme necessário.

```bash
# Exemplo de arquivo .env
SYSTEM_EMAIL_HOST=<hostname do serviço de e-mail>
SYSTEM_EMAIL_PORT=<porta do serviço de e-mail>
SYSTEM_EMAIL=<e-mail de autenticação>
SYSTEM_EMAIL_PASSWORD=<senha do e-mail>
COMPANY_EMAIL_1=<seu e-mail>
COMPANY_NAME=<nome da empresa>
```

**Recursos Utilizados**

`next/font`: Utilizado para otimizar e carregar a fonte Geist.
`create-next-app`: Utilizado para criar o projeto Next.js.

## Licença

Este projeto é licenciado sob a licença MIT.