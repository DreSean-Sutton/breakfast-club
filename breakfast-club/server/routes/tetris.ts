var express = require('express');
var dbo = require('../db/conn');
const router = express.Router();
const { ObjectId } = require('mongodb');

router
  .route("/")
  .get(function (req: any, res: any) {
    let db_connect = dbo.getDb("breakfast_clubDB");
    db_connect
      .collection("tetris")
      .find({})
      .toArray(function (err: any, result: any) {
        if (err) throw err;
        res.json(result);
      });
  });

module.exports = router
