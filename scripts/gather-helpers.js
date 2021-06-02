const axios = require("axios");
const fs = require("fs");

const setGuestlist = async (guests) => {
  await axios.post("https://gather.town/api/setEmailGuestlist", {
    apiKey: apiKey,
    spaceId: spaceId,
    guestlist: guests,
    overwrite: true
  });
}

const makeMap = async (apiKey, spaceId, map_name, stations, portals, room_title, signs) => {
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

// takes local files, uploads them to Gather's storage
// from Gather API documentation
const uploadFiles = async (filePaths, space_id_code) => {
	const posterLinks = (
		await Promise.all(
			filePaths.map(async (path) => {
				return {
					[path]: await new Promise((resolve, reject) =>
						fs.readFile(path, function (err, data) {
							if (err) reject(err); // Fail if the file can't be read.
							axios
								.post(
									"https://gather.town/api/uploadImage",
									// "http://localhost:3000/api/uploadImage",
									{
										bytes: data,
										spaceId: space_id_code,
									},
									{ maxContentLength: Infinity, maxBodyLength: Infinity }
								)
								.then((res) => resolve(res.data));
						})
					)	,
				};
			})
		)
	).reduce((obj, item) => Object.assign(obj, item), {});
	return posterLinks;
};

module.exports = {
  setGuestlist,
  makeMap,
  getMapJson,
  uploadFiles,
}
