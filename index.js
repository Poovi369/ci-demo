// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from CI/CD demo!.. 🎉');
// });
// // app.get('/health', (req, res) => res.json({ ok: true }));

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express = require("express");
const app = express();

// IMPORTANT for Render — dynamic PORT
const PORT = process.env.PORT || 3000;

app.use(express.json());

// TEMP in-memory "database"
let tasks = [
  { id: 1, title: "Learn CI/CD", completed: false },
  { id: 2, title: "Deploy to Render", completed: false }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Poovitha's Task Manager API 🚀");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const exists = tasks.some(t => t.id === taskId);
  if (!exists) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks = tasks.filter(t => t.id !== taskId);

  res.json({ message: "Task deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
