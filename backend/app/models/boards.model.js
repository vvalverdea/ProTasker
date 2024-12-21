module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    title: { type: String, required: true },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tasks',
      },
    ],
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Boards = mongoose.model('boards', schema);
  return Boards;
};
