var express = require('express');
require('../db/conn');
var tetrisRoutes = express.Router();
const { ObjectId } = require('mongodb');


tetrisRoutes
  .route('/api')
  .get((req: any, res: any) => {
    let db_connect = dbo.getDb("breakfast_clubDB");
    db_connect
    .collection("profiles")
    .find({})
    .toArray((err: any, result: any[]) => {
      if(err) throw err;
      res.json(result);
    });
    // res.json([{displayName: 'Dre'}])
  });

module.exports = tetrisRoutes
