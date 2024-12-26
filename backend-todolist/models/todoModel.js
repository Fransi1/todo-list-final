const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  creator: { type: String, default: 'Anon' },
});

module.exports = mongoose.model('Todo', TodoSchema);
