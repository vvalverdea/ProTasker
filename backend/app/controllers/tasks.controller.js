const db = require('../models');

const Task = db.tasks;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const newTask = new Task({
    title: req.body.title,
    status: req.body.status,
  });

  newTask
    .save(newTask)
    .then((data) => {
      res.send(data);
      console.log('newTask saved!');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the newTask.',
      });
    });
};

exports.findAll = (req, res) => {
  Task.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tasks.',
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const newStatus = req.body.status;

  Task.findByIdAndUpdate(id, { status: newStatus }, { new: true })
    .then((updatedTask) => {
      if (!updatedTask) {
        return res
          .status(404)
          .send({ message: 'Task not found with id ' + id });
      }
      res.send(updatedTask);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error updating task with id ' + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Task.findByIdAndRemove(id)
    .then((task) => {
      if (!task) {
        return res
          .status(404)
          .send({ message: 'Task not found with id ' + id });
      }
      res.send({ message: 'Task was deleted successfully!' });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Could not delete task with id ' + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Task.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} newTasks were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all newTasks.',
      });
    });
};
