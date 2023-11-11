const express = require("express");
const connectDB = require("./utils/db");
const User = require("./models/user");

const app = express();

app.use(express.json());

// З'єднання з базою даних
connectDB()
  .then(() => {
    // Запуск сервера лише після успішного з'єднання з БД
    app.listen(3001, () => {
      console.log(`Server is running`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/test", (req, res) => {
  res.send("Its test message");
});

app.post("/users", async (req, res) => {
  console.log(req);
  try {
    const { userName } = req.body;
    const newUser = new User({ userName });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Отримання списку користувачів
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
