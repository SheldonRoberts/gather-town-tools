
const BACKGROUNDS = {
  x4: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/QxbReFWAujtjGAxEiz5LNA",
  x6: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/2v2cnDpHj3iPtlAhpZukzN",
  x8: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/hBGVaJN2YSr7Jx7hnwTB37",
  x10: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/P4iYhIWqpfkhELz8ckeFye",
  x12: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/ue1CHYQIi1RbChQSScaMwb",
  x14: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/l12ZEsSdc1E614snH0vSdf",
}

const topDoor = (coords) => {
  return {
    "templateId": "Doorway (2-wide) - brkt0v9oHWSrRhUTKtZBx",
    "scale": 1,
    "color": "#9badb7",
    "orientation": 0,
    "width": 4,
    "id": "Doorway (2-wide) - brkt0v9oHWSrRhUTKtZBx_93904f9b-d2e1-4a98-8a69-1b483a7db60f",
    "normal": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/Ceo5BnIu4iY1ehlUnDQADW",
    "type": 0,
    "_tags": ["door", "social", "conference", "education", "office"],
    "_name": "Doorway (2-wide)",
    "x": coords[0],
    "height": 2,
    "properties": {},
    "highlighted": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/Ceo5BnIu4iY1ehlUnDQADW",
    "y": coords[1]
  }
}

const leftDoor = (coords) => {
  return {
    "id": "Doorway (2-wide) - brkt0v9oHWSrRhUTKtZBx_9da71feb-6533-4b8a-bcb9-7fb4dc23b616",
    "type": 0,
    "_name": "Doorway (2-wide)",
    "height": 5,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Finym9CTzvFCj5WsL?alt=media&token=efeabb68-1d58-4215-b258-5b1f61308086",
    "templateId": "Doorway (2-wide) - brkt0v9oHWSrRhUTKtZBx",
    "color": "#9badb7",
    "properties": {},
    "scale": 1,
    "orientation": 3,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FNioTgSGSmJNXJWZR?alt=media&token=75aad8be-2e24-44b6-b090-e2551285c387",
    "_tags": ["door", "social", "conference", "education", "office"],
    "y": coords[1],
    "width": 1,
    "x": coords[0]
  }
}

const rightDoor = (coords) => {
  return {
    "width": 1,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Ft5Sh6b532jSdVXUE?alt=media&token=02a5b61f-93f4-449c-9c80-04ea959704d2",
    "properties": {},
    "templateId": "Doorway (2-wide) - brkt0v9oHWSrRhUTKtZBx",
    "id": "Doorway (2-wide) - brkt0v9oHWSrRhUTKtZBx_94fe82a3-d5d5-4da5-bc22-058f015696f3",
    "y": coords[1],
    "x": coords[0],
    "_name": "Doorway (2-wide)",
    "_tags": ["door", "social", "conference", "education", "office"],
    "orientation": 1,
    "scale": 1,
    "type": 0,
    "height": 5,
    "color": "#9badb7",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxIRAW58AKmvs7F6J?alt=media&token=7beaf1c8-591d-4cdc-8026-9c2e37307b80"
  }
}

const defineMap = (objects, size, portals) => {
  var background;
  if (size <= 4) {
    background = BACKGROUNDS.x4;
    objects.push(leftDoor([0,18]));
    objects.push(topDoor([9,0]));
    objects.push(topDoor([27,0]));
    objects.push(rightDoor([39,18]));
  } else if (size <= 6) {
    background = BACKGROUNDS.x6;
  } else if (size <= 8) {
    background = BACKGROUNDS.x8;
  } else if (size <= 10) {
    background = BACKGROUNDS.x10;
  } else if (size <= 12) {
    background = BACKGROUNDS.x12;
  } else {
    background = BACKGROUNDS.x14;
  }
  return {
    "announcer": [],
    "dimensions": [40, 43],
    "assets": [],
    "id": "Poster Room",
    "objects" : objects,
    "spawns": [{
      "y": 11,
      "x": 4
    }],
    "spaces": [/*{
      "colored": false,
      "y": 15,
      "x": 6,
      "spaceId": "1"
    }, */], //...........
    "useDrawnBG": false,
    "portals": portals,
    "backgroundImagePath": "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/vWb5tSFIGe80Ow1x/8MjrbavRMAMSy1NkeqiUe6",
    "collisions": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
    }
}

exports.defineMap = defineMap;
