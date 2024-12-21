const db = require('../models');

const Boards = db.boards;

exports.createBoard = async (req, res) => {
  const { title, description } = req.body;

  const newBoard = new Boards({
    title: title,
    description: description,
  });

  if (!title) {
    return res.status(400).send({ message: 'Title is required' });
  }
  console.log('guay');
  try {
    const savedBoard = await newBoard.save(newBoard);
    res.status(201).send(savedBoard);
  } catch (error) {
    console.log('dime el error', error);
    res.status(500).send({ message: error.message });
  }
};

exports.getBoards = async (req, res) => {
  try {
    const boards = await Boards.find().populate('tasks');
    res.status(200).send(boards);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteBoard = async (req, res) => {
  const { id } = req.params;

  try {
    const board = await Boards.findByIdAndDelete(id);

    if (!board) {
      return res.status(404).send({ message: 'Board not found' });
    }

    // Opcional: Eliminar también las tareas asociadas al tablero
    await Tasks.deleteMany({ board: board._id });

    res.status(200).send({ message: 'Board deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
