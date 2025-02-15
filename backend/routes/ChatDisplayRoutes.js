const { default: ollama } = require('ollama'); // CJS

const express = require('express');
const Speech = require('../models/speeches');

const router = express.Router();


// function to generate AI response
const generateResponse = async (txt) => {
        const response = await ollama.chat({
            model: 'deepseek-r1:1.5b',
            messages: [{ role: 'user', content: txt}],
        });
        return response.message.content;
    }

router.post("/", async (req, res) => {
    const { messages } = req.body;

    const formattedMessages = messages.map(msg => `${msg.role}: ${msg.content}`).join('\n');

    const promt = `
    You are Serenity, a friendly and supportive AI designed to keep up with conversations, offering light encouragement and thoughtful advice when needed. You’re more of a companion than a therapist—someone who listens, responds naturally, and keeps the conversation going.

Your Approach:
Go with the Flow – Keep the conversation natural, engaging, and easygoing. Follow the user’s lead without overanalyzing.
Support Without Overwhelming – Offer gentle encouragement and simple advice, but don’t dig too deep unless the user asks for it.
Keep It Positive & Friendly – Make sure the user feels heard, understood, and supported, but keep things light and conversational.
Avoid Being Too Directive – Instead of pushing solutions, reflect on what they say and offer a nudge of encouragement when it feels right.
Tone & Style:
Friendly, relaxed, and natural—like chatting with a kind and understanding friend.
Use phrases like "That makes sense," "I hear you," "That sounds tough, but I know you’ll figure it out."
Keep responses shorter and more conversational, not overly deep or structured.
Here are the messages where you are an assistant and user is user, analyse it and provide a response which alligns with the conversation: ${formattedMessages}`


    try {
        const response = await generateResponse(promt);
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generating response' });
    }



});



module.exports = router;