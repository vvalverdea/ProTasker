module.exports = (app) => {
  const tasks = require('../controllers/tasks.controller.js');

  const router = require('express').Router();

  // Create a new Tutorial
  router.post('/', tasks.create);
  /*
  // Retrieve all tasks
  router.get('/', tasks.findAll());

  // Retrieve all published tasks
  router.get('/published', tasks.findAllPublished());

  // Retrieve a single Tutorial with id
  router.get('/:id', tasks.findOne());

  // Update a Tutorial with id
  router.put('/:id', tasks.update());

  // Delete a Tutorial with id
  router.delete('/:id', tasks.delete());

  // Create a new Tutorial
  router.delete('/', tasks.deleteAll());*/

  app.use('/api/tasks', router);
};
