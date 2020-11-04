function play() {
  var music = new Audio("music/sanctus.mp3");
  music.play();
}
nuigae365 = document.querySelector("#leftMenu>li:nth-child(1)");
article = document.querySelector("article");
nuigae365.addEventListener("click", () => {
    article.innerHTML = "Pray for Nuigae 365<br>1년 365일 ㄴㅇㄱ";
    article.style.fontSize = "5em";
});
support = document.querySelector("#leftMenu>li:nth-child(4)")
support.addEventListener("click", play);
thanks = document.querySelector("#rightMenu>li")
thanks.addEventListener("click", () => {
    alert("Thank You\nㄴㅇㄱ");
});
nuigaeArt = document.querySelector("#leftMenu>li:nth-child(3)");
nuigaeArt.addEventListener("click", () => {
    article.innerHTML = "어둠의 이론에게 문의<br>누메다메 ㄴㅇㄱ";
    article.style.fontSize = "5em";
});
logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    location.reload();
});
community = document.querySelector("#leftMenu>li:nth-child(2)")
community.addEventListener("click", () => {
    article.innerHTML = "<iframe src=`https://discord.gg/SuM3EyAJb6`></iframe>"
});
