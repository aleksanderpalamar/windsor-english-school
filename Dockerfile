# Usar uma imagem oficial do Node.js como base
FROM node:18-alpine

# Criar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install --production

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que o servidor usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]