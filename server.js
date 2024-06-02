// Импортируйте необходимые модули
const express = require('express');
const cors = require('cors');

// Создайте экземпляр приложения Express
const app = express();

// Настройка CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Разрешенные источники
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
  }),
);

// Ваши маршруты
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Запуск сервера
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
