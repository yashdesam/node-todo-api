const mongoose = require('mongoose');

mongoose.promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://yashdesam:yashdesam@ds249428.mlab.com:49428/todoapp');

module.exports = { mongoose };
