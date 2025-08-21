var APP_DATA = {
  "scenes": [
    {
      "id": "0-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-1",
      "name": "360 View Exterior 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 }
      ],
      "faceSize": 1500,
      "initialViewParameters": { "yaw": 0.0042, "pitch": -0.062, "fov": 1.413 },
      "linkHotspots": [
        { "yaw": -0.0042, "pitch": 0.390, "rotation": 0, "target": "2-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-1" },
        { "yaw": -0.0188, "pitch": 1.443, "rotation": 0, "target": "1-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-2",
      "name": "360 View Exterior 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 }
      ],
      "faceSize": 1500,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.571 },
      "linkHotspots": [
        { "yaw": -0.0039, "pitch": 0.044, "rotation": 0, "target": "2-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-1" },
        { "yaw": -0.0107, "pitch": -1.281, "rotation": 0, "target": "0-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-1",
      "name": "360 View Interior 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 }
      ],
      "faceSize": 1500,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.571 },
      "linkHotspots": [
        { "yaw": 3.141, "pitch": 0.218, "rotation": 0, "target": "1-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-2" },
        { "yaw": -3.137, "pitch": -0.764, "rotation": 0, "target": "0-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-1" },
        { "yaw": 0.0027, "pitch": 0.229, "rotation": 0, "target": "3-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-2" }
      ],
      "infoHotspots": []
    }
    // ...repeat same reduction for all other scenes
  ],
  "name": "Sts. Philip & James Catholic Church Meyersdale PA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
