function putIntoShowZone(data) {

  for (var i = 0; i < data.length; i++) {
    $("#showZone").append("<div class='well'><p>景點ID：   " + data[i]["景點ID"] + "</p>"
    + "<p>狀態：   " + data[i]["狀態"] + "</p>"
    + "<p>名稱：   " + data[i]["名稱"] + "</p>"
    + "<p>簡述：   " + data[i]["簡述"] + "</p>"
    + "<p>鄉鎮市區：   " + data[i]["鄉鎮市區"] + "</p>"
    + "<p>所在地址：   " + data[i]["地址"] + "</p>"
    + "<p>東經座標：   " + data[i]["東經"] + "</p>"
    + "<p>北緯座標：   " + data[i]["北緯"] + "</p>"
    + "<p>連絡電話：   " + data[i]["電話"] + "</p>"
    + "<p>大眾運輸：   " + data[i]["大眾運輸"] + "</p>"
    + "<p>門票資訊：   " + data[i]["門票資訊"] + "</p>"
    + "<p>行車資訊：   " + data[i]["行車資訊"] + "</p>"
    + "<p>停車資訊：   " + data[i]["停車資訊"] + "</p>"
    + "<p>旅遊叮嚀：   " + data[i]["旅遊叮嚀"] + "</p></div>");
  }

}

function showMid() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/中區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showNorth() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/北區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showNorthTun() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/北屯區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showSouth() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/南區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showSouthTun() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/南屯區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showEast() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/東區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showWest() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/西區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

//以下開始為市區外

function showHoly() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/后里區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showPeace() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/和平區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showWaiPu() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/外埔區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showDaJa() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/大甲區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      //將showzone裡面的清空
      putIntoShowZone(data);
    }
  });

}

function showDaAn() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/大安區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }

  });

}

function showDaDu() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/大肚區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showDaRi() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/大里區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showDaYa() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/大雅區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showTaiPing() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/太平區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showShinSa() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/新社區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showDonSi() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/東勢區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showWuChi() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/梧棲區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showShaRu() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/沙鹿區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showChinSui() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/清水區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showTanJi() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/潭子區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showWuRRRRyyyyyyyy() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/烏日區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showSiGun() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/石岡區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showShenGun() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/神岡區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showFunYuan() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/豐原區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showWuFun() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/霧峰區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}

function showRonJin() {

  $.ajax({
    url: 'http://www1.pu.edu.tw/~s1051638/class%206/龍井區.json',
    type: 'GET',
    dataType: "json",
    contentType: "String",
    success: function(data) {
      $("#showZone").html("");
      putIntoShowZone(data);
    }
  });

}
