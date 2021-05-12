const express = require('express');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;
var upload = multer({ dest: 'uploads/' })

app.use(express.urlencoded({
  extended: true
}))

app.post('/profile', upload.array('photos', 12), function (req, res, next) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})


app.listen(PORT, () => console.log("listening on port " + PORT))

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

/*
app.post('/submit-form', (req, res) => {
  const username = req.body.username
  const images = req.body.images
  console.log(username)
  console.log(images)
  console.log(typeof images[0])
  res.redirect('/submited')
  res.end()
})

*/
