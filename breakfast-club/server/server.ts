var express = require('express');
require('dotenv').config({ path: '../.env' });
const dbo = require('./db/conn');
const app = express();
var tetrisRoutes = require('./routes/tetris')
const port = process.env.PORT || 5000;
app.use(express.json())
app.use('/tetris', tetrisRoutes)

app.listen(port, () => {
  dbo.connectToServer(function (err: any) {
    if(err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
