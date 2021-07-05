const textToImage = require('text-to-image');
const ImageDataURI = require('image-data-uri');
const config = require('../config');
const fs = require('fs-extra');

// handles the text for poster stations
const imageFromText = async (text, filename) => {
  let size = 14;
  if (text == undefined) {text = " "}
  if (text.length > 100) {
    text = text.substring(0, 100) + "...";
  }
  textToImage.generate(text, {
    maxWidth: 32*13,
    customHeight: 32,
    fontSize: size,
    margin: 1,
    lineHeight: 15,
    bgColor: config.SECONDARY_COLOUR,
    textColor: config.PRIMARY_COLOUR
  }).then(async function(dataURI) {
    saveFile(dataURI, 'Images/' + filename);
  });
}

// generates text for the room titles
const titleFromText = async (text, filename) => {
  let size = 36;
  if (text == undefined) {text = " "}
  if (text.length > 20 && text.length < 40) {
    size = 30;
  } else if (text.length > 40) {
    size = 25;
  }
  textToImage.generate(text, {
    maxWidth: 32*13,
    customHeight: 80,
    fontSize: size,
    margin: 1,
    bgColor: config.TITLE_BG_COLOUR,
    textColor: config.SECONDARY_COLOUR,
    textAlign:"center"
  }).then(async function(dataURI) {
    saveFile(dataURI, 'Images/' + filename);
  });
}

// generates the text for signs to other rooms
const signFromText = async (text, filename, alignment) => {
  let size = 36;
  if (text == undefined) {text = " "}
  if (text.length > 20 && text.length < 40) {
    size = 30;
  } else if (text.length > 40) {
    size = 25;
  }
  textToImage.generate(text, {
    maxWidth: 288,
    customHeight: 80,
    fontSize: size,
    margin: 1,
    bgColor: config.BG_COLOUR,
    textColor: "#222034",
    textAlign: alignment
  }).then(async function(dataURI) {
    saveFile(dataURI, 'Images/' + filename);
  });
}

const lobbySignFromText = async (text, filename, alignment) => {
  let size = 36;
  if (text == undefined) {text = " "}
  if (text.length > 20 && text.length < 40) {
    size = 30;
  } else if (text.length > 40) {
    size = 25;
  }
  textToImage.generate(text, {
    maxWidth: 224,
    customHeight: 40,
    fontSize: size,
    margin: 1,
    bgColor: "#847e87",
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

module.exports = {
  imageFromText,
  titleFromText,
  signFromText,
  lobbySignFromText
}
