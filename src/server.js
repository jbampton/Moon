const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
//imports

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', function (req, res) {
  res.send('Hello Home!');
});



  app.get('/posts/id', function (req, res) {
    res.send('Hello Home - > Posts [id] ');
  });
mongoose.connect('mongodb+srv://user:gEoAYgDvnI4mS23r@spcluster-1skkx.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology: true}, () => console.log('connect to db'));
app.listen(8089, function () {
  console.log('Example app listening on port 8089!');
});