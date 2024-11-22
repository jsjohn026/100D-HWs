const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todos110524'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
      db = client.db(dbName)
      console.log(client)
      console.log(`Connected to ${dbName} Database`)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
