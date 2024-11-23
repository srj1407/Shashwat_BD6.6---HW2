const express = require('express');
const app = express();
const cors = require('cors');
const { getAllGames, getGameById } = require('./controllers/index.js');

app.use(express.json());
app.use(cors());

app.get('/games', async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

app.get('/games/details/:id', async (req, res) => {
  let game = getGameById(parseInt(req.params.id));
  res.json({ game });
});

module.exports = {
  app,
};
