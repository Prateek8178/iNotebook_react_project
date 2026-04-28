const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const cors = require('cors');

const app = express(); // ✅ sirf ek baar
const port = 5000;

// Middleware
app.use(cors()); // ⚠️ ye add karo (important for frontend)
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});