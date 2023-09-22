# Використовуємо базовий образ Node.js (алпайн-версія)
FROM node:alpine

# Робоча директорія для файлів проекту в контейнері
WORKDIR /usr/src/app

# Копіюємо файли package.json та package-lock.json в контейнер
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --production

# Копіюємо вихідний код в контейнер
COPY . .

# Повідомляємо Docker про порт 8080, на якому прослуховується сервіс
EXPOSE 8080

# Команда для запуску сервісу
CMD [ "npm", "start" ]
