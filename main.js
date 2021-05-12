const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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
  const images = req.body.images
  console.log(username)
  console.log(images)
  res.redirect('/submited')
  res.end()
})

app.listen(PORT, () => console.log("listening on port " + PORT))
