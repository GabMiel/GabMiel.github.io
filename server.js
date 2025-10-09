const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Serves index.html

// In-memory storage
const topics = [];
const messages = {}; // { topicId: [ { username, message } ] }

// Simple admin password (change this!)
const ADMIN_PASSWORD = 'gabriel123';

// Create a topic (admin only)
app.post('/topics', (req, res) => {
  const { title, description, password } = req.body;
  if (password !== ADMIN_PASSWORD) return res.status(403).send('Unauthorized');

  const id = topics.length + 1;
  topics.push({ id, title, description });
  messages[id] = [];
  res.status(201).send({ id, title });
});

// List all topics
app.get('/topics', (req, res) => {
  res.send(topics);
});

// Post a message to a topic
app.post('/topics/:id/messages', (req, res) => {
  const topicId = parseInt(req.params.id);
  const { username, message } = req.body;

  if (!messages[topicId]) return res.status(404).send('Topic not found');
  messages[topicId].push({ username, message });
  res.status(201).send('Message posted');
});

// Get messages for a topic
app.get('/topics/:id/messages', (req, res) => {
  const topicId = parseInt(req.params.id);
  if (!messages[topicId]) return res.status(404).send('Topic not found');
  res.send(messages[topicId]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});