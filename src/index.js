const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const generateToken = require('./utils/token');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;
const PORT = process.env.PORT || '3001';

const loadTalkers = async () => {
  const data = await fs.readFile(path.resolve(__dirname, 'talker.json'), 'utf-8');
  return JSON.parse(data);
};

app.get('/talker', async (_request, response) => { 
  const talkers = await loadTalkers();
  response.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const idNumber = parseInt(id, 10);
  const talkers = await loadTalkers();
  const talkerFind = talkers
    .find((talker) => talker.id === idNumber);
  if (talkerFind) {
    response.status(HTTP_OK_STATUS).json(talkerFind);
  } else {
    response.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Pessoa palestrante não encontrada' });
  }
});
app.post('/login', (_req, res) => {
  const token = generateToken();
  res.status(HTTP_OK_STATUS).json({ token });
});
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
