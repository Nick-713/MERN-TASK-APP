const express = require('express');
const router = express.Router();

const db = require('../services/connection');

db.connectToDB(() => {
  // Rota de visualização de tarefas 
  router.get('/list',  async (req, res) => {
    const response = await db.findDocuments()
    res.send(response);
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

});


module.exports = router;