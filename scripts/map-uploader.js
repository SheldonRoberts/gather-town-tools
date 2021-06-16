const axios = require("axios");
const fs = require("fs");
const posterRoom = require("../map templates/poster-room");
const lobby = require("../map templates/lobby_1");

const makePosterRoom = async (apiKey, spaceId, objects, portals, room_title, signs, room, size) => {
  await axios.post("https://gather.town/api/setMap", {
    apiKey: apiKey,
    spaceId: spaceId,
    mapId: room["Room Name"],
    mapContent: posterRoom.defineMap(objects, size, portals),
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

// save the contents of a map to output.json
// https://gather.town/old/mapmaker/ json export serves the same purpose, but is being depreciated
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

module.exports = {
  makePosterRoom,
  makeLobby,
  getMapJson,
}
