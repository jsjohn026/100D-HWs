const express = require('express')
const app = express()
const PORT = 8000

// set up the server and response to send file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') /* look in the same location as this server.js and find this file */
})

// tell server to listen for requests and confirm in console
app.listen(PORT, ()=> {
  console.log(`The server is running on ${PORT}! You better go catch it!`)
})