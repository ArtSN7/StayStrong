const express = require('express');
const router = express.Router();
const Speech = require('../models/speeches');


// function to extract a random speech from the DB of users
router.get("/generate", async (req, res) => {
    
    try {
        const count = await Speech.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomSpeech = await Speech.findOne({ offset: randomIndex });
    
        if (randomSpeech) {
          res.status(200).json({content:randomSpeech.content, author:randomSpeech.author});
        } else {
          res.status(404).json({ message: 'No speeches found' });
        }
      } catch (error) {
        console.error('Error fetching random speech:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

module.exports = router;