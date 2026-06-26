const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskdb';

mongoose.connect(mongoURI)
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.error('❌ MongoDB Error:', err.message));

app.get('/', (req, res) => {
    res.json({ message: 'Task Manager API', status: 'running' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
