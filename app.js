const express = require('express');
const mongoose = require('mongoose');
const authRouters = require('./routes/authRoutes');

const app = express();


// middleware
app.use(express.static('public'));
// json request past into javascript, accessed in request handlers
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://Salaah2:Norseqw~5@cluster0.540gce1.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes

// Looks at the home view
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRouters);