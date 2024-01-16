const express = require('express')

const app = express()
const cors = require('cors')
const config = { port: process.env.PORT || 3000 }

// middleware
app.use(cors())

// your API route(s) here
import { LoremIpsum } from "lorem-ipsum";

// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

lorem.generateParagraphs(7);

app.get('/lorem', (req, res) => {
  res.json({lorem: lorem.generate})
})

app.get('*', function (req, res) {
  res.status(404).json({ error: 'route not found' })
})

// start server
app.listen(config.port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
