var XLSX = require('xlsx');
const config = require('../config');

const logSheet = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var sheet_name_list = sheets.SheetNames;
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[sheet_name_list[2]]);
  console.log(sheet_name_list, data);
}

// convert the rooms sheet into a json object
const roomsToJson = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[config.ROOM_SHEET_NAME]);
  return data;
}
// convert attendees sheet to json object
const attendeesToJson = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[config.ATTENDEES_SHEET_NAME]);
  return data;
}
// convert the tables/teams sheet to json object
const tablesToJson = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[config.TABLES_SHEET_NAME]);
  return data;
}

exports.logSheet = logSheet;
exports.roomsToJson = roomsToJson;
exports.attendeesToJson = attendeesToJson;
exports.tablesToJson = tablesToJson;
