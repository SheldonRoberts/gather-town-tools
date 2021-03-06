const collisionMaps = require('./collision-maps');
const config = require('../config');

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

const textObj = (link, coords) => {
  return {
    "id": "i1gPOvmbzmbgShfEgn2WV_d8f6cbbd-3ace-4a43-9438-e652fddd8571",
    "orientation": 0,
    "properties": {},
    "height": 1,
    "type": 0,
    "x": coords[0],
    "_tags": ["Custom"],
    "y": coords[1],
    "templateId": "i1gPOvmbzmbgShfEgn2WV",
    "color": "default",
    "scale": 1,
    "_name": "",
    "width": 6,
    "normal": link
  }
}

const leftArrow = (coords) => {
  return {
    "templateId": "Arrow (Chalk) - ecZv8hqsoa4Ed66cwH1LB",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fq3uv11eTipgAzYgC?alt=media&token=d3f03864-e3da-43b0-af7a-c2dc62c21fec",
    "type": 0,
    "id": "Arrow (Chalk) - ecZv8hqsoa4Ed66cwH1LB_0599b4f2-c991-47c1-83c0-a71cfca31d48",
    "color": "#222034",
    "x": coords[0],
    "y": coords[1],
    "properties": {},
    "width": 1,
    "_name": "Arrow (Chalk)",
    "_tags": ["wayfinding", "instruction"],
    "orientation": 3,
    "height": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FvPHHgzelxoqAhIq3?alt=media&token=aa9387b8-62d9-42b0-adc7-3c23ace5a38d",
    "scale": 1
  }
}

const upArrow = (coords) => {
  return {
    "properties": {},
    "scale": 1,
    "y": coords[1],
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FSIKOyxOeioTUoDm6?alt=media&token=f97cddd7-5f24-49b4-a4a8-2fee1c0f63e2",
    "_name": "Arrow (Chalk)",
    "id": "Arrow (Chalk) - ecZv8hqsoa4Ed66cwH1LB_c8e6f5ef-4433-4a4e-95f7-e728dcd6740f",
    "templateId": "Arrow (Chalk) - ecZv8hqsoa4Ed66cwH1LB",
    "width": 1,
    "_tags": ["wayfinding", "instruction"],
    "orientation": 2,
    "type": 0,
    "height": 1,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FnksDik5DOu2v6CHq?alt=media&token=5416e713-c621-4522-a1e8-0b67b3f0c162",
    "x": coords[0],
    "color": "#222034"
  }
}

const rightArrow = (coords) => {
  return {
    "width": 1,
    "x": coords[0],
    "_name": "Arrow (Chalk)",
    "id": "Arrow (Chalk) - ecZv8hqsoa4Ed66cwH1LB_b572b26e-1781-42c8-8122-c728b73f2ce2",
    "y": coords[1],
    "properties": {},
    "type": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FwmBrdDbsIrVQvr73?alt=media&token=2752771f-4100-4c3a-a141-098533e6f188",
    "orientation": 1,
    "scale": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FXs17bFGroQ6DFW6r?alt=media&token=c27943aa-4775-4288-80ab-3d6737cd190b",
    "templateId": "Arrow (Chalk) - ecZv8hqsoa4Ed66cwH1LB",
    "_tags": ["wayfinding", "instruction"],
    "height": 1,
    "color": "#222034"
  }
}
const defineMap = (objects, size, portals, room_title, signs) => {
 
  let i = 0;
  //for (const coord of config.ORIENTATIONS[size/2 - 2]) {
  spaces = [];
  for (const coord of config.ORIENTATIONS[size / 2 - 2]) { // TEMPERARY
    spaces = spaces.concat(makePrivateSpace(coord[0], coord[1], i++));
  }
  var background;
  if (size <= 4) {
    background = BACKGROUNDS.x4;
    if (portals[0].targetMap) {
      objects.push(
        leftDoor([0, 18]),
        leftArrow([1, 20]),
        textObj(signs[0], [2, 20]),
      );
    }
    if (portals[2].targetMap) {
      objects.push(
        topDoor([9, 0]),
        textObj(signs[1], [6, 3]),
        upArrow([10, 2]),
      );
    }
    if (portals[4].targetMap) {
      objects.push(
        topDoor([27, 0]),
        textObj(signs[2], [25, 3]),
        upArrow([29, 2]),
      );
    }
    if (portals[6].targetMap) {
      objects.push(
        rightDoor([39, 18]),
        rightArrow([38, 20]),
        textObj(signs[3], [29, 20]),
      );
    }
    objects.push(textObj(room_title, [14, 20]));
    dimensions = [40, 43];
    collisions = collisionMaps.room_4;
    } else if (size <= 6) {
    background = BACKGROUNDS.x6;
    if (portals[0].targetMap) {
      objects.push(
        leftDoor([0, 18]),
        textObj(signs[0], [2, 20]),
        leftArrow([1, 20]),
      );
    }
    if (portals[2].targetMap) {
      objects.push(
        topDoor([18, 0]),
        textObj(signs[1], [15, 3]),
        upArrow([19, 2]),
      );
    }
    if (portals[4].targetMap) {
      objects.push(
        topDoor([35, 0]),
        textObj(signs[2], [33, 3]),
        upArrow([37, 2]),
      );
    }
    if (portals[6].targetMap) {
      objects.push(
        rightDoor([56, 18]),
        rightArrow([55, 20]),
        textObj(signs[3], [46, 20]),
      );
    }
    objects.push(textObj(room_title, [22, 20]));
    dimensions = [74, 41];
    collisions = collisionMaps.room_6;

  } else if (size <= 8) {
    background = BACKGROUNDS.x8;
    if (portals[0].targetMap) {
      objects.push(
        topDoor([9, 0]),
        textObj(signs[0], [6, 3]),
        upArrow([10, 2]),
      );
    }
    if (portals[2].targetMap) {
      objects.push(
        topDoor([26, 0]),
        textObj(signs[1], [23, 3]),
        upArrow([27, 2]),
      );
    }
    if (portals[4].targetMap) {
      objects.push(
        topDoor([43, 0]),
        textObj(signs[2], [41, 3]),
        upArrow([45, 2]),
      );
    }
    if (portals[6].targetMap) {
      objects.push(
        topDoor([60, 0]),
        upArrow([62, 2]),
        textObj(signs[3], [58, 3]),
      );
    }
    dimensions = [74, 41];
    objects.push(textObj(room_title, [30, 20]));
    collisions = collisionMaps.room_8;
  } else if (size <= 10) {
    background = BACKGROUNDS.x10;
    if (portals[0].targetMap) {
      objects.push(
        topDoor([18, 0]),
        textObj(signs[0], [15, 3]),
        upArrow([19, 2]),
      );
    }
    if (portals[2].targetMap) {
      objects.push(
        topDoor([35, 0]),
        textObj(signs[1], [32, 3]),
        upArrow([36, 2]),
      );
    }
    if (portals[4].targetMap) {
      objects.push(
        topDoor([52, 0]),
        textObj(signs[2], [49, 3]),
        upArrow([54, 2]),
      );
    }
    if (portals[6].targetMap) {
      objects.push(
        topDoor([69, 0]),
        upArrow([71, 2]),
        textObj(signs[3], [66, 3]),
      );
    }
    objects.push(textObj(room_title, [39, 20]));
    dimensions = [108, 43];
    collisions = collisionMaps.room_10
  } else if (size <= 12) {
    background = BACKGROUNDS.x12;
    if (portals[0].targetMap) {
      objects.push(
        topDoor([26, 0]),
        textObj(signs[0], [23, 3]),
        upArrow([27, 2]),
      );
    }
    if (portals[2].targetMap) {
      objects.push(
        topDoor([43, 0]),
        textObj(signs[1], [40, 3]),
        upArrow([44, 2]),
      );
    }
    if (portals[4].targetMap) {
      objects.push(
        topDoor([60, 0]),
        textObj(signs[2], [57, 3]),
        upArrow([62, 2]),
      );
    }
    if (portals[6].targetMap) {
      objects.push(
        topDoor([77, 0]),
        upArrow([79, 2]),
        textObj(signs[3], [74, 3]),
      );
    }
    objects.push(textObj(room_title, [56, 20]));
    dimensions = [117, 45];
    collisions = collisionMaps.room_12;
  } else {
    console.log("Maximum room size exceeded (Max: 12)");
  }
  return {
    "announcer": [],
    "dimensions": dimensions,
    "assets": [],
    "id": "Poster Room",
    "objects": objects,
    "spawns": [{
      "y": 11,
      "x": 4
    }],
    "spaces": spaces, //...........
    "useDrawnBG": false,
    "portals": portals,
    "backgroundImagePath": background,
    "collisions": collisions
  }
}

const makePrivateSpace = (x1, y1, id) => {
  space = [];
  for (var x2 = x1; x2<(x1+13); x2++) {
    for (var y2 = y1; y2<(y1+13); y2++) {
      space.push({
            "colored": false,
            "y": y2,
            "x": x2,
            "spaceId": "" + id
          });
    }
  }
  return space;
}
exports.defineMap = defineMap;
