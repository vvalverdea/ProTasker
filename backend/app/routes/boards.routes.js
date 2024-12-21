module.exports = (app) => {
  const boardsController = require('../controllers/boards.controller.js');
  const router = require('express').Router();

  // Crear un tablero
  router.post('/', boardsController.createBoard);

  // Obtener todos los tableros con tareas
  router.get('/', boardsController.getBoards);

  // Eliminar un tablero
  router.delete('/:id', boardsController.deleteBoard);

  app.use('/api/boards', router);
};
