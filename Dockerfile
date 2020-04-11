FROM node:carbon

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

RUN react-scripts build
RUN npm -g install serve

CMD ["serve", "-s", "build", "-p", "7373"]
EXPOSE 7373

