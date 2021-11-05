const express = require('express');
const db = require('../services/connection');

const router = express.Router();

// Rota de visualização de tarefas 
router.get('/list', (req, res) => {
  res.send('Chegou na rota de lista de tarefas...');
});

// Rota para adicionar tarefas 
router.post('/add', (req, res) => {
  res.send('Chegou na rota de adicionar tarefas...');
});

// Rota de Atualização de tarefas

router.patch('/update', (req, res) => {
  res.send('Chegou na rota de atualizar tarefas...');
});

// Rota de deleta tarefas 
router.delete('/delete', (req, res) => {
  res.send('Chegou na rota de remover tarefa...');
});

module.exports = router;