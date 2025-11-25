const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD demo!.. 🎉');
});
app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
