// Routes for sending messages

const { default: ollama } = require('ollama'); // CJS

const express = require('express');

const router = express.Router();

// request is made in CheckingMessage.jsx
// I get the message and the author from the request body
// Then I check it using AI
// If it is valid, I send a response back to the client
// If it is not valid, I send an error message back to the client
router.post('/form', (req, res) => {
  const { message, author } = req.body;

  if (!IsDataValid(message)) {
    return res.status(400).json({ message: "Message is not valid" });
  }

  return res.status(200).json({ message: "Message received successfully" });
});

async function IsDataValid(data){

    const promt = `You are an AI content moderation system for a well-being website. Your task is to analyze user-submitted messages and determine if they contain offensive content.

Guidelines:
Offensive content includes hate speech, threats, harassment, explicit language, or personal attacks.
Messages that are kind, supportive, neutral, or positive (e.g., 'I love you', 'Have a great day') are not offensive.
Response format:
Return only '1' if the message is offensive and should be blocked.
Return only '0' if the message is safe and can be posted.
Do not provide explanations or any other text—strictly return '1' or '0'
    Here is the message: ${data}`

    try {
        const response = await ollama.chat({
          model: 'deepseek-r1:1.5b',
          messages: [{ role: 'user', content: promt}],
        });

        const lastLetter = response.message.content.slice(-1);
        console.log(lastLetter);

    } catch (error) {
        console.error('Error:', error);
    }

  // check if the data is valid
  return true;
}





module.exports = router;