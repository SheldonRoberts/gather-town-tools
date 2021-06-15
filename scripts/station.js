const setStation = (x, y, station) => {
  return [
  // POSTER BACKDROP
    {
      "color": "#37946e",
      "y": y + 3,
      "orientation": 0,
      "templateId": "Backdrop - ORMgZuqcTzlW0KkAvXURT",
      "_tags": ["conference", "office", "decoration", "presentation"],
      "height": 2,
      "type": 0,
      "scale": 1,
      "width": 3,
      "x": x + 5,
      "properties": {},
      "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FKGM4Q2e6zN3TtDAj?alt=media&token=a05c2f7c-1693-405e-a965-77133e32a06a",
      "_name": "Backdrop",
      "id": "Backdrop - ORMgZuqcTzlW0KkAvXURT_1fd83c99-2ec7-46a9-8004-491095e14868",
      "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FsYoV2opRkyWOVhAc?alt=media&token=f4d8a589-bc4a-4753-92e5-d290bfebccf0"
    },

    // PODIUM
    {
      "properties": {},
      "scale": 1,
      "_name": "Large Podium",
      "templateId": "Large Podium - CWXH-zAT-2twrvDpKj-3Z",
      "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2F0eRIauuQ8EC4SgsE?alt=media&token=c5cfa261-d877-4820-bce9-b33b6a865c49",
      "type": 0,
      "y": y + 5,
      "color": "#c4824e",
      "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FWIZQ4Jo8NNOEoHrc?alt=media&token=08ab75fb-a169-49ef-8ad6-9a789e17ed75",
      "id": "Large Podium - CWXH-zAT-2twrvDpKj-3Z_77b62cc7-b805-4f25-ae9e-e3730f627fe7",
      "width": 1,
      "orientation": 0,
      "height": 2,
      "x": x + 6,
      "_tags": ["office", "conference", "education", "furniture", "furniture/other", "presentation"]
    },

    // PRESENTATION TITLE
    station.title == undefined ? {} : {
      "id": "i1gPOvmbzmbgShfEgn2WV_d8f6cbbd-3ace-4a43-9438-e652fddd8571",
      "width": 6,
      "properties": {},
      "color": "default",
      "normal": station.title,
      "_tags": ["Custom"],
      "y": y,
      "_name": "",
      "x": x,
      "height": 1,
      "orientation": 0,
      "templateId": "i1gPOvmbzmbgShfEgn2WV",
      "type": 0,
      "scale": 1
    },

    // PRESENTER NAME
    station.presenter == undefined ? {} : {
      "y": y+1,
      "_name": "",
      "highlighted": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/GZ8QKZ7SMxkbVBbE/B5kQ0okiNkN85Lw5lJLTKV",
      "type": 0,
      "width": 5,
      "color": "default",
      "scale": 1,
      "normal": station.presenter,
      "orientation": 0,
      "templateId": "zvTJgVi3BQIGzKCjWLFWw",
      "height": 1,
      "x": x,
      "properties": {},
      "id": "zvTJgVi3BQIGzKCjWLFWw_089fa095-0ea4-40eb-9a54-0064c114eede",
      "_tags": ["Custom"]
    },

    // VIDEO LINK
    station.video == undefined ? {} : {
      "orientation": 0,
      "scale": 1,
      "templateId": "qZaWIq0GpeMy7MoZT-w1K",
      "y": y + 11,
      "id": "qZaWIq0GpeMy7MoZT-w1K_d31095c7-e033-45d2-a11d-164b3da7c3ab",
      "_tags": ["Custom"],
      "color": "default",
      "_name": "",
      "normal": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/0Y0r0jUYgrYWDQzH/nPdb4hzRrfcGvBaPlYOSIF",
      "properties": {
        "message": "Click Link To Visit: " + station.video
      },
      "width": 3,
      "height": 2,
      "highlighted": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/0Y0r0jUYgrYWDQzH/UDw2PmGfJaKeVPMgdkGh5N",
      "type": 6,
      "distThreshold": 0,
      "x": x + 1
    },

    // WEBSITE LINK
    station.website == undefined ? {} : {
      "orientation": 0,
      "scale": 1,
      "templateId": "qZaWIq0GpeMy7MoZT-w1K",
      "y": y + 11,
      "id": "qZaWIq0GpeMy7MoZT-w1K_d31095c7-e033-45d2-a11d-164b3da7c3ab",
      "_tags": ["Custom"],
      "color": "default",
      "_name": "",
      "normal": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/0Y0r0jUYgrYWDQzH/9Og2Rdk2GJdEYaDbs28CYc",
      "properties": {
        "message": "Click Link To Visit: " + station.website

      },
      "width": 3,
      "height": 2,
      "highlighted": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/0Y0r0jUYgrYWDQzH/c02T0c95t4nLRfvMWiEsIu",
      "type": 6,
      "distThreshold": 0,
      "x": x + 9
    },

    // POSTER OBJECT
    station.poster.posterImg == undefined ? {} : {
      "x": x+5,
      "color": "#639bff",
      "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FJLcO7fPfJlop9WvY?alt=media&token=29dbc584-d603-49cb-af86-028309197236",
      "offsetX": 0,
      "scale": 1,
      "y": y+3,
      "offsetY": 0,
      "width": 3,
      "_tags": ["decoration", "decoration/wall", "office", "conference", "presentation"],
      "distThreshold": 5,
      "type": 2,
      "id": "Poster - 8RSUnkK2tlLxX8uX-o-Ss_ac6e45d9-8d9e-4836-b9ca-d357b2452990",
      "height": 2,
      "properties": {
        "image": station.poster.posterImg,
        "preview": station.poster.posterPreview
      },
      "_name": "Poster",
      "orientation": 0,
      "templateId": "Poster - 8RSUnkK2tlLxX8uX-o-Ss",
      "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FiTRAoIlZ8vAqwgnG?alt=media&token=b8245888-b400-4412-a731-2d8b0296462c"
    },

    // PRESS X instructions
    station.video == undefined ? {} : {
      "height": 1,
      "scale": 1,
      "highlighted": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/GZ8QKZ7SMxkbVBbE/xqTIEADLMNml1jPqkWkFms",
      "templateId": "cXkvJ7ponE_rutgoPhac1",
      "properties": {},
      "_tags": ["Custom"],
      "id": "cXkvJ7ponErutgoPhac1_6b236588-78c3-4050-b737-73a59be5a3cc",
      "_name": "",
      "normal": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/GZ8QKZ7SMxkbVBbE/TytS9LMA7oI4Pxt7q3uNFD",
      "width": 3,
      "y": y+12,
      "color": "default",
      "type": 0,
      "x": x+1,
      "orientation": 0
    }, station.website == undefined ? {} : {
      "height": 1,
      "scale": 1,
      "highlighted": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/GZ8QKZ7SMxkbVBbE/xqTIEADLMNml1jPqkWkFms",
      "templateId": "cXkvJ7ponE_rutgoPhac1",
      "properties": {},
      "_tags": ["Custom"],
      "id": "cXkvJ7ponErutgoPhac1_6b236588-78c3-4050-b737-73a59be5a3cc",
      "_name": "",
      "normal": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/GZ8QKZ7SMxkbVBbE/TytS9LMA7oI4Pxt7q3uNFD",
      "width": 3,
      "y": y+12,
      "color": "default",
      "type": 0,
      "x": x+9,
      "orientation": 0
    }
  ]

}
exports.setStation = setStation;
