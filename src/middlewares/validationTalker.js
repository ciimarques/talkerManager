function validateName(name, res) {
  if (!name) {
    res.status(400).json({ message: 'O campo "name" é obrigatório' });
    return false;
  }
  if (name.length < 3) {
    res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    return false;
  }
  return true;
}

function validateAge(age, res) {
  if (age === undefined) {
    res.status(400).json({ message: 'O campo "age" é obrigatório' });
    return false;
  }
  if (!Number.isInteger(age) || age < 18) {
    res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
    return false;
  }
  return true;
}
function validateTalkWatchedAt(talk, res) {
  if (talk.watchedAt === undefined) {
    res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    return false;
  }
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(talk.watchedAt)) {
    res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
    return false;
  }
  return true;
}

function validateTalkRate(talk, res) {
  if (talk.rate === undefined) {
    res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    return false;
  }
  if (!Number.isInteger(talk.rate) || talk.rate < 1 || talk.rate > 5) {
    res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
    return false;
  }
  return true;
}

function validateTalk(talk, res) {
  if (!talk) {
    res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    return false;
  }
  if (!validateTalkWatchedAt(talk, res)) return false;
  if (!validateTalkRate(talk, res)) return false;
 
  return true;
}

function validateTalker(req, res, next) {
  const { name, age, talk } = req.body;

  if (!validateName(name, res)) return;
  if (!validateAge(age, res)) return;
  if (!validateTalk(talk, res)) return;

  next();
}

module.exports = validateTalker;