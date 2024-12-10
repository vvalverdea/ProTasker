module.exports = (app) => {
  const tasks = require('../controllers/tasks.controller.js');

  const router = require('express').Router();

  // Create a new Task
  router.post('/', tasks.create);

  // Retrieve all tasks
  router.get('/', tasks.findAll);

  // Update a Task with id
  router.put('/:id', tasks.update);

  // Delete a Task with id
  router.delete('/:id', tasks.delete);

  // Delete all tasks
  router.delete('/', tasks.deleteAll);

  app.use('/api/tasks', router);
};
