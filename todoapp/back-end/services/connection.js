const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database Name
const dbName = 'to-do-db';

let _db;

const connectToDB = (callback) => {
  client.connect((err) => {
    console.log('Connected successfully to server');
    _db = client.db(dbName);
    return callback(err);
  });
};

const findDocuments = async () => {
  const collection = _db.collection('task');
  try {
    const response = await collection.find({}).toArray();
    return response;
  } catch (error) {
    throw new Error(error)
  }
};

connectToDB(async () => {
  const r = await findDocuments();
  console.log(r);
})

module.exports = {
  connectToDB,
};
