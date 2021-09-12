const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('./public'));

app.listen(5000,()=>{
    console.log('app listening on port 5000...')
})