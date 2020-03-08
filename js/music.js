var li = document.getElementsByTagName("li");
function play() {
  var music = new Audio("music/sanctus.mp3");
  music.play();
}
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", play);
}
