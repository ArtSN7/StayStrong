const express = require('express');
const cors = require('cors');

const sendMessageRoutes = require('./routes/sendMessageRoutes');


const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use(express.urlencoded({ extended: true })); // This should be before your routes
app.use('/send', sendMessageRoutes); // root for main page


const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
