const textToImage = require('text-to-image');
const ImageDataURI = require('image-data-uri');

const imageFromText = async (text, filename) => {
  textToImage.generate(text, {
    maxWidth: 288,
    customHeight: 32,
    fontSize: 18,
    margin: 1,
    bgColor: "#7D9AAA",
    textColor: "#000000"
  }).then(function(dataURI) {
    ImageDataURI.outputFile(dataURI, 'Images/' + filename);
  });

}

exports.imageFromText = imageFromText;
