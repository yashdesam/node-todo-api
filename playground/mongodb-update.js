// sudo mongod -dbpath ~/Documents/ma_stuff/software_course/mongoDB/mongo-data

//const mongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID,
} = require('mongodb');

MongoClient.connect('mongodb://yashdesam:yashdesam@ds249428.mlab.com:49428/todoapp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a9328a3a0eed832e91b19a1'),
  }, {
    $inc: {
      age: 1,
    },
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
