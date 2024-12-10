module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    title: String,
    status: Number,
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tasks = mongoose.model('tasks', schema);
  return Tasks;
};
