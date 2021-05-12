const express = require('express');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(__dirname + '/images'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/submited',function(req,res) {
  res.sendFile(__dirname + '/success.html');
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
app.post('/submit-form', (req, res) => {
    // 10 is the limit I've defined for number of uploaded files at once
    // 'multiple_images' is the name of our file input field
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);

    upload(req, res, function(err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (...) // The same as when uploading single images

        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="./">Upload more images</a>';
        res.send(result);
    });
});

app.listen(PORT, () => console.log("listening on port " + PORT))
