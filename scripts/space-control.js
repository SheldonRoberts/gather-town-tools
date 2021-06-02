const textImage = require('./text-image');
const uploader = require('./gather-helpers');
const mapUploader = require('./map-uploader');
const config = require('../config');
const delay = ms => new Promise(res => setTimeout(res, ms)); // delay after writing files to limit issues


const setupSpace = async (apiKey, spaceId, tables, rooms, paths) => {
  await generateStations(paths, tables).then(async (stations) => {
    //mapUploader.getMapJson(apiKey, spaceId, mapId);
    links = {};
    for (const room of rooms) {

      links = Object.assign(links, tableLinks(room));
      let portals = setPortals(room);
      // find the tables that are assigned to this room
      roomStations = [];
      let i = 1;
      while (room["table" + i] != undefined) {
        roomStations.push(stations.find(x => x.id == room["table" + i]));
        i++;
      }
      doorImages = [];
      for (i = 1; i <= config.DOORS.length; i++) {
        textImage.signFromText(room["door" + i], `door${i}_${room["door"+i]}`, 'left');
        doorImages.push(`Images/door${i}_${room["door"+i]}`)
      }
      textImage.titleFromText(room['Room Name'], room['Room Name']);
      await delay(50);
      signs = await uploader.uploadFiles(doorImages, spaceId);
      room_title = await uploader.uploadFiles(["Images/" + room['Room Name']], spaceId);
      // Generate the room
      mapUploader.makeMap(apiKey, spaceId, room['Room Name'], roomStations, portals, Object.values(room_title), Object.values(signs));
      console.log("Room " + room['Room Name'] + " has been completed");
    }
    console.log(links);
  });
}

// create a station object
// Stations are a small area that contains a poster, title, etc for each presentation
const generateStations = async (paths, tables) => {
  let stations = [];
  let titles = await generateTitles(tables);
  let presenters = await generatePresenters(tables);
  // delay is needed for files to upload
  await delay(5);
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
  const maxLength = Math.max(titles.length, presenters.length, Object.keys(posters).length);
  for (var i = 0; i < maxLength; i++) {
    posterName = presenterNames[i].replace("Images", "uploads");
    posterName = posterName.replace(" ", "_");
    stations.push({
      title: titleLinks[i] || "",
      presenter: presenterLinks[i] || "",
      poster: posters[posterName] || "",
      video: tables[i].video || "",
      website: tables[i].URL || "",
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

// creates an object of links that spawn users directly at a given table
const tableLinks = (room) => {
  links = {}
  link_id = room["Room Name"].replace(" ", "%20");
  let i = 1;
  for (const coord of config.SPAWNS) {
    name = `${link_id} Poster ${i}`;
    links[name] = `https://gather.town/app/${spaceId.replace("\\", "/")}?spawnx=${coord[0]}&spawny=${coord[1]}&map=${link_id}`;
    i++;
  }
  return links
}

const setPortals = (room) => {
  let portals = [];
  let i = 1;
  for (const door of config.DOORS) {
    for (const portal of door) {
      portals.push({
        "x": portal[0],
        "y": portal[1],
        "targetX": config.ROOM_SPAWN[0],
        "targetY": config.ROOM_SPAWN[1],
        "targetMap": room['door' + i],
      });
    }
    i++;
  }
  return portals;
}

exports.setupSpace = setupSpace;
