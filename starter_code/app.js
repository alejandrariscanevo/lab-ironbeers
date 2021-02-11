const express = require('express');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

import unirest
response = unirest.get("https://assets.chucknorris.host/img/avatar/chuck-norris.png")



app.get('/', (req, res, next) => {
  res.status(200).json({message:"todo esta bien"})
});

app.listen(3000);
