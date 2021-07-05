const collisionMaps = require('./collision-maps');
const config = require('../config');

const BACKGROUNDS = {
  x5: "https://cdn.gather.town/storage.googleapis.com/gather-town.appspot.com/uploads/34ceooZS6Bt012K7/mFEWO5IVkR9l66r4AZr6kg",
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
  objects.push({
    "offsetX": 0,
    "_name": "Chippendale Table (2x2)",
    "offsetY": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FaYFQBv4PqmqONSui?alt=media&token=98fb56a9-4262-486e-b8a9-819f5a1c0ee3",
    "type": 0,
    "properties": {},
    "id": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc_1954c9c4-846d-46a9-baf4-4d83f3c430ea",
    "scale": 1,
    "x": 31,
    "width": 4,
    "orientation": 0,
    "y": 8,
    "templateId": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc",
    "height": 3,
    "color": "#c4824e",
    "_tags": ["furniture", "furniture/table", "antique"],
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fd51oRuXRywklYiyg?alt=media&token=f77df4f4-e080-4170-a36f-40a2d836661e"
  }, {
    "scale": 1,
    "x": 23,
    "id": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc_6b7d84db-a157-4e9b-85ec-927593b6d6c8",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fd51oRuXRywklYiyg?alt=media&token=f77df4f4-e080-4170-a36f-40a2d836661e",
    "templateId": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc",
    "_tags": ["furniture", "furniture/table", "antique"],
    "type": 0,
    "height": 3,
    "offsetY": 0,
    "y": 8,
    "_name": "Chippendale Table (2x2)",
    "offsetX": 0,
    "width": 4,
    "color": "#c4824e",
    "orientation": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FaYFQBv4PqmqONSui?alt=media&token=98fb56a9-4262-486e-b8a9-819f5a1c0ee3",
    "properties": {}
  }, {
    "properties": {},
    "templateId": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FaYFQBv4PqmqONSui?alt=media&token=98fb56a9-4262-486e-b8a9-819f5a1c0ee3",
    "type": 0,
    "y": 14,
    "_name": "Chippendale Table (2x2)",
    "x": 23,
    "id": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc_0f04dfb7-b12e-447a-a796-e6de8aaaddb5",
    "width": 4,
    "scale": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fd51oRuXRywklYiyg?alt=media&token=f77df4f4-e080-4170-a36f-40a2d836661e",
    "_tags": ["furniture", "furniture/table", "antique"],
    "offsetX": 0,
    "orientation": 0,
    "height": 3,
    "color": "#c4824e",
    "offsetY": 0
  }, {
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FaYFQBv4PqmqONSui?alt=media&token=98fb56a9-4262-486e-b8a9-819f5a1c0ee3",
    "templateId": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2Fd51oRuXRywklYiyg?alt=media&token=f77df4f4-e080-4170-a36f-40a2d836661e",
    "color": "#c4824e",
    "_tags": ["furniture", "furniture/table", "antique"],
    "offsetX": 0,
    "properties": {},
    "_name": "Chippendale Table (2x2)",
    "x": 31,
    "scale": 1,
    "offsetY": 0,
    "type": 0,
    "id": "ChippendaleTable2x2 - 2O6ej-XboaPgqlwsMkpoc_3d05b5d1-ad32-4226-8b58-8f3d076d3bcb",
    "height": 3,
    "y": 14,
    "width": 4,
    "orientation": 0
  }, {
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_8386bdf8-9941-4b1e-b129-ed194a7aeaf6",
    "height": 1,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "width": 1,
    "scale": 1,
    "offsetX": 0,
    "x": 24,
    "type": 0,
    "offsetY": 0,
    "y": 13,
    "color": "#c4824e",
    "orientation": 0,
    "properties": {},
    "_name": "Chair (Small)",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e"
  }, {
    "color": "#c4824e",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "height": 1,
    "properties": {},
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "scale": 1,
    "orientation": 0,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_28fa5b8b-4a55-4939-a330-8f970bac034f",
    "y": 13,
    "offsetY": 0,
    "x": 32,
    "offsetX": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "type": 0,
    "width": 1,
    "_name": "Chair (Small)"
  }, {
    "orientation": 0,
    "type": 0,
    "color": "#c4824e",
    "x": 24,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_efb2dc8a-d16a-4e0f-9eab-e8607c16b81f",
    "offsetX": 0,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "properties": {},
    "width": 1,
    "y": 7,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "_name": "Chair (Small)",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "scale": 1,
    "offsetY": 0,
    "height": 1
  }, {
    "height": 1,
    "y": 7,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_ffd3253f-5a64-47a5-af68-9eafc9a56ccd",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "offsetY": 0,
    "properties": {},
    "orientation": 0,
    "type": 0,
    "scale": 1,
    "x": 32,
    "offsetX": 0,
    "width": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "color": "#c4824e",
    "_name": "Chair (Small)"
  }, {
    "_name": "Chair (Small)",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "width": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_29bd93f7-e100-458d-96a1-f386c6e23175",
    "type": 0,
    "orientation": 0,
    "x": 33,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "color": "#c4824e",
    "height": 1,
    "y": 7,
    "properties": {},
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "scale": 1,
    "offsetY": 0,
    "offsetX": 0,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"]
  }, {
    "scale": 1,
    "y": 13,
    "offsetX": 0,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "width": 1,
    "color": "#c4824e",
    "orientation": 0,
    "offsetY": 0,
    "height": 1,
    "x": 25,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_7397c9b2-f587-42c7-ace6-765b46dc267b",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "type": 0,
    "_name": "Chair (Small)",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "properties": {},
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9"
  }, {
    "y": 13,
    "scale": 1,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "x": 33,
    "offsetY": 0,
    "offsetX": 0,
    "properties": {},
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "type": 0,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_a50e027e-b8a8-4f69-875f-797f51b31f13",
    "width": 1,
    "height": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "color": "#c4824e",
    "_name": "Chair (Small)",
    "orientation": 0
  }, {
    "height": 1,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "offsetX": 0,
    "y": 8,
    "properties": {},
    "x": 34,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "orientation": 3,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "color": "#c4824e",
    "width": 1,
    "scale": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_c78a55a3-80b2-4776-8537-802e7e7eb12c",
    "offsetY": 0,
    "_name": "Chair (Small)",
    "type": 0,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c"
  }, {
    "properties": {},
    "y": 9,
    "x": 34,
    "color": "#c4824e",
    "orientation": 3,
    "_name": "Chair (Small)",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "scale": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "type": 0,
    "width": 1,
    "height": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c",
    "offsetY": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "offsetX": 0,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_c3b08f19-0b85-41bd-9f4c-4e76d2158716"
  }, {
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "offsetY": 0,
    "properties": {},
    "color": "#c4824e",
    "_name": "Chair (Small)",
    "width": 1,
    "y": 14,
    "height": 1,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "type": 0,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c",
    "x": 34,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "scale": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_0417c0af-9ea8-4ac8-8002-ffc7a28ca102",
    "offsetX": 0,
    "orientation": 3
  }, {
    "_name": "Chair (Small)",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c",
    "offsetX": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "color": "#c4824e",
    "y": 15,
    "properties": {},
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_b20bcdc7-3c55-4fe3-8a4c-5f5b09e65845",
    "x": 34,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "scale": 1,
    "orientation": 3,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "type": 0,
    "width": 1,
    "height": 1,
    "offsetY": 0
  }, {
    "y": 14,
    "_name": "Chair (Small)",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "properties": {},
    "x": 26,
    "offsetX": 0,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "color": "#c4824e",
    "offsetY": 0,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "scale": 1,
    "height": 1,
    "orientation": 3,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_990906dd-382a-4552-8c39-debbf18cce3e",
    "type": 0,
    "width": 1
  }, {
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c",
    "y": 15,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_175c77fa-9399-4103-ac28-ee2ccd702860",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "_name": "Chair (Small)",
    "height": 1,
    "properties": {},
    "width": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "offsetX": 0,
    "type": 0,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "x": 26,
    "scale": 1,
    "offsetY": 0,
    "color": "#c4824e",
    "orientation": 3
  }, {
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "_name": "Chair (Small)",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_4e0e8153-e360-4e89-9704-6780f6973efa",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "scale": 1,
    "type": 0,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "properties": {},
    "height": 1,
    "x": 26,
    "y": 9,
    "color": "#c4824e",
    "orientation": 3,
    "width": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c"
  }, {
    "color": "#c4824e",
    "y": 8,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FxejoRfR1Lgjlf6Ql?alt=media&token=469d8187-c6fa-4b1b-89c7-30fc43642487",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "type": 0,
    "height": 1,
    "_name": "Chair (Small)",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_c1aa2d2f-613a-4e02-a8a4-25acef6aa865",
    "scale": 1,
    "properties": {},
    "orientation": 3,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FualiNCC2OpzflDMe?alt=media&token=92f53329-7eff-48ba-b319-01327a7f372c",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "x": 26,
    "width": 1
  }, {
    "width": 1,
    "height": 1,
    "_name": "Chair (Small)",
    "type": 0,
    "properties": {},
    "x": 32,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "offsetX": 0,
    "offsetY": 0,
    "color": "#c4824e",
    "scale": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_992f85f9-02d9-4b43-af4e-8bdc7f1e2bad",
    "y": 16,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "orientation": 2,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e"
  }, {
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "type": 0,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "x": 33,
    "_name": "Chair (Small)",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "orientation": 2,
    "width": 1,
    "y": 16,
    "color": "#c4824e",
    "scale": 1,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_6a568542-ec9b-4cd7-ad38-1fe4a1dec002",
    "offsetY": 0,
    "height": 1,
    "properties": {},
    "offsetX": 0
  }, {
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "properties": {},
    "width": 1,
    "scale": 1,
    "_name": "Chair (Small)",
    "height": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_ed34fd75-4ea4-41ff-a175-26f7e6afa59e",
    "y": 16,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "offsetX": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "color": "#c4824e",
    "type": 0,
    "orientation": 2,
    "offsetY": 0,
    "x": 24
  }, {
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "properties": {},
    "y": 16,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "offsetY": 0,
    "width": 1,
    "type": 0,
    "offsetX": 0,
    "orientation": 2,
    "height": 1,
    "color": "#c4824e",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "scale": 1,
    "x": 25,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_daf16695-4306-436b-9e23-4117d503f88c",
    "_name": "Chair (Small)"
  }, {
    "properties": {},
    "orientation": 2,
    "offsetX": 0,
    "width": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "scale": 1,
    "_name": "Chair (Small)",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "color": "#c4824e",
    "offsetY": 0,
    "type": 0,
    "x": 32,
    "y": 10,
    "height": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_581e3d7e-8829-47f4-aad0-883664adc7a2"
  }, {
    "_name": "Chair (Small)",
    "x": 33,
    "orientation": 2,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "scale": 1,
    "height": 1,
    "type": 0,
    "color": "#c4824e",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "offsetX": 0,
    "properties": {},
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_1bba24e7-1330-453a-8de8-30fbb3fd15c6",
    "y": 10,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "offsetY": 0,
    "width": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei"
  }, {
    "height": 1,
    "y": 10,
    "properties": {},
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "type": 0,
    "orientation": 2,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "width": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_b76851e1-4204-42fc-869c-4db5e51df226",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "color": "#c4824e",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "scale": 1,
    "x": 25,
    "_name": "Chair (Small)"
  }, {
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_3865a9a0-a50b-4a4e-bdce-4b734d17ce40",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FOHFMZgKwJ6vszEup?alt=media&token=91da7120-6a60-4bba-aeff-fe6209de7b3e",
    "x": 24,
    "height": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "width": 1,
    "color": "#c4824e",
    "scale": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FVTfyNVZ9MFWAklKE?alt=media&token=f2708245-40f5-4391-b50c-4ee5c9dcece5",
    "type": 0,
    "orientation": 2,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "properties": {},
    "y": 10,
    "_name": "Chair (Small)"
  }, {
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "x": 23,
    "_name": "Chair (Small)",
    "y": 15,
    "color": "#c4824e",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "type": 0,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "offsetX": 0,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_c77037e4-0919-4b6a-b757-10a699f2df2b",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "height": 1,
    "scale": 1,
    "properties": {},
    "orientation": 1,
    "offsetY": 0,
    "width": 1
  }, {
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "_name": "Chair (Small)",
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_366085b4-4e89-489b-863e-7f8b5c1d3e1c",
    "y": 9,
    "properties": {},
    "height": 1,
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "orientation": 1,
    "scale": 1,
    "width": 1,
    "type": 0,
    "color": "#c4824e",
    "x": 23
  }, {
    "type": 0,
    "color": "#c4824e",
    "scale": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "offsetY": 0,
    "properties": {},
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_4d781f36-eea1-4035-9b2a-92ee4fa7ea00",
    "orientation": 1,
    "width": 1,
    "offsetX": 0,
    "x": 31,
    "_name": "Chair (Small)",
    "y": 9,
    "height": 1,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187"
  }, {
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_89b24726-1984-40e5-9c9f-a44524e33bfb",
    "height": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "type": 0,
    "y": 8,
    "x": 23,
    "_name": "Chair (Small)",
    "properties": {},
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "color": "#c4824e",
    "scale": 1,
    "orientation": 1,
    "width": 1,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce"
  }, {
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "width": 1,
    "_name": "Chair (Small)",
    "x": 23,
    "type": 0,
    "offsetY": 0,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_5b93e16e-c9b8-460f-b475-4605ecf974d6",
    "scale": 1,
    "offsetX": 0,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "height": 1,
    "color": "#c4824e",
    "orientation": 1,
    "properties": {},
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "y": 14
  }, {
    "color": "#c4824e",
    "orientation": 1,
    "_name": "Chair (Small)",
    "offsetY": 0,
    "width": 1,
    "y": 8,
    "offsetX": 0,
    "properties": {},
    "scale": 1,
    "x": 31,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "height": 1,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_48f1a72a-2b7c-4d8b-8859-3decd3813a2f",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "type": 0
  }, {
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "offsetY": 0,
    "height": 1,
    "_name": "Chair (Small)",
    "properties": {},
    "x": 31,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "scale": 1,
    "orientation": 1,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "y": 15,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_07fc157d-7f4c-45f1-bb85-447311efffe9",
    "type": 0,
    "offsetX": 0,
    "width": 1,
    "color": "#c4824e"
  }, {
    "properties": {},
    "y": 14,
    "width": 1,
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "height": 1,
    "orientation": 1,
    "color": "#c4824e",
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FBNLdil2rv8EBM1kz?alt=media&token=9e099127-db58-4869-8fd4-7153554253ce",
    "offsetY": 0,
    "offsetX": 0,
    "scale": 1,
    "type": 0,
    "_name": "Chair (Small)",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FrVTVqDHluskCCA0X?alt=media&token=f29507c6-5da4-45a9-93ce-211d36f8a187",
    "x": 31,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_7bfdaa68-a2e8-445a-9e45-8864a5b0b6ec"
  }, {
    "color": "#cbdbfc",
    "orientation": 0,
    "height": 2,
    "scale": 1,
    "properties": {},
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FzSy3LbfBV0TKQkY9?alt=media&token=635bbc96-0519-4dae-a800-c8cf4d3d0434",
    "width": 2,
    "_name": "Fountain (Small)",
    "templateId": "FountainSmall - h6oR3eU2pIIbCdRGInGux",
    "id": "FountainSmall - h6oR3eU2pIIbCdRGInGux_2776cbe9-5f3d-466f-ad90-9358a008a91b",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FAGgB3qrak8IaqG8O?alt=media&token=ba2231fe-71d1-4934-83d8-b1df9b26b694",
    "type": 0,
    "x": 28,
    "_tags": ["outdoor", "decoration"],
    "y": 10
  }, {
    "color": "#df7126",
    "width": 1,
    "height": 2,
    "_name": "Potted Plant (Spikey)",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FfGsyMUMk4B8fyMhc?alt=media&token=48527786-a612-45cf-a97c-7f6332204680",
    "orientation": 0,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FGb1j09WoypxoA4UP?alt=media&token=107ec86e-6d96-41cb-98c2-721fbde0fbd3",
    "properties": {},
    "x": 27,
    "type": 0,
    "y": 11,
    "id": "Potted Plant (Spikey) - Txt3yDFD8NtkI-JZbdWM_0ce8bdc6-3508-4e57-9be7-3f4f9adb230b",
    "scale": 1,
    "templateId": "Potted Plant (Spikey) - Txt3yDFD8NtkI-J_ZbdWM"
  }, {
    "y": 11,
    "id": "Potted Plant (Spikey) - Txt3yDFD8NtkI-JZbdWM_0936ca31-a425-4588-9ed6-441ecc902bc4",
    "type": 0,
    "x": 30,
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FGb1j09WoypxoA4UP?alt=media&token=107ec86e-6d96-41cb-98c2-721fbde0fbd3",
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FfGsyMUMk4B8fyMhc?alt=media&token=48527786-a612-45cf-a97c-7f6332204680",
    "color": "#df7126",
    "templateId": "Potted Plant (Spikey) - Txt3yDFD8NtkI-J_ZbdWM",
    "scale": 1,
    "width": 1,
    "height": 2,
    "orientation": 0,
    "properties": {},
    "_name": "Potted Plant (Spikey)"
  }, {
    "height": 1,
    "scale": 1,
    "y": 7,
    "_name": "Chair (Small)",
    "templateId": "Chair (Small) - JCnSdxNsBW4_aBViiH1Ei",
    "properties": {},
    "normal": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FesQjHrhD4UAZx2tC?alt=media&token=6190190f-8618-450a-8bcb-72b498594f7e",
    "orientation": 0,
    "_tags": ["office", "education", "conference", "outdoor", "furniture", "furniture/seating", "furniture/seating/chair"],
    "highlighted": "https://cdn.gather.town/v0/b/gather-town.appspot.com/o/internal-dashboard-upload%2FDDeR3PcZpi7tWdi9?alt=media&token=be727348-8987-4bf5-9126-95cec45f66d9",
    "type": 0,
    "x": 25,
    "color": "#c4824e",
    "width": 1,
    "id": "Chair (Small) - JCnSdxNsBW4aBViiH1Ei_1b213d20-2dbd-43d0-a4ae-31b3b13eec33"
  })
  //TEMPERARY
  size = 6;
  let spaces = [{
    "colored": false,
    "x": 23,
    "y": 7,
    "spaceId": "A"
  }, {
    "y": 8,
    "spaceId": "A",
    "x": 23,
    "colored": false
  }, {
    "x": 23,
    "colored": false,
    "y": 9,
    "spaceId": "A"
  }, {
    "colored": false,
    "spaceId": "A",
    "y": 10,
    "x": 23
  }, {
    "colored": false,
    "spaceId": "A",
    "y": 10,
    "x": 24
  }, {
    "y": 10,
    "colored": false,
    "spaceId": "A",
    "x": 25
  }, {
    "spaceId": "A",
    "y": 10,
    "x": 26,
    "colored": false
  }, {
    "x": 26,
    "spaceId": "A",
    "y": 9,
    "colored": false
  }, {
    "colored": false,
    "x": 26,
    "spaceId": "A",
    "y": 8
  }, {
    "colored": false,
    "y": 7,
    "spaceId": "A",
    "x": 26
  }, {
    "y": 7,
    "x": 25,
    "colored": false,
    "spaceId": "A"
  }, {
    "colored": false,
    "x": 24,
    "y": 7,
    "spaceId": "A"
  }, {
    "y": 8,
    "x": 24,
    "spaceId": "A",
    "colored": false
  }, {
    "spaceId": "A",
    "x": 24,
    "colored": false,
    "y": 9
  }, {
    "spaceId": "A",
    "colored": false,
    "y": 9,
    "x": 25
  }, {
    "colored": false,
    "spaceId": "A",
    "y": 8,
    "x": 25
  }, {
    "colored": false,
    "y": 6,
    "spaceId": "A",
    "x": 24
  }, {
    "colored": false,
    "y": 6,
    "spaceId": "A",
    "x": 25
  }, {
    "spaceId": "A",
    "y": 6,
    "x": 23,
    "colored": false
  }, {
    "colored": false,
    "spaceId": "A",
    "y": 6,
    "x": 26
  }, {
    "colored": false,
    "y": 7,
    "x": 27,
    "spaceId": "A"
  }, {
    "colored": false,
    "x": 27,
    "y": 8,
    "spaceId": "A"
  }, {
    "colored": false,
    "y": 9,
    "x": 27,
    "spaceId": "A"
  }, {
    "x": 27,
    "spaceId": "A",
    "y": 10,
    "colored": false
  }, {
    "y": 11,
    "colored": false,
    "x": 26,
    "spaceId": "A"
  }, {
    "colored": false,
    "y": 11,
    "x": 25,
    "spaceId": "A"
  }, {
    "colored": false,
    "y": 11,
    "spaceId": "A",
    "x": 24
  }, {
    "y": 11,
    "x": 23,
    "spaceId": "A",
    "colored": false
  }, {
    "y": 10,
    "x": 22,
    "spaceId": "A",
    "colored": false
  }, {
    "colored": false,
    "spaceId": "A",
    "y": 9,
    "x": 22
  }, {
    "spaceId": "A",
    "x": 22,
    "colored": false,
    "y": 8
  }, {
    "y": 7,
    "x": 22,
    "spaceId": "A",
    "colored": false
  }, {
    "colored": false,
    "y": 10,
    "spaceId": "B",
    "x": 31
  }, {
    "y": 10,
    "x": 32,
    "spaceId": "B",
    "colored": false
  }, {
    "colored": false,
    "y": 10,
    "spaceId": "B",
    "x": 33
  }, {
    "colored": false,
    "y": 10,
    "x": 34,
    "spaceId": "B"
  }, {
    "x": 34,
    "colored": false,
    "spaceId": "B",
    "y": 9
  }, {
    "colored": false,
    "y": 8,
    "spaceId": "B",
    "x": 34
  }, {
    "spaceId": "B",
    "colored": false,
    "y": 7,
    "x": 34
  }, {
    "x": 33,
    "colored": false,
    "y": 7,
    "spaceId": "B"
  }, {
    "colored": false,
    "y": 7,
    "spaceId": "B",
    "x": 32
  }, {
    "spaceId": "B",
    "colored": false,
    "y": 7,
    "x": 31
  }, {
    "colored": false,
    "y": 8,
    "spaceId": "B",
    "x": 31
  }, {
    "x": 31,
    "spaceId": "B",
    "y": 9,
    "colored": false
  }, {
    "x": 32,
    "spaceId": "B",
    "y": 9,
    "colored": false
  }, {
    "x": 33,
    "colored": false,
    "y": 9,
    "spaceId": "B"
  }, {
    "x": 33,
    "spaceId": "B",
    "y": 8,
    "colored": false
  }, {
    "colored": false,
    "y": 7,
    "x": 30,
    "spaceId": "B"
  }, {
    "x": 30,
    "y": 8,
    "colored": false,
    "spaceId": "B"
  }, {
    "spaceId": "B",
    "x": 30,
    "colored": false,
    "y": 9
  }, {
    "x": 30,
    "spaceId": "B",
    "y": 10,
    "colored": false
  }, {
    "y": 11,
    "x": 31,
    "colored": false,
    "spaceId": "B"
  }, {
    "x": 32,
    "spaceId": "B",
    "colored": false,
    "y": 11
  }, {
    "x": 33,
    "spaceId": "B",
    "colored": false,
    "y": 11
  }, {
    "colored": false,
    "y": 11,
    "x": 34,
    "spaceId": "B"
  }, {
    "y": 10,
    "x": 35,
    "spaceId": "B",
    "colored": false
  }, {
    "y": 9,
    "x": 35,
    "spaceId": "B",
    "colored": false
  }, {
    "y": 8,
    "x": 35,
    "spaceId": "B",
    "colored": false
  }, {
    "x": 35,
    "spaceId": "B",
    "colored": false,
    "y": 7
  }, {
    "y": 6,
    "x": 31,
    "spaceId": "B",
    "colored": false
  }, {
    "y": 6,
    "x": 32,
    "colored": false,
    "spaceId": "B"
  }, {
    "x": 33,
    "colored": false,
    "y": 6,
    "spaceId": "B"
  }, {
    "y": 6,
    "spaceId": "B",
    "colored": false,
    "x": 34
  }, {
    "spaceId": "B",
    "x": 32,
    "colored": false,
    "y": 8
  }, {
    "spaceId": "C",
    "y": 12,
    "x": 23,
    "colored": false
  }, {
    "colored": false,
    "y": 12,
    "x": 24,
    "spaceId": "C"
  }, {
    "x": 25,
    "spaceId": "C",
    "colored": false,
    "y": 12
  }, {
    "colored": false,
    "y": 12,
    "spaceId": "C",
    "x": 26
  }, {
    "spaceId": "C",
    "colored": false,
    "x": 25,
    "y": 13
  }, {
    "y": 13,
    "spaceId": "C",
    "colored": false,
    "x": 24
  }, {
    "y": 13,
    "x": 22,
    "spaceId": "C",
    "colored": false
  }, {
    "colored": false,
    "y": 13,
    "spaceId": "C",
    "x": 27
  }, {
    "colored": false,
    "spaceId": "C",
    "y": 13,
    "x": 23
  }, {
    "colored": false,
    "spaceId": "C",
    "y": 14,
    "x": 23
  }, {
    "y": 15,
    "spaceId": "C",
    "x": 23,
    "colored": false
  }, {
    "x": 23,
    "spaceId": "C",
    "colored": false,
    "y": 16
  }, {
    "y": 16,
    "spaceId": "C",
    "colored": false,
    "x": 24
  }, {
    "colored": false,
    "x": 25,
    "spaceId": "C",
    "y": 16
  }, {
    "spaceId": "C",
    "x": 26,
    "colored": false,
    "y": 16
  }, {
    "x": 26,
    "y": 13,
    "spaceId": "C",
    "colored": false
  }, {
    "y": 15,
    "spaceId": "C",
    "colored": false,
    "x": 24
  }, {
    "x": 24,
    "y": 14,
    "spaceId": "C",
    "colored": false
  }, {
    "y": 14,
    "colored": false,
    "spaceId": "C",
    "x": 25
  }, {
    "x": 26,
    "colored": false,
    "y": 14,
    "spaceId": "C"
  }, {
    "y": 15,
    "x": 26,
    "spaceId": "C",
    "colored": false
  }, {
    "x": 25,
    "spaceId": "C",
    "y": 15,
    "colored": false
  }, {
    "colored": false,
    "y": 14,
    "spaceId": "C",
    "x": 22
  }, {
    "colored": false,
    "x": 22,
    "y": 15,
    "spaceId": "C"
  }, {
    "spaceId": "C",
    "x": 22,
    "colored": false,
    "y": 16
  }, {
    "colored": false,
    "spaceId": "C",
    "y": 17,
    "x": 23
  }, {
    "colored": false,
    "x": 24,
    "spaceId": "C",
    "y": 17
  }, {
    "y": 17,
    "spaceId": "C",
    "colored": false,
    "x": 25
  }, {
    "y": 17,
    "colored": false,
    "x": 26,
    "spaceId": "C"
  }, {
    "colored": false,
    "y": 16,
    "spaceId": "C",
    "x": 27
  }, {
    "y": 15,
    "colored": false,
    "x": 27,
    "spaceId": "C"
  }, {
    "colored": false,
    "y": 14,
    "x": 27,
    "spaceId": "C"
  }, {
    "spaceId": "D",
    "y": 13,
    "colored": false,
    "x": 30
  }, {
    "x": 30,
    "spaceId": "D",
    "y": 14,
    "colored": false
  }, {
    "spaceId": "D",
    "colored": false,
    "y": 15,
    "x": 30
  }, {
    "x": 31,
    "spaceId": "D",
    "y": 13,
    "colored": false
  }, {
    "y": 14,
    "colored": false,
    "x": 31,
    "spaceId": "D"
  }, {
    "y": 16,
    "spaceId": "D",
    "colored": false,
    "x": 30
  }, {
    "x": 32,
    "spaceId": "D",
    "colored": false,
    "y": 13
  }, {
    "spaceId": "D",
    "y": 13,
    "x": 33,
    "colored": false
  }, {
    "y": 13,
    "x": 34,
    "colored": false,
    "spaceId": "D"
  }, {
    "spaceId": "D",
    "y": 14,
    "colored": false,
    "x": 34
  }, {
    "colored": false,
    "x": 34,
    "y": 15,
    "spaceId": "D"
  }, {
    "colored": false,
    "y": 16,
    "spaceId": "D",
    "x": 34
  }, {
    "spaceId": "D",
    "y": 16,
    "x": 33,
    "colored": false
  }, {
    "y": 16,
    "spaceId": "D",
    "colored": false,
    "x": 32
  }, {
    "x": 31,
    "colored": false,
    "y": 16,
    "spaceId": "D"
  }, {
    "y": 15,
    "x": 31,
    "colored": false,
    "spaceId": "D"
  }, {
    "y": 14,
    "colored": false,
    "x": 32,
    "spaceId": "D"
  }, {
    "colored": false,
    "x": 32,
    "y": 15,
    "spaceId": "D"
  }, {
    "x": 33,
    "colored": false,
    "y": 14,
    "spaceId": "D"
  }, {
    "colored": false,
    "spaceId": "D",
    "y": 15,
    "x": 33
  }, {
    "colored": false,
    "y": 12,
    "spaceId": "D",
    "x": 31
  }, {
    "colored": false,
    "spaceId": "D",
    "x": 32,
    "y": 12
  }, {
    "colored": false,
    "spaceId": "D",
    "y": 12,
    "x": 33
  }, {
    "spaceId": "D",
    "x": 34,
    "colored": false,
    "y": 12
  }, {
    "colored": false,
    "x": 35,
    "spaceId": "D",
    "y": 13
  }, {
    "colored": false,
    "y": 14,
    "x": 35,
    "spaceId": "D"
  }, {
    "colored": false,
    "x": 35,
    "y": 15,
    "spaceId": "D"
  }, {
    "colored": false,
    "spaceId": "D",
    "x": 35,
    "y": 16
  }, {
    "y": 17,
    "colored": false,
    "spaceId": "D",
    "x": 34
  }, {
    "x": 33,
    "y": 17,
    "spaceId": "D",
    "colored": false
  }, {
    "colored": false,
    "x": 32,
    "spaceId": "D",
    "y": 17
  }, {
    "spaceId": "D",
    "colored": false,
    "x": 31,
    "y": 17
  }];
  let i = 0;
  //for (const coord of config.ORIENTATIONS[size/2 - 2]) {
  coords = [
    [5, 6],
    [39, 6],
    [5, 23],
    [39, 23],
  ];
  for (const coord of coords) {
    spaces = spaces.concat(makePrivateSpace(coord[0], coord[1], i++));
  }
  var background;
  if (size <= 4) {
    background = BACKGROUNDS.x4;
    if (portals[0].targetMap) {
      objects.push(
        leftDoor([0, 18]),
        textObj(signs[0], [2, 20]),
        leftArrow([1, 20]),
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
    background = BACKGROUNDS.x5;
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
