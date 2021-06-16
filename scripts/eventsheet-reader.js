var XLSX = require('xlsx');

// log the contents of a spreasheet as json
const logSheet = (filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var sheet_name_list = sheets.SheetNames;
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[sheet_name_list[2]]);
  console.log(sheet_name_list, data);
}

// convert the sheet into a json object
const sheetToJson = (sheet, filename) => {
  var sheets = XLSX.readFile('uploads/' + filename);
  var data = XLSX.utils.sheet_to_json(sheets.Sheets[sheet]);
  return data;
}

module.exports = {
  logSheet,
  sheetToJson
}
