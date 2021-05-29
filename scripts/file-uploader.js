const axios = require("axios");
const fs = require("fs");


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


module.exports ={
        uploadFiles
    }
