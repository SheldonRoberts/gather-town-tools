
module.exports = {
  PRIMARY_COLOUR: "#7AB800",
  SECONDARY_COLOUR: "#004250",
  BG_COLOUR: "#ccd1da",
  TITLE_BG_COLOUR: "#afb4bd",
  // These are the coordinates of doors in the map
  DOORS: [
    [ // door1
      [3, 26], // door square 1
      [3, 25], // door square 2
      [3, 24], // door square 3
    ], [ // door2 ...
      [14, 10],
      [15, 10],
    ], [
      [29, 10],
      [30, 10],
    ], [
      [41, 24],
      [41, 25],
      [41, 26],
    ],
  ],
  LOBBY_DOORS: [
    [ // door1
      [64, 26], // door square 1
      [65, 26], // door square 2 // door square 3
    ], [ // door2 ...
      [72, 26],
      [73, 26],
    ], [
      [80, 26],
      [81, 26],
    ], [
      [88, 26],
      [89, 26],
    ],
  ],

  LOBBY_SPAWN: [76, 34],

  DOOR_TEXT_ALIGN: ['left', 'center', 'center', 'right'],

  ROOM_SPAWN: [22,25], // [x,y] for spawn of poster rooms
  BLANK_STATION: {
    poster: {
      undefined
    },
  },
  SPAWNS: [
    [10, 15],
    [22, 15],
    [34, 15],
    [10, 27],
    [22, 27],
    [34, 27],
  ],
  // The names of the sheets in the .xlsx file
  ROOM_SHEET_NAME: 'rooms',
  ATTENDEES_SHEET_NAME: 'attendees',
  TABLES_SHEET_NAME: 'tablesteams',
};
