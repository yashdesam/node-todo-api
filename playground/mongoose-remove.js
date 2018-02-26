const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// To remove all the todos from data base
// Todo.remove().then((results) => {
//   console.log(results);
// });

// Todo.findOneAndRemove

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5a947c6197a6c826ab0e8a54').then((todo) => {
  console.log(todo);
});
