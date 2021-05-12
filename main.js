const express = require('express');
const multer = require('multer');
const path = require('path');
const helpers = require('./helpers');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(__dirname + '/public'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.listen(PORT, () => console.log("listening on port " + PORT))

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

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
app.post('/upload-multiple-images', (req, res) => {
    // 10 is the limit I've defined for number of uploaded files at once
    // 'multiple_images' is the name of our file input field
    let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).array('multiple_images', 10);

    upload(req, res, function(err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.files) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }


        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
        }
        result += `<img src="uploads/20210430_084418.jpg" width="300" style="margin-right: 20px;">`;
        result += '<hr/><a href="./">Upload more images</a>';
        res.send(result);
    });
});
