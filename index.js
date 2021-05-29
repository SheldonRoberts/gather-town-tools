const express = require('express');
const multer = require('multer');
const fs = require('fs');
const uploader = require('./auto-upload-poster-room');
const sheetReader = require('./eventsheet-reader');
const mapUploader = require('./map-uploader');

const spaceControl = require('./space-control');
const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.split('.')[0])
  }
})
const upload = multer({storage: storage})

app.use(express.urlencoded({
  extended: true
}))

app.post('/submit-request', upload.fields([{
  // the file fields from the form which are saved to the uploads folder
  name: 'photos', maxcount: 24}, {name: 'eventsheet', maxcount: 1}]),
  function (req, res, next) {

    // data from the form
    apiKey = req.body.key;
    spaceId = req.body.space.replace('/', '\\');
    mapId = req.body.roomname;

    // turn the eventsheet into JSON
    const sheet = req.files.eventsheet[0].filename;
    tables = sheetReader.tablesToJson(sheet);
    rooms = sheetReader.roomsToJson(sheet);
    //... attendees

    // save the paths of the poster images for later access
    let paths = []
    for (const file of req.files.photos) {
      paths.push(file.path);
    }

    // generate the space
    spaceControl.setupSpace(apiKey, spaceId, mapId, tables, rooms, paths);

    res.redirect('/success');
  });

  app.listen(PORT, () => console.log("listening on port " + PORT))

  app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
  });

  app.get('/success',function(req,res) {
    res.sendFile(__dirname + '/success.html');
  });
