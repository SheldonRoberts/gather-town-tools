const textImage = require('./text-image');
const uploader = require('./gather-helpers');
const mapUploader = require('./map-uploader');
const config_6 = require('../6-config');
const config_10 = require('../10-config');
const delay = ms => new Promise(res => setTimeout(res, ms)); // delay after writing files to limit issues


const setupSpace = async (apiKey, spaceId, tables, rooms, paths, lobby = true, size) => {
  

  let config = (size > 6) ? config_10 : config_6;
  links = {};
  await generateStations(paths, tables, config).then(async (stations) => {
    //mapUploader.getMapJson(apiKey, spaceId, "Healthy");

    for (const room of rooms) {

      if (room["Room Name"] == "Lobby") {
        if (lobby) {
          let doorImages = [];
          for (i = 1; i <= config.LOBBY_DOORS.length; i++) {
            textImage.lobbySignFromText(room["door" + i], `door${i}_${room["door"+i]}`, 'center');
            doorImages.push(`Images/door${i}_${room["door"+i]}`)
          }
          await delay(50);
          let signs = await uploader.uploadFiles(doorImages, spaceId);

          lobbyPortals = setPortals(room, config.LOBBY_DOORS, config);
          mapUploader.makeLobby(apiKey, spaceId, lobbyPortals, Object.values(signs));
        }
      } else {

        links = Object.assign(links, tableLinks(room, config));
        let portals = setPortals(room, config.DOORS, config);
        // find the tables that are assigned to this room
        roomStations = [];
        let numberOfRooms = 0;
        for (i = 1; i <= 10; i++) {
          if (room["table" + i] != undefined) {
            roomStations.push(stations.find(x => x.id == room["table" + i]));
            numberOfRooms++;
          } else {
            roomStations.push({poster: {}});
          }
        }
        doorImages = [];
        for (i = 1; i <= config.DOORS.length; i++) {
          textImage.signFromText(room["door" + i], `door${i}_${room["door"+i]}`, config.DOOR_TEXT_ALIGN[i-1]);
          doorImages.push(`Images/door${i}_${room["door"+i]}`)
        }
        textImage.titleFromText(room['Room Name'], room['Room Name']);
        await delay(50);
        signs = await uploader.uploadFiles(doorImages, spaceId);
        room_title = await uploader.uploadFiles(["Images/" + room['Room Name']], spaceId);
        // Generate the room
        if (size > 6) {
          mapUploader.makePosterRoom10(apiKey, spaceId, room['Room Name'], roomStations, portals, Object.values(room_title), Object.values(signs));
        } else {
          mapUploader.makePosterRoom6(apiKey, spaceId, room['Room Name'], roomStations, portals, Object.values(room_title), Object.values(signs));
        }
        console.log("Room '" + room['Room Name'] + "' has been completed.");
      }
    }
  });
  return links;
}

// create a station object
// Stations are a small area that contains a poster, title, etc for each presentation
const generateStations = async (paths, tables, config) => {
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
const tableLinks = (room, config) => {
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

const setPortals = (room, doors, config) => {
  let portals = [];
  let i = 1;
  for (const door of doors) {
    for (const portal of door) {
      portals.push({
        "x": portal[0],
        "y": portal[1],
        "targetX": room['door' + i] == "Lobby" ? config.LOBBY_SPAWN[0] : config.ROOM_SPAWN[0],
        "targetY": room['door' + i] == "Lobby" ? config.LOBBY_SPAWN[1] : config.ROOM_SPAWN[1],
        "targetMap": room['door' + i],
      });
    }
    i++;
  }
  return portals;
}

exports.setupSpace = setupSpace;
