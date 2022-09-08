var express = require('express');
require('../db/conn');
var tetrisRoutes = express.Router();
const { ObjectId } = require('mongodb');


tetrisRoutes
  .route('/leaderboard/list')
  .get((req: any, res: any) => {
    let db_connect = dbo.getDb('breakfast_clubDB');
    db_connect
    .collection('profiles')
    .find({})
    .toArray((err: any, result: any[]) => {
      if(err) throw err;
      res.json(result);
    });
  });

module.exports = tetrisRoutes
