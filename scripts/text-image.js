const textToImage = require('text-to-image');
const ImageDataURI = require('image-data-uri');
const fs = require('fs-extra');


const imageFromText = async (text, filename) => {
  let size = 18;
  if (text.length > 32) {
    size = 14;
  }
  if (text.length > 83) {
    text = text.substring(0, 85) + "...";
  }
  textToImage.generate(text, {
    maxWidth: 288,
    customHeight: 32,
    fontSize: size,
    margin: 1,
    lineHeight: 15,
    bgColor: "#004250",
    textColor: "#7AB800"
  }).then(async function(dataURI) {
    saveFile(dataURI, 'Images/' + filename);
  });
}

const titleFromText = async (text, filename) => {
  let size = 36;
  if (text.length > 20 && text.length < 40) {
    size = 30;
  } else if (text.length > 40) {
    size = 25;
  }
  textToImage.generate(text, {
    maxWidth: 288,
    customHeight: 40,
    fontSize: size,
    margin: 1,
    bgColor: "#595652",
    textColor: "#FFFFFF",
    textAlign:"center"
  }).then(async function(dataURI) {
    saveFile(dataURI, 'Images/' + filename);
  });
}

const signFromText = async (text, filename, alignment) => {
  let size = 36;
  if (text.length > 20 && text.length < 40) {
    size = 30;
  } else if (text.length > 40) {
    size = 25;
  }
  textToImage.generate(text, {
    maxWidth: 288,
    customHeight: 40,
    fontSize: size,
    margin: 1,
    bgColor: "#595652",
    textColor: "#222034",
    textAlign: alignment
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
exports.titleFromText = titleFromText;
exports.signFromText = signFromText;