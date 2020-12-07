const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'index.html')));

app.get('*', (req,res) =>{
  console.log("gettttttt");
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    console.log("running on port: ", port);
});