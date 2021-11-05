const express = require('express');
const router = express.Router();

const db = require('../services/connection');
const { ObjectId } = require('mongodb');

db.connectToDB(() => {
  if(err) console.error(err);

  const validBody = (req, res, next) => {
    if('_id' in req.body) {
      req.body._id = ObjectId(req.body._id);
    }
    next();
  };

  // Rota de visualização de tarefas 
  router.get('/list',  async (req, res) => {
    const response = await db.findDocuments()
    res.send(response);
  });
  
  // Rota para adicionar tarefas 
  router.post('/add', async (req, res) => {
    const response = await db.insertDocuments(req.body)
    res.send(response);
  });
  
  // Rota de Atualização de tarefas
  router.patch('/update', validBody, async (req, res) => {
    const response = await db.updateDocuments(req.body)
    res.send(response);
  });
  
  // Rota de deleta tarefas 
  router.delete('/delete',validBody, async (req, res) => {
    const response = await db.removeDocuments(req.body)
    res.send(response);
  });

});


module.exports = router;