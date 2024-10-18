const express = require('express')
const app = express()
const PORT = 3000
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://yoda:JVoqKySaLrpAvUXD@cluster0.qrycb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    
    app.set('view engine', 'ejs')
    
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(express.json())

    app.get('/', (request, response) => {
      quotesCollection
        .find()
        .toArray()
        .then(results => {
          console.log(results)
          response.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))
    })
    
    app.post('/quotes', (request, response) => {
      quotesCollection
        .insertOne(request.body)
        .then(result => {
          console.log(result)
          response.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (request, response) => {
      quotesCollection
        .findOneAndUpdate(
          { name: 'Yoda' }, 
          { 
            $set: {
              name: request.body.name,
              quote: request.body.quote,
            }, 
          },
          {
            upsert: true,
          }
        )
        .then(result => {
            response.json('Success')
          })
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (request, response) => {
      quotesCollection
        .deleteOne({ name: request.body.name })
        .then(result => {
          if (result.deletedCount === 0) {
            return response.json('No quote to delete')
          }
          response.json('Deleted Darth Vader\'s quote')
        })
        .catch(error => console.error(error))
    })

    app.listen(PORT, function() {
      console.log(`listening on port ${PORT}! Betta Go Catch It!`)
    })
    
  })
  .catch(console.error)

