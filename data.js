<!DOCTYPE html>
<html lang="en">
<head>
  <title>Sts. Philip & James Catholic Church - Virtual Tour</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <style> @-ms-viewport { width: device-width; } </style>
  <link rel="stylesheet" href="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/vendor/reset.min.css">
  <link rel="stylesheet" href="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/style.css">
</head>
<body class="multiple-scenes view-control-buttons">

  <div id="pano"></div>

  <div id="sceneList">
    <ul class="scenes">
      <li><a href="javascript:void(0)" class="scene" data-id="0-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-2">360 View - Exterior 2</a></li>
      <li><a href="javascript:void(0)" class="scene" data-id="1-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-exterior-1">360 View - Exterior 1</a></li>
      <li><a href="javascript:void(0)" class="scene" data-id="2-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-1">360 View - Interior 1</a></li>
      <li><a href="javascript:void(0)" class="scene" data-id="3-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-2">360 View - Interior 2</a></li>
      <li><a href="javascript:void(0)" class="scene" data-id="4-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-3">360 View - Interior 3</a></li>
      <li><a href="javascript:void(0)" class="scene" data-id="5-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-4">360 View - Interior 4</a></li>
      <li><a href="javascript:void(0)" class="scene" data-id="6-360-view-of-sts-philip--james-catholic-church-meyersdale-pa-interior-5">360 View - Interior 5</a></li>
    </ul>
  </div>

  <div id="titleBar">
    <h1 class="sceneName"></h1>
  </div>

  <!-- Control Buttons -->
  <a href="javascript:void(0)" id="autorotateToggle">
    <img class="icon off" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/play.png">
    <img class="icon on" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/pause.png">
  </a>

  <a href="javascript:void(0)" id="fullscreenToggle">
    <img class="icon off" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/fullscreen.png">
    <img class="icon on" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/windowed.png">
  </a>

  <a href="javascript:void(0)" id="sceneListToggle">
    <img class="icon off" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/expand.png">
    <img class="icon on" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/collapse.png">
  </a>

  <!-- View Controls -->
  <a href="javascript:void(0)" id="viewUp" class="viewControlButton viewControlButton-1">
    <img class="icon" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/up.png">
  </a>
  <a href="javascript:void(0)" id="viewDown" class="viewControlButton viewControlButton-2">
    <img class="icon" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/down.png">
  </a>
  <a href="javascript:void(0)" id="viewLeft" class="viewControlButton viewControlButton-3">
    <img class="icon" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/left.png">
  </a>
  <a href="javascript:void(0)" id="viewRight" class="viewControlButton viewControlButton-4">
    <img class="icon" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/right.png">
  </a>
  <a href="javascript:void(0)" id="viewIn" class="viewControlButton viewControlButton-5">
    <img class="icon" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/plus.png">
  </a>
  <a href="javascript:void(0)" id="viewOut" class="viewControlButton viewControlButton-6">
    <img class="icon" src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/img/minus.png">
  </a>

  <!-- Scripts -->
  <script src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/vendor/screenfull.min.js"></script>
  <script src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/vendor/bowser.min.js"></script>
  <script src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/vendor/marzipano.js"></script>
  <script src="https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/data.js"></script>

  <script>
    // Example: ensure the correct base URL is used for tiles
    const BASE_URL = "https://vuongskysurferstorage1.github.io/Sts.-Philip-James-Catholic-Church-Meyersdale-PA/";

    // If your Marzipano initialization looks like this:
    // var source = Marzipano.ImageUrlSource.fromString("tiles/" + scene.id + "/{z}/{f}.jpg");
    // Change it to:
    // var source = Marzipano.ImageUrlSource.fromString(BASE_URL + "tiles/" + scene.id + "/{z}/{f}.jpg");
  </script>

</body>
</html>
