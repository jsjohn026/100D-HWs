const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors());
app.use(express.static(__dirname)); //tells express to look in the main directory where server.js is located to look for any requested static files. 

// Create some data
const plants = {
  chard: {
    'name':'Swiss Chard',
    'cultivar':'Celebration',
    'maturity':20,
  },
  kale: {
    'name':'Kale',
    'cultivar':'Lacinato/Dinosaur',
    'maturity':21,
  },
  unknown: {
    'name':'You should plant something.',
    'cultivar':'Something yummy.',
    'maturity':30,
  }
}


// Set up the server and send file as a response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') /* look in the same location as this server.js and find this file */
})

// Create API that will send JSON objects
app.get('/api/:plantName', (req, res) => { // colon lets express know that the query parameter is going to be on the url
  const plantsName = req.params.plantName.toLowerCase();

  if(plants[plantsName]) {
    res.json(plants[plantsName])
  } else {
    res.json(plants['unknown'])