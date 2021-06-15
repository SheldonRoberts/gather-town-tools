const axios = require("axios");
const fs = require("fs");
const posterRoom6 = require("../map templates/6-poster-room");
const posterRoom10 = require("../map templates/10-poster-room");
const lobby = require("../map templates/lobby_1");

const makePosterRoom = async (apiKey, spaceId, objects, portals, room_title, signs, room, size) => {
  await axios.post("https://gather.town/api/setMap", {
    apiKey: apiKey,
    spaceId: spaceId,
    mapId: room["Room Name"],
    mapContent: posterRoom10.defineMap(objects, size, portals),
  });
}

const makeLobby = async (apiKey, spaceId, portals, signs) => {
  await axios.post("https://gather.town/api/setMap", {
    apiKey: apiKey,
    spaceId: spaceId,
    mapId: "Lobby",
    mapContent: lobby.defineMap(portals, signs),
  });
}

const getMapJson = async (apiKey, spaceId, map_name) => {
  try {
    const resp = await axios.get("https://gather.town/api/getMap", {
      params: {
        apiKey: apiKey,
        spaceId: spaceId,
        mapId: map_name,
      }
    });
    let data = JSON.stringify(resp.data);
    fs.writeFileSync('output.json', data)
  } catch (err) {
    console.log(err);
  }
}


exports.makePosterRoom = makePosterRoom;
exports.makeLobby = makeLobby;
exports.getMapJson = getMapJson;
