// Routes for sending messages
const express = require('express');

const router = express.Router();

// request is made in CheckingMessage.jsx
// I get the message and the author from the request body
// Then I check it using AI
// If it is valid, I send a response back to the client
// If it is not valid, I send an error message back to the client
router.post('/form', (req, res) => {
  const { message, author } = req.body;

  if (!IsDataValid(message)){
    return res.status(400).json({ message: "Message is not valid" });
  }

  return res.status(200).json({ message: "Message received successfully" });
});

function IsDataValid(data){
  // check if the data is valid
  return true;
}





module.exports = router;