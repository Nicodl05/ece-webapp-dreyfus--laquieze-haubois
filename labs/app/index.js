const express = require('express')
const app = express()
const port = 8080;
//const birds = require('./birds')
app.use(express.json());
app.use('/', require('./handles.js'))
app.listen(port, () => {
  console.log("Example app listening on port ", port)
});
