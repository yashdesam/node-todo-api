// sudo mongod -dbpath ~/Documents/ma_stuff/software_course/mongoDB/mongo-data
//const mongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').find().toArray().then((count) => {
    console.log(`Todos count: ${JSON.stringify(count, undefined, 2)}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({ location: 'Northville' }).toArray().then((docs) => {
    console.log(`${JSON.stringify(docs, undefined, 2)}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close();
});
