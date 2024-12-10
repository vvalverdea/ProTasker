const db = require('../models');
const newTask = db.newTasks;

// Create and Save a new newTask
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create a newTask
  const newnewTask = new newTask({
    title: req.body.title,
    status: req.body.status,
  });

  // Save newTask in the database
  newnewTask
    .save(newnewTask)
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

// Retrieve all newTasks from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: 'i' } }
    : {};

  newTask
    .find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving newTasks.',
      });
    });
};

// Find a single newTask with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  newTask
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found newTask with id ' + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: 'Error retrieving newTask with id=' + id });
    });
};

// Update a newTask by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  newTask
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update newTask with id=${id}. Maybe newTask was not found!`,
        });
      } else res.send({ message: 'newTask was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating newTask with id=' + id,
      });
    });
};

// Delete a newTask with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  newTask
    .findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete newTask with id=${id}. Maybe newTask was not found!`,
        });
      } else {
        res.send({
          message: 'newTask was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete newTask with id=' + id,
      });
    });
};

// Delete all newTasks from the database.
exports.deleteAll = (req, res) => {
  newTask
    .deleteMany({})
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
