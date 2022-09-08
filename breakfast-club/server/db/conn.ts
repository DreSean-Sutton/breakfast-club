const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var _db: any;

module.exports = {
  connectToServer: function (callback: any) {
    client.connect(function (err: any, db: any) {
      if (db) {
        _db = db.db('breakfast_clubDB');
        console.log('Successfully connected to MongoDB');
      }
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  }
};
