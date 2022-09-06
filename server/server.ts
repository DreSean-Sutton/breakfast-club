
const express = require('express');
require('dotenv').config({ path: './.env' });
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const dbo = require('./db/conn');

app.listen(port, () => {
  dbo.connectToServer(function (err: any) {
    if(err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
