const express = require('express');
require('dotenv').config({ path: './.env' });
const dbo = require('./db/conn');
const app = express();
const port = process.env.PORT || 5000;
import axios from 'axios';
app.use(express.json())

app.listen(port, () => {
  dbo.connectToServer(function (err: any) {
    if(err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
