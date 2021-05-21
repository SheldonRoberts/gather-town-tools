// XLSX reads excel files. Can't use CSV - it doesn't store multiple sheet documents
var XLSX = require('xlsx');

// The names of the seperate sheets in the document must match these
const ROOM_SHEET_NAME = 'rooms';
const ATTENDEES_SHEET_NAME = 'attendees'
const TABLES_SHEET_NAME = 'tablesteams'

const logSheet = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var sheet_name_list = sheets.SheetNames;
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[sheet_name_list[2]]);
  console.log(sheet_name_list, data);
}

// convert the rooms sheet into a json object
const roomsToJson = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[ROOM_SHEET_NAME]);
  return data;
}
// convert attendees sheet to json object
const attendeesToJson = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[ATTENDEES_SHEET_NAME]);
  return data;
}
// convert the tables/teams sheet to json object
const tablesToJson = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[TABLES_SHEET_NAME]);
  return data;
}

exports.logSheet = logSheet;
exports.roomsToJson = roomsToJson;
exports.attendeesToJson = attendeesToJson;
exports.tablesToJson = tablesToJson;
