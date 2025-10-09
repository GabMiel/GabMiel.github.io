// Highlight active link
document.getElementById(window.location.pathname === '/admin' ? 'adminLink' : 'homeLink')
  .classList.add('active');

let currentTopicId = null;

async function createTopic() {
  const title = document.getElementById('topicTitle').value;
  const description = document.getElementById('topicDesc').value;
  const password = document.getElementById('adminPass').value;

  const res = await fetch('/topics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, password })
  });

  if (res.ok) {
    alert('Topic created!');
    document.getElementById('topicTitle').value = '';
    document.getElementById('topicDesc').value = '';
    document.getElementById('adminPass').value = '';
    loadTopics();
  } else {
    alert('Failed to create topic. Check password.');
  }
}

async function loadTopics() {
  const res = await fetch('/topics');
  const topics = await res.json();
  const list = document.getElementById('topicList');
  list.innerHTML = '';

  topics.forEach(topic => {
    const li = document.createElement('li');
    li.textContent = `${topic.title} — ${topic.description}`;
    li.style.cursor = 'pointer';
    li.onclick = () => openChat(topic.id, topic.title);
    list.appendChild(li);
  });
}

async function openChat(id, title) {
  currentTopicId = id;
  document.getElementById('chatTopicTitle').textContent = title;
  document.getElementById('chatSection').style.display = 'block';
  loadMessages();
}

async function loadMessages() {
  const res = await fetch(`/topics/${currentTopicId}/messages`);
  const msgs = await res.json();
  const list = document.getElementById('messageList');
  list.innerHTML = '';

  msgs.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = `${msg.username}: ${msg.message}`;
    list.appendChild(li);
  });
}

loadTopics();