const textImage = require('./text-image');
const uploader = require('./gather-helpers');
const mapUploader = require('./map-uploader');
const config = require('../config');
const stationManager = require('./station');
let alert = require('alert');
const delay = ms => new Promise(res => setTimeout(res, ms)); // delay after writing files to limit issues


const setupSpace = async (apiKey, spaceId, tables, rooms, paths, lobby = true, useLink) => {
  links = {};
  await generateStations(paths, tables, config, useLink).then(async (stations) => {
    //mapUploader.getMapJson(apiKey, spaceId, "copy");

    for (const room of rooms) {
      var size = room.size;
      if (room["Room Name"] == "Lobby") {
        if (lobby) {
          let doorImages = [];
          for (i = 1; i <= config.LOBBY_DOORS.length; i++) {
            textImage.lobbySignFromText(room["door" + i], `door${i}_${room["door"+i]}`, 'center');
            doorImages.push(`Images/door${i}_${room["door"+i]}`)
          }
          await delay(50);
          let signs = await uploader.uploadFiles(doorImages, spaceId);

          lobbyPortals = setPortals(room, config, -1);
          mapUploader.makeLobby(apiKey, spaceId, lobbyPortals, Object.values(signs));
        }
      } else {

        links = Object.assign(links, tableLinks(room, config.SPAWNS["" + size]));
        // find the tables that are assigned to this room
        roomStations = [];
        let numberOfStations = 0;
        while (true) {
          if (room["table" + (numberOfStations + 1)] != undefined) {
            roomStations.push(stations.find(x => x.id == room["table" + (numberOfStations + 1)]));
            numberOfStations++;
          } else {
            break;
          }
        }
        let portals = setPortals(room, config, size);
        let objects = [];

        coords = config.ORIENTATIONS[size / 2 - 2];

        i = 0;
        for (const station of roomStations) {
          objects = objects.concat(stationManager.setStation(coords[i][0], coords[i][1], station, useLink));
          i++;
        }
        DOOR_TEXT_ALIGN = size > 4 ? ['center', 'center', 'center', 'center'] : ['left', 'center', 'center', 'right']
        doorImages = [];
        for (i = 1; i <= 4; i++) {
          if (room["door" + i] != undefined) {
            name = room["door" + i];
          } else {
            name = "";
          }
          textImage.signFromText(name, `door${i}_${name}`, DOOR_TEXT_ALIGN[i - 1]);
          doorImages.push(`Images/door${i}_${name}`)
        }
        textImage.titleFromText(room['Room Name'], room['Room Name']);
        await delay(50);
        signs = await uploader.uploadFiles(doorImages, spaceId);
        room_title = await uploader.uploadFiles(["Images/" + room['Room Name']], spaceId);

        // Generate the room
        mapUploader.makePosterRoom(apiKey, spaceId, objects, portals, Object.values(room_title), Object.values(signs), room, size);

        console.log("Room '" + room['Room Name'] + "' has been completed.");
      }
    }
  });
  return links;
}

// create a station object
// Stations are a small area that contains a poster, title, etc for each presentation
const generateStations = async (paths, tables, config, useLink) => {
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

  let posters;
  if (useLink) {
    posters = {};
    for (const table of tables) {
      var name = "uploads/" + table["presenter name"].replace(" ", "_");
      posters[name] = table["presentation link"];
    }
  } else {
    posters = generatePosters(posterLinks);
  }
  const maxLength = Math.max(titles.length, presenters.length, Object.keys(posters).length);
  for (var i = 0; i < maxLength; i++) {

    posterName = presenterNames[i] == undefined ? "" : presenterNames[i].replace("Images/presenter_", "uploads/");
    posterName = posterName.replace(" ", "_");

    stations.push({
      title: titleLinks[i] || "",
      presenter: presenterLinks[i] || "",
      poster: posters[posterName] || "",
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
    textImage.imageFromText(table['presenter name'], "presenter_" + table['presenter name']);
    presenters.push("Images/presenter_" + table['presenter name']);
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
const tableLinks = (room, spawns) => {
  links = {}
  link_id = room["Room Name"].replace(" ", "%20");
  let i = 1;
  for (const coord of spawns) {
    name = `${link_id} Poster ${i}`;
    links[name] = `https://gather.town/app/${spaceId.replace("\\", "/")}?spawnx=${coord[0]}&spawny=${coord[1]}&map=${link_id}`;
    i++;
  }
  return links
}

const setPortals = (room, config, size) => {
  let portals = [];
  let i = 1;
  let doors;
  const getSpawn = (size) => {
    switch (size) {
      case 1:
      case 2:
      case 3:
      case 4:
        return config.ROOM_SPAWN.x4;
      case 5:
      case 6:
        return config.ROOM_SPAWN.x6;
      case 7:
      case 8:
        return config.ROOM_SPAWN.x8;
      case 9:
      case 10:
        return config.ROOM_SPAWN.x10;
      case 11:
      case 12:
        return config.ROOM_SPAWN.x12;
      default:
        return config.LOBBY_SPAWN;
    }
  }
  if (size == -1) {
    doors = config.LOBBY_DOORS;
  } else if (size <= 4) {
    doors = config.DOORS.x4;
  } else if (size <= 6) {
    doors = config.DOORS.x6;
  } else if (size <= 8) {
    doors = config.DOORS.x8;
  } else if (size <= 10) {
    doors = config.DOORS.x10;
  } else if (size <= 12) {
    doors = config.DOORS.x12;
  } else {
    console.log("Max room size exceeded (Max: 12)")
  }
  for (const door of doors) {
    targetRoom = rooms.find(x => x["Room Name"] == room["door" + i])
    spawn = getSpawn(targetRoom ? targetRoom.size : "Lobby");
    for (const portal of door) {
      portals.push({
        "x": portal[0],
        "y": portal[1],
        "targetX": spawn[0],
        "targetY": spawn[1],
        "targetMap": room['door' + i],
      });
    }
    i++;
  }
  return portals;
}


exports.setupSpace = setupSpace;
