//sudo mongod -dbpath ~/Documents/ma_stuff/software_course/mongoDB/mongo-data
//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // // deleteMany
  // db.collection('Users').deleteMany({
  //   name: 'yaswanth',
  // }).then((result) => {
  //   console.log(result);
  // });

  // // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Walk the dog',
  // }).then((result) => {
  //   console.log(result);
  // });

  // findOne and deteteOne
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a93174eeff05162b8706f36'),
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
