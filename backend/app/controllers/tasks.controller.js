const db = require('../models');
const mongoose = require('mongoose');

const Task = db.tasks;
const Board = db.boards;

exports.create = (req, res) => {
  if (!req.body.title || !req.body.board) {
    return res.status(400).send({ message: 'Title and board are required!' });
  }

  const newTask = new Task({
    title: req.body.title,
    status: req.body.status || 0, // Status por defecto si no se proporciona
    board: req.body.board,
  });

  newTask
    .save() // Guardar la nueva tarea en la colección de tareas
    .then((savedTask) => {
      // Agregar la tarea al campo tasks del tablero correspondiente
      return Board.findByIdAndUpdate(
        req.body.board,
        { $push: { tasks: savedTask._id } }, // Push al campo tasks con el ID de la tarea
        { new: true } // Devolver el documento actualizado
      ).then((updatedBoard) => {
        if (!updatedBoard) {
          return res
            .status(404)
            .send({ message: 'Board not found with id ' + req.body.board });
        }

        // Responder con la tarea guardada y el tablero actualizado
        res.send({ task: savedTask, board: updatedBoard });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the task.',
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

exports.findAllByBoard = (req, res) => {
  const boardId = req.params.id;
  Task.find({ board: boardId })
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
  const taskId = req.params.id; // ID de la tarea a actualizar
  const newStatus = req.body.status; // Nuevo estado recibido del cuerpo de la petición

  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    return res.status(400).send({ message: 'Invalid task ID format' });
  }

  // Actualizar el estado de la tarea
  Task.findByIdAndUpdate(taskId, { status: newStatus }, { new: true })
    .then((updatedTask) => {
      if (!updatedTask) {
        return res
          .status(404)
          .send({ message: 'Task not found with id ' + taskId });
      }

      // Verificar que la tarea esté referenciada en un Board
      return Board.findOne({ tasks: taskId }).then((board) => {
        if (!board) {
          return res.status(404).send({
            message: 'Board not found containing task with id ' + taskId,
          });
        }

        // Responder con la tarea actualizada y el tablero asociado
        res.send({ updatedTask, board });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error updating task with id ' + taskId,
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
