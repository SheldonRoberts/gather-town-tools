const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const multer = require('multer');
const sheetReader = require('./scripts/eventsheet-reader');
const spaceControl = require('./scripts/space-control');
const gather = require('./scripts/gather-helpers');
const config = require('./config');
const PORT = process.env.PORT || 3000;

// Files uploaded to multer will keep their original name, no extension
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname.split('.')[0])
  }
})
const upload = multer({
  storage: storage
})

app.use(express.urlencoded({
  extended: true
}));

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/success', function(req, res) {
  res.sendFile(__dirname + '/static/success.html');
});

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/static/menu.html');
});

app.get('/edit', function(req, res) {
  res.sendFile(__dirname + '/static/edit.html');
});

app.post('/submit-request', upload.fields([{
  name: 'photos', maxcount: 24}, {name: 'eventsheet', maxcount: 1}]),
  async function (req, res, next) {
    apiKey = req.body.key;
    spaceId = req.body.space.replace('/', '\\');
    config.PRIMARY_COLOUR = req.body.textColor;
    config.SECONDARY_COLOUR = req.body.bgColor;
    let imagePaths = [];
    let useLink = false // uses link object instead of poster png if true
    if (req.files.photos != undefined) {
      for (const file of req.files.photos) {
        imagePaths.push(file.path)
      }
    } else {
      useLink = true;
    }
    // turn the eventsheet (.xlsx) into JSON
    const sheet = req.files.eventsheet[0].filename;
    tables = sheetReader.sheetToJson(config.TABLES_SHEET_NAME, sheet);
    rooms = sheetReader.sheetToJson(config.ROOM_SHEET_NAME, sheet);
    attendees = sheetReader.sheetToJson(config.ATTENDEES_SHEET_NAME, sheet);

    guestlist = {};
    for (const attendee of attendees) { guestlist[attendee.Email] = {"role":attendee.Role,"name":attendee.Name} }
    if (typeof req.body.private !== 'undefined') {
      gather.setGuestlist(guestlist);
    } else {
      gather.setGuestlist(null); // null guestlist creates a public space
    }

    let lobby = (typeof req.body.lobby !== 'undefined')
    teleports = await spaceControl.setupSpace(apiKey, spaceId, tables, rooms, imagePaths, lobby, useLink);
    res.redirect('/success');

    // display links to each poster
    let values = "";
    for (const [key, value] of Object.entries(teleports)) {
      name = key.replace("%20", " ")
      //values += name + ": <a href='" + value + "'>'\r\n";
      values += `<a href = '${value}'>${name}</a><br>`
    }
    io.on('connection', (socket) => {
      io.emit('links', values);
    });
  });

http.listen(PORT, () => console.log("listening on port: " + PORT))
