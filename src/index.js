const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

app.get('/talker', async (_request, response) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, 'talker.json'), 'utf-8');
    const palestrantes = JSON.parse(data);
    response.status(HTTP_OK_STATUS).json(palestrantes);
  } catch (error) {
    response.status(HTTP_OK_STATUS).json([]);
  }
});
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
