const textImage = require('./text-image');
const uploader = require('./auto-upload-poster-room');
const mapUploader = require('./map-uploader');
const fs = require('fs');

const delay = ms => new Promise(res => setTimeout(res, ms));

const setupSpace = async (apiKey, spaceId, mapId, tables, paths) => {
  await generateStations(paths, tables).then((stations) => {
    mapUploader.makeMap(apiKey, spaceId, mapId, stations);
  });
}

// create a station object
// Stations are a small area that contains a poster, title, etc for each presentation
const generateStations = async (paths, tables) => {

  let stations = [];
  // turn the text into .png images
  let titles = generateTitles(tables);
  let presenters = generatePresenters(tables);
  await delay(2000);
  // upload the .png files to gather.town urls
  const data = await Promise.all([
    uploader.uploadFiles(titles, spaceId),
    uploader.uploadFiles(presenters, spaceId),
    uploader.uploadFiles(paths, spaceId)
   ]);

  var titleLinks = Object.values(data[0]),
      presenterLinks = Object.values(data[1]),
      posterLinks = data[2];
  let posters = generatePosters(Object.values(posterLinks));
  // create the list of objects
  const maxLength = Math.max(titles.length, presenters.length, posters.length);
  for(var i = 0; i <maxLength; i++) {
    stations.push({
      title: titleLinks[i],
      presenter: presenterLinks[i],
      poster: posters[i]
    });
  }
  return stations;
}


// Titles must be uploaded as png images of text
const generateTitles = (tables) => {
  let titles = [];
  let i = 0;
  for (const table of tables) {
    // changes to the font and colors are done in text-image.js
    textImage.imageFromText(table.title, "title_"+i);
    titles.push("Images/title_" + i);
    i++;
  }
  return titles;
}

// Should combine this with titles into a table object
const generatePresenters = (tables) => {
  let presenters = [];
  let i = 0;
  for (const table of tables) {
    // changes to the font and colors are done in text-image.js
    textImage.imageFromText(table['presenter name'], "presenter_"+i);
    presenters.push("Images/presenter_" + i);
    i++;
  }
  return presenters;
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

exports.setupSpace = setupSpace;
