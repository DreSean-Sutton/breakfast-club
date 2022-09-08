var express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
const dbo = require('./db/conn');
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json())
app.use(cors());
// app.use(require('./routes/tetris'));

app
  .route("/leaderboards")
  .get(function (req: any, res: any) {
    let db_connect = dbo.getDb("breakfast_clubDB");
    db_connect
      .collection("tetris")
      .find({})
      .toArray(function (err: any, result: any) {
        if (err) throw err;
        res.json(result);
      });
      // res.send([{ displayName: 'Dre' }]);
  });
// .get('/api', (req: any, res: any) => {
//     let db_connect = dbo.getDb("breakfast_clubDB");
//     db_connect
//     .collection("profiles")
//     .find({})
//     .toArray((err: any, result: any[]) => {
//       if(err) throw err;
//       res.json(result);
//     });
//   });

app.listen(port, () => {
  dbo.connectToServer(function (err: any) {
    if(err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
