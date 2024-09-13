FROM node:20
WORKDIR /
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
RUN npm cache clean --force
RUN npm install
RUN npm run build
CMD ["npx", "serve", "dist", "-p", "3000"]
