const express = require('express');
const app = express();
const path = require('path');

const configKey = require('./config/key');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Connect mongoose to DB
const mongoose = require('mongoose');
const connect = mongoose
  .connect(configKey.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// HTML routes
app.use('/api/user', require('./routes/user'));
app.use('/api/favorite', require('./routes/favorite'));
app.use('/api/like', require('./routes/like'));
app.use('/api/comment', require('./routes/comment'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// APP listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server now listening on PORT: ' + PORT));
