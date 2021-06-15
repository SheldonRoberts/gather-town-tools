module.exports = {
  PRIMARY_COLOUR: "#7AB800",
  SECONDARY_COLOUR: "#004250",
  BG_COLOUR: "#ccd1da",
  TITLE_BG_COLOUR: "#afb4bd",
  // These are the coordinates of doors in the map
  DOORS: {


    x4: [
      [ // door1
        [0, 20], // door square 1
        [0, 21], // door square 2
      ],
      [ // door2 ...
        [10, 1],
        [11, 1],
      ],
      [
        [28, 1],
        [29, 1],
      ],
      [
        [39, 20],
        [39, 21],
      ],
    ],
  },
  LOBBY_DOORS: [
    [ // door1
      [64, 26], // door square 1
      [65, 26], // door square 2 // door square 3
    ],
    [ // door2 ...
      [72, 26],
      [73, 26],
    ],
    [
      [80, 26],
      [81, 26],
    ],
    [
      [88, 26],
      [89, 26],
    ],
  ],

  LOBBY_SPAWN: [76, 34],

  DOOR_TEXT_ALIGN: ['center', 'center', 'center', 'center'],

  ROOM_SPAWN: [34, 25], // [x,y] for spawn of poster rooms
  BLANK_STATION: {
    poster: {
      undefined
    },
  },
  SPAWNS: [
    [10, 15],
    [22, 15],
    [34, 15],
    [46, 15],
    [58, 15],
    [10, 27],
    [22, 27],
    [34, 27],
    [46, 27],
    [58, 15],
  ],
  // The names of the sheets in the .xlsx file
  ROOM_SHEET_NAME: 'rooms',
  ATTENDEES_SHEET_NAME: 'attendees',
  TABLES_SHEET_NAME: 'tablesteams',
};
