const axios = require("axios");
const fs = require("fs");

const MAP_ID = "custom-entrance";
const WIDTH = 94;
const HEIGHT = 57;


const posterData = [...Array(24).keys()].map((i) => {
	// actually fill in your own poster data here, this is just 24 identical ones
	return {
		posterImg:
			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F8ac167c6-e24b-4706-a19d-6079a3e30004?alt=media&token=4ff8d831-006c-4c9a-9ff0-740504b2bbd9",
		posterPreview:
			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9f48996d-9b50-480a-9ea6-46e98013204e?alt=media&token=c602f84d-8cf8-43a8-935a-b11a1030d8f0",
		mapImg:
			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Ff34f6bf2-3bf9-4d95-9fe5-280e5da132a0?alt=media&token=9bc3f3c3-b691-4688-b633-2b0082e3f014",
		mapImgActive:
			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Fbd842123-b038-4cf9-8e73-0fe335d56f0f?alt=media&token=86879c6d-2625-4379-8f23-6af0b22487d7",
		numberImg:
			"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9ea396a7-924e-470b-ad4d-c40b1abe761a?alt=media&token=608596ac-9fd1-45ed-a8ae-5439495ddf39",
	};
});

var BASE_MAP = {
	id: MAP_ID,
	backgroundImagePath:
		"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/maps%2F8225d335-2e81-4264-a94f-5be4e31b5f63?alt=media&token=0d6c2671-1a65-4e2d-83f5-46da93acb82b",
	dimensions: [WIDTH, HEIGHT],
	spawns: [
		// generally, adding many more than one is good practice so people don't all stack up in the same place
		{ x: 47, y: 28 },
	],
	objects: [], // add random plants and whatever else here
	portals: [
		// for example:
		{
			x: 2,
			y: 3,
			targetUrl:
				"https://gather.town/app/nO9uzqf6ZhzsXJ68/Grand%20Central%20Station",
		},
	],
};

// takes local files, uploads them to Gather's storage
const uploadFiles = async (filePaths, space_id_code) => {
	console.log(filePaths + '------------------------');
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
	// ^ sorry this is kind of spaghetti code, but the result is that posterLinks will have the form:
	// {
	//   filename1: "https://cdn.gather.town/uploadedPosterPath1",
	//   filename2: "https://cdn.gather.town/uploadedPosterPath2",
	//   filename3: "https://cdn.gather.town/uploadedPosterPath3",
	// }

	return posterLinks;
};

// takes basic poster data, and generates the map from it
const writeMap = async (posterData, space_id_code, apiKey, map_name) => {
	let impassable = {}; // maps r,c to true if impassable
	let posters = [];
	let privateSpaces = [];
	if (posterData == null) {
		posterData = [...Array(24).keys()].map((i) => {
			// actually fill in your own poster data here, this is just 24 identical ones
			return {
				posterImg:
					"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F8ac167c6-e24b-4706-a19d-6079a3e30004?alt=media&token=4ff8d831-006c-4c9a-9ff0-740504b2bbd9",
				posterPreview:
					"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9f48996d-9b50-480a-9ea6-46e98013204e?alt=media&token=c602f84d-8cf8-43a8-935a-b11a1030d8f0",
				mapImg:
					"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Ff34f6bf2-3bf9-4d95-9fe5-280e5da132a0?alt=media&token=9bc3f3c3-b691-4688-b633-2b0082e3f014",
				mapImgActive:
					"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Fbd842123-b038-4cf9-8e73-0fe335d56f0f?alt=media&token=86879c6d-2625-4379-8f23-6af0b22487d7",
				numberImg:
					"https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9ea396a7-924e-470b-ad4d-c40b1abe761a?alt=media&token=608596ac-9fd1-45ed-a8ae-5439495ddf39",
			};
		});
	}

	// arrange the posters in rows
	posterData.forEach((poster, index) => {
		const topleft = {
			x: (index % 7) * 13 + 3,
			y: parseInt(index / 7) * 13 + 4,
		};

		// the poster object
		posters.push({
			x: topleft.x,
			y: topleft.y,
			type: 2,
			distThreshold: 1,
			width: 10,
			height: 8,
			normal: poster.mapImg,
			highlighted: poster.mapImgActive,
			properties: {
				image: poster.posterImg,
				preview: poster.posterPreview,
			},
		});
		// also the number label
		posters.push({
			x: topleft.x + 3,
			y: topleft.y + 3,
			normal: poster.numberImg,
			type: 0,
			width: 2,
			height: 2,
		});

		// now for the impassible tiles on posters
		for (let x = topleft.x + 3; x < topleft.x + 7; x++) {
			for (let y = topleft.y + 3; y < topleft.y + 5; y++) {
				impassable[[y, x]] = true;
			}
		}

		// poster private space
		for (let x = topleft.x; x < topleft.x + 10; x++) {
			for (let y = topleft.y; y < topleft.y + 8; y++) {
				privateSpaces.push({ x, y, spaceId: "p" + index });
			}
		}
	});

	// generate impassable bytemask
	let collBytes = [];
	for (let r = 0; r < HEIGHT; r++) {
		for (let c = 0; c < WIDTH; c++) {
			// edges are just definitely impassable
			if (r < 2 || r > HEIGHT - 3 || c < 1 || c > WIDTH - 2)
				collBytes.push(0x01);
			// otherwise see if it's marked or not
			else collBytes.push(impassable[[r, c]] ? 0x01 : 0x00);
		}
	}

	BASE_MAP.id = map_name
	await axios.post("https://gather.town/api/setMap", {
		apiKey: apiKey,
		spaceId: space_id_code,
		mapId: map_name,
		mapContent: Object.assign(BASE_MAP, {
			objects: BASE_MAP.objects.concat(posters),
			spaces: privateSpaces,
			collisions: new Buffer(collBytes).toString("base64"),
			// ^ base64 encoded array of dimensions[1] x dimensions[0] bytes (each either 0x00 or 0x01)
		}),
	});
};

// uploadFiles([
// 	"/home/npfoss/Downloads/poster1.jpg",
// 	"/home/npfoss/Downloads/poster2.jpg",
// ]).then(console.log);

//writeMap(posterData);


module.exports ={
        uploadFiles, writeMap
    }
