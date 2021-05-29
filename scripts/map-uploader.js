const axios = require("axios");
const fs = require("fs");
const template = require("../map templates/map-template")
const textImage = require('./text-image');
const uploader = require('./file-uploader');

const MAP_ID = "Test Room";
const WIDTH = 90;
const HEIGHT = 57;
const delay = ms => new Promise(res => setTimeout(res, ms));

const makeMap = async (apiKey, spaceId, map_name, stations, portals, room_title, signs) => {
  let privateSpaces = []

  await axios.post("https://gather.town/api/setMap", {
    apiKey: apiKey,
    spaceId: spaceId,
    mapId: map_name,
    mapContent: template.defineMap(stations, portals, room_title, signs),
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

exports.makeMap = makeMap;
exports.getMapJson = getMapJson;
