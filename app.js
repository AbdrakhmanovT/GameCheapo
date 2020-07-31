const express = require('express');
const path = require('path');

const browseRouter = require('./routes/browseRouter');
const gameRouter = require('./routes/gameRouter');
const searchRouter = require('./routes/searchRouter');
const freeRouter = require('./routes/freeRouter');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/browse', browseRouter);
app.use('/game', gameRouter);
app.use('/search', searchRouter);
app.use('/free', freeRouter);

app.get('/', async (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server started');
});
