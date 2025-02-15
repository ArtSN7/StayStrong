// Routes for sending messages

const { default: ollama } = require('ollama'); // CJS

const express = require('express');
const Speech = require('../models/speeches');

const router = express.Router();

// request is made in CheckingMessage.jsx
// I get the message and the author from the request body
// Then I check it using AI
// If it is valid, I send a response back to the client
// If it is not valid, I send an error message back to the client
router.post('/form', async (req, res) => {
  const { message, author } = req.body;

  try {
    const AIdes = await IsDataValid(message);

    console.log(AIdes);

    if (AIdes) {
      const newSpeech = await Speech.create({ content: message, author });
      return res.status(200).json({ value: true });
    }else{
      return res.status(200).json({ value: false });
    }

  } catch (error) {
    console.error("Error validating message:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

async function IsDataValid(data){

    const promt = `You are an AI content moderation system for a well-being website. Your task is to analyze user-submitted messages and determine if they contain offensive content.

Guidelines:
Offensive message is considered to be anything related to death, hate, racism, LGBTQ+, sexual harrasment or can hurt feelings of anybody
Messages that are kind, supportive, neutral, or positive (e.g., 'I love you', 'Have a great day') are not offensive.
Response format:
Return only '1' if the message is offensive and should be blocked.
Return only '0' if the message is safe and can be posted.
Do not provide explanations or any other text—strictly return '0' or '1'
    Here is the message: ${data}`

    try {
        const response = await ollama.chat({
          model: 'deepseek-r1:1.5b',
          messages: [{ role: 'user', content: promt}],
        });

        const lastLetter = response.message.content.slice(-1);
        
        if (lastLetter === '0'){
          return true;
        }else{
          return false;
        }

    } catch (error) {
        console.error('Error:', error);
    }

}





module.exports = router;