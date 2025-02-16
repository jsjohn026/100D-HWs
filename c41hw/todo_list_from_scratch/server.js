const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todos110524'

MongoClient.connect(dbConnectionStr, {})
    .then(client => {
      db = client.db(dbName)
      console.log(`Connected to ${dbName} Database`)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async(req, res) => {
  const todoItems = await db.collection('todos').find().toArray()
  const itemsLeft = await db.collection('todos').countDocuments({completed: false})
  res.render('index.ejs', { todos: todoItems, left: itemsLeft})
})

app.post('/addTodo', (req, res) => {
  db.collection('todos').insertOne({todo: req.body.todo, completed: false})
  .then(result => {
    console.log('Todo Added')
    res.redirect('/')
  })
  .catch(err => console.log("Unable to add todo:", err))
})

app.put('/markComplete', (req, res) => {
  db.collection('todos').updateOne({todo: req.body.todoFromJS},{
    $set: {
      completed: true
    }
  },{
    sort: {_id: -1},
    upsert: false
  })
  .then(result => {
    console.log('Marked Complete')
    res.json('Marked Complete')
  })
  .catch(err => console.log("Unable to mark this complete:", err))
})

app.put('/markUnComplete', (req, res) => {
  db.collection('todos').updateOne({todo: req.body.todofromJS},{
    $set: {
      completed: false
    }
  },{
    sort: {_id: -1},
    upsert: false
  })
  .then(result => {
    console.log('Marked Uncomplete')
    res.json('Marked Uncomplete')
  })
  .catch(err => console.log("Unable to mark this uncomplete:", err))
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
