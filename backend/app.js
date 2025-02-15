const express = require('express');
const cors = require('cors');
const sequelize = require('./models/index');

const sendMessageRoutes = require('./routes/sendMessageRoutes');
const RandomSpeechDisplayRoutes = require('./routes/RandomSpeechDisplayRoutes');
const ChatDisplayRoutes = require('./routes/ChatDisplayRoutes');


const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use(express.urlencoded({ extended: true })); // This should be before your routes
app.use('/send', sendMessageRoutes); // root for main page
app.use("/speech", RandomSpeechDisplayRoutes);
app.use("/chat", ChatDisplayRoutes)


sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    const PORT = 5001;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});


// to run AI agent: ollama run deepseek-r1:1.5b