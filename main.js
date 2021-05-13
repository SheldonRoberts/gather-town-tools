const express = require('express');
const multer = require('multer');
const uploader = require('./auto-upload-poster-room');
const app = express();
const PORT = process.env.PORT || 3000;
const MAX_UPLOAD = 28
var upload = multer({ dest: 'uploads/' })

// express middleware for form handling
app.use(express.urlencoded({
  extended: true
}))
// set index.html as the main page
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});
// display the success message page
app.get('/success',function(req,res) {
  res.sendFile(__dirname + '/success.html');
});

// handle form submition
app.post('/profile', upload.array('photos', MAX_UPLOAD), function (req, res, next) {
  // create a list of the file paths
  let paths = [];
  for (const file of req.files) {
    paths.push(file.path);
  }

  // create poster objects and write them to the map
  const generatePosters = (links) => {
    console.log(links)
    let posterData = [];
    for (const file of req.files) {
      console.log('loop ' + links[file.path])
      posterData.push({
      		posterImg: links[file.path],
      		posterPreview: links[file.path],
      		mapImg:
      			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Ff34f6bf2-3bf9-4d95-9fe5-280e5da132a0?alt=media&token=9bc3f3c3-b691-4688-b633-2b0082e3f014",
      		mapImgActive:
      			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Fbd842123-b038-4cf9-8e73-0fe335d56f0f?alt=media&token=86879c6d-2625-4379-8f23-6af0b22487d7",
      		numberImg:
      			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9ea396a7-924e-470b-ad4d-c40b1abe761a?alt=media&token=608596ac-9fd1-45ed-a8ae-5439495ddf39",
      	});
    }
    uploader.writeMap(posterData, req.body.space.replace('/', '\\'), req.body.key);
  }

  // upload the poster files to the gather.town servers
  uploader.uploadFiles(paths, req.body.space.replace('/', '\\')).then(generatePosters);
  // redirect to the success page
  res.redirect('/success');
})

// start the server connection
app.listen(PORT, () => console.log("listening on port " + PORT))
