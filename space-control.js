const textImage = require('./text-image');
const uploader = require('./auto-upload-poster-room');
const mapUploader = require('./map-uploader');
const fs = require('fs');

const delay = ms => new Promise(res => setTimeout(res, ms));

const emptyStation = {
  poster: {
    undefined
  },
}

const door1 = [
  [3, 26],
  [3, 25],
  [3, 24],
]
const door2 = [
  [14, 10],
  [15, 10],
]
const door3 = [
  [29, 10],
  [30, 10],
]
const door4 = [
  [41, 24],
  [41, 25],
  [41, 26],
]

const setupSpace = async (apiKey, spaceId, tables, rooms, paths) => {
  await generateStations(paths, tables).then(async (stations) => {
    //mapUploader.getMapJson(apiKey, spaceId, mapId);

    for (const room of rooms) {
      roomStations = [
        stations.find(x => x.id == room.table1) || emptyStation,
        stations.find(x => x.id == room.table2) || emptyStation,
        stations.find(x => x.id == room.table3) || emptyStation,
        stations.find(x => x.id == room.table4) || emptyStation,
        stations.find(x => x.id == room.table5) || emptyStation,
        stations.find(x => x.id == room.table6) || emptyStation,
      ];

      let portals = [];
      for (const portal of door1) {
        portals.push({
          "x": portal[0],
          "y": portal[1],
          "targetY": 25,
          "targetX": 22,
          "targetMap": room.door1
        });
      }
      for (const portal of door2) {
        portals.push({
          "x": portal[0],
          "y": portal[1],
          "targetY": 25,
          "targetX": 22,
          "targetMap": room.door2
        });
      }
      for (const portal of door3) {
        portals.push({
          "x": portal[0],
          "y": portal[1],
          "targetY": 25,
          "targetX": 22,
          "targetMap": room.door3
        });
      }
      for (const portal of door4) {
        portals.push({
          "x": portal[0],
          "y": portal[1],
          "targetY": 25,
          "targetX": 22,
          "targetMap": room.door4
        });
      }
      // make room signs
      textImage.signFromText(room.door1, 'door1_' + room.door1, 'left');
      textImage.signFromText(room.door2, 'door2_' + room.door2, 'center');
      textImage.signFromText(room.door3, 'door3_' + room.door3, 'center');
      textImage.signFromText(room.door4, 'door4_' + room.door4, 'right');
      await delay(50);
      doors = [
        'Images/door1_' + room.door1,
        'Images/door2_' + room.door2,
        'Images/door3_' + room.door3,
        'Images/door4_' + room.door4
      ];
      signs = await uploader.uploadFiles(doors, spaceId);

      // make room title
      textImage.titleFromText(room['Room Name'], room['Room Name']);
      await delay(50);
      room_title = await uploader.uploadFiles(["Images/" + room['Room Name']], spaceId);
      mapUploader.makeMap(apiKey, spaceId, room['Room Name'], roomStations, portals, Object.values(room_title), Object.values(signs));

      console.log("Room " + room['Room Name'] + " has been completed");
    }
  });
}

// create a station object
// Stations are a small area that contains a poster, title, etc for each presentation
const generateStations = async (paths, tables) => {

  let stations = [];
  // turn the text into .png images
  let titles = await generateTitles(tables);
  let presenters = await generatePresenters(tables);
  // this is needed. Not sure why
  await delay(5);

  // upload the .png files to gather.town urls
  const data = await Promise.all([
    uploader.uploadFiles(titles, spaceId),
    uploader.uploadFiles(presenters, spaceId),
    uploader.uploadFiles(paths, spaceId)
  ]);

  var titleLinks = Object.values(data[0]),
    presenterLinks = Object.values(data[1]),
    presenterNames = Object.keys(data[1]),
    posterLinks = data[2];

  let posters = generatePosters(posterLinks);
  // create the list of objects
  const maxLength = Math.max(titles.length, presenters.length, Object.keys(posters).length);
  for (var i = 0; i < maxLength; i++) {
    stations.push({
      title: titleLinks[i],
      presenter: presenterLinks[i],
      poster: posters[presenterNames[i].replace("Images", "uploads")] || "",
      video: tables[i].video,
      website: tables[i].URL,
      id: tables[i]["Table ID"]
    });
  }
  return stations;
}


// Titles must be uploaded as png images of text
const generateTitles = async (tables) => {
  let titles = [];
  let i = 0;
  for (const table of tables) {
    // changes to the font and colors are done in text-image.js
    textImage.imageFromText(table.title, "title_" + i);
    titles.push("Images/title_" + i);
    i++;
  }
  return titles;
}

// Should combine this with titles into a table object
const generatePresenters = async (tables) => {
  let presenters = [];
  let i = 0;
  for (const table of tables) {
    // changes to the font and colors are done in text-image.js
    textImage.imageFromText(table['presenter name'], table['presenter name']);
    presenters.push("Images/" + table['presenter name']);
    i++;
  }
  return presenters;
}

// makes a poster object JSON using image links
const generatePosters = (links) => {
  files = Object.keys(links);
  let posters = {};
  for (const file of files) {
    posters[file] = {
      posterImg: links[file],
      posterPreview: links[file],
      mapImg: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Ff34f6bf2-3bf9-4d95-9fe5-280e5da132a0?alt=media&token=9bc3f3c3-b691-4688-b633-2b0082e3f014",
      mapImgActive: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Fbd842123-b038-4cf9-8e73-0fe335d56f0f?alt=media&token=86879c6d-2625-4379-8f23-6af0b22487d7",
      numberImg: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9ea396a7-924e-470b-ad4d-c40b1abe761a?alt=media&token=608596ac-9fd1-45ed-a8ae-5439495ddf39",
    }
  }
  return posters;
}

exports.setupSpace = setupSpace;
