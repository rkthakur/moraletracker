const express = require('express')
const bodyParser= require('body-parser')
const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

var db
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://prem:prem@ds033966.mlab.com:33966/shining-india-db', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  });
  
})
app.get('/quotes', (req, res) => {
	console.log(req.body);
	console.log(req.query);
  db.collection('quotes').save(req.query, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  });
  
})


