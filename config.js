module.exports = {
  PRIMARY_COLOUR: "#7AB800",
  SECONDARY_COLOUR: "#004250",
  BG_COLOUR: "#ccd1da",
  TITLE_BG_COLOUR: "#afb4bd",


  // These are the coordinates of door portals in the map
  DOORS: {
    // 4 poster room
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
    // 6 Poster room
    x6: [
      [ // door1
        [0, 20], // door square 1
        [0, 21], // door square 2
      ],
      [ // door2 ...
        [19, 1],
        [20, 1],
      ],
      [
        [36, 1],
        [37, 1],
      ],
      [
        [56, 20],
        [56, 21],
      ],
    ],
    x8: [
      [ // door1
        [10, 1], // door square 1
        [11, 1], // door square 2
      ],
      [ // door2 ...
        [27, 1],
        [28, 1],
      ],
      [
        [44, 1],
        [45, 1],
      ],
      [
        [61, 1],
        [62, 1],
      ],
    ],
  },
  LOBBY_DOORS: [
    [
      [64, 26],
      [65, 26],
      [
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
    ]
  ],

  LOBBY_SPAWN: [76, 34],

  ROOM_SPAWN: {
    x4: [20, 21],
    x6: [28, 21],
    x8: [20, 21],
  }, // [x,y] for spawn of poster rooms


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
  // The order of poster placements, based on room size
  ORIENTATIONS: [
    [
      [5, 6],
      [22, 6],
      [5, 23],
      [22, 23],
    ],
    [
      [5, 6],
      [22, 6],
      [39, 6],
      [5, 23],
      [22, 23],
      [39, 23],
    ],
    [
      [5, 6],
      [22, 6],
      [39, 6],
      [56, 6],
      [5, 23],
      [22, 23],
      [39, 23],
      [56, 23],

    ]
  ],
  // The names of the sheets in the .xlsx file
  ROOM_SHEET_NAME: 'rooms',
  ATTENDEES_SHEET_NAME: 'attendees',
  TABLES_SHEET_NAME: 'tablesteams',
};
