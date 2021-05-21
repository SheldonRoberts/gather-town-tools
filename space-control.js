const textImage = require('./text-image');
const uploader = require('./auto-upload-poster-room');
const mapUploader = require('./map-uploader');
const fs = require('fs');

const setupSpace = async (apiKey, spaceId, mapId, tables, paths) => {
  posterTitles = generateTitles(tables);
  // need to wait for files to save
  // if the image files are not found, likely need to increase the delay
  await delay(500);
  renameTitles(posterTitles);
  links = await uploader.uploadFiles(paths, spaceId);
  posterData = generatePosters(Object.values(links));
  titleLinks = await uploader.uploadFiles(posterTitles, spaceId);

  mapUploader.makeMap(apiKey, spaceId, mapId, posterData, titleLinks);
}

// delay function to allow time for processes to run
// could probably find a better solution
const delay = ms => new Promise(res => setTimeout(res, ms));

// Titles must be uploaded as png images of text
const generateTitles = (tables) => {
  let titles = [];
  i = 0;
  for (const table of tables) {
    // changes to the font and colors are done in text-image.js
    textImage.imageFromText(table.title, "title_"+i);
    titles.push("Images/title_" + i);
    i++;
  }
  return titles;
}

// makes a poster object JSON using image links
const generatePosters = (links) => {
  let posterData = [];
  for (const link of links) {
    posterData.push({
      posterImg: link,
      posterPreview: link,
      mapImg: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Ff34f6bf2-3bf9-4d95-9fe5-280e5da132a0?alt=media&token=9bc3f3c3-b691-4688-b633-2b0082e3f014",
      mapImgActive: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2Fbd842123-b038-4cf9-8e73-0fe335d56f0f?alt=media&token=86879c6d-2625-4379-8f23-6af0b22487d7",
      numberImg: "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/assets%2F9ea396a7-924e-470b-ad4d-c40b1abe761a?alt=media&token=608596ac-9fd1-45ed-a8ae-5439495ddf39",
    });
  }
  return posterData;
}

// For some reason the gather.town API wants no extension on the png
const renameTitles = async (titles) => {
  i = 0;
  while (i < 6) {
    fs.rename("Images/title_"+i + '.png', "Images/title_"+i);
    i++;
  }
  return titles;
}

exports.setupSpace = setupSpace;
