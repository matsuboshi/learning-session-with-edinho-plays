// START SERVER WITH 'npx nodemon index.js'
const express = require('express')
const app = express()

console.log('Hello World from your favorite dev, Edinho!')

app.get('/', (req, res) => {
  res.end(`<h1>Hello World without a name! (by edinhoPlays)</h1>`)
})

app.get('/:name', (req, res) => {
  const name = req.params.name
    .toLowerCase()
    .replace(/^./g, (e) => e.toUpperCase())
  res.end(`<h1>Hello World, ${name}! (by edinhoPlays)</h1>`)
})

const PORT = 8002

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`)
})
