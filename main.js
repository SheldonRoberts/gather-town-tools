const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
  extended: true
}))

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/submited',function(req,res) {
  res.sendFile(__dirname + '/success.html');
});

app.post('/submit-form', (req, res) => {
  const username = req.body.username
  console.log(username)
  res.redirect('/submited')
  res.end()
})

app.listen(port, () => console.log("listening on port " + port))
