const mongoose = require('mongoose');

mongoose.promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

//mongoose.connect('mongodb://yashdesam:yashdesam@ds249428.mlab.com:49428/todoapp');

module.exports = { mongoose };
