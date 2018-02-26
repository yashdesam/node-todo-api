// sudo mongod -dbpath ~/Documents/ma_stuff/software_course/mongoDB/mongo-data
//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://<yashdesam>:<yashdesam>@ds249428.mlab.com:49428/todoapp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name: 'sathwik',
    age: 23,
    location: 'Northville',
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
