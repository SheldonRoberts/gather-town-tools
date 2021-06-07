const express = require('express');
const app = express();
const multer = require('multer');
const sheetReader = require('./scripts/eventsheet-reader');
const spaceControl = require('./scripts/space-control');
const gather = require('./scripts/gather-helpers');
const PORT = process.env.PORT || 3000;

// Files uploaded to multer will keep their original name, no extension
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

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/success',function(req,res) {
  res.sendFile(__dirname + '/static/success.html');
});

app.post('/submit-request', upload.fields([{
  name: 'photos', maxcount: 24}, {name: 'eventsheet', maxcount: 1}]),
  function (req, res, next) {
    apiKey = req.body.key;
    spaceId = req.body.space.replace('/', '\\');
    size = req.body.inlineRadioOptions;
    let imagePaths = [];
    for (const file of req.files.photos) { imagePaths.push(file.path) }
    // turn the eventsheet (.xlsx) into JSON
    const sheet = req.files.eventsheet[0].filename;
    tables = sheetReader.tablesToJson(sheet);
    rooms = sheetReader.roomsToJson(sheet);
    attendees = sheetReader.attendeesToJson(sheet);
    guestlist = {};
    for (const attendee of attendees) { guestlist[attendee.Email] = {"role":attendee.Role,"name":attendee.Name} }
    // check if the form had 'private room' selected
    if (typeof req.body.private !== 'undefined') {
      gather.setGuestlist(guestlist);
    } else {
      gather.setGuestlist(null); // null guestlist creates a public space
    }

    let lobby = (typeof req.body.lobby !== 'undefined')
    // generate the space
    spaceControl.setupSpace(apiKey, spaceId, tables, rooms, imagePaths, lobby, size);
    res.redirect('/success');
  });

  app.listen(PORT, () => console.log("listening on port " + PORT))
