const textToImage = require('text-to-image');
const ImageDataURI = require('image-data-uri');
const fs = require('fs-extra');


const imageFromText = async (text, filename) => {
  textToImage.generate(text, {
    maxWidth: 288,
    customHeight: 32,
    fontSize: 18,
    margin: 1,
    bgColor: "#004250",
    textColor: "#7AB800"
  }).then(async function(dataURI) {
    saveFile(dataURI, 'Images/' + filename);
  });
}

function saveFile(dataURI, filePath) {
		filePath = filePath || './';
		return new Promise((resolve, reject) => {
			let imageDecoded = ImageDataURI.decode(dataURI);
			fs.outputFile(filePath, imageDecoded.dataBuffer, err => {
				if (err) {
					return reject('ImageDataURI :: Error :: ' + JSON.stringify(err, null, 4));
				}
				resolve(filePath);
			});
		});
	}

exports.imageFromText = imageFromText;
