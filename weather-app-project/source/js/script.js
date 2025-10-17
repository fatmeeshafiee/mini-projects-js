let citiesData = {
  tehran : {city : "tehran" , temp: 12 , weather : "Sunny" , humidity : 23 , windSpeed: 32 , windDirection: "to north" , logo: "image/sunny.png" , wallpaper: "image/tehran.jpg"},
  shiraz : {city : "shiraz" , temp: 25 , weather : "Storm" , humidity : 20 , windSpeed: 22 , windDirection: "to north" , logo: "image/storm.png" , wallpaper: "image/shiraz.jpg"},
  esfahan : {city : "esfahan" , temp: 15 , weather : "Sunny" , humidity : 23 , windSpeed: 32 , windDirection: "to north" , logo: "image/sunny.png" , wallpaper: "image/esfahan.jpg"},
  khorramabad : {city : "khorramabad" , temp: 8 , weather : "Snow" , humidity : 23 , windSpeed: 32 , windDirection: "to north" , logo: "image/snow.png" , wallpaper: "image/khorramabad.jpg"},
  yazd : {city : "yazd" , temp: 30 , weather : "Rainy" , humidity : 23 , windSpeed: 32 , windDirection: "to north" , logo: "image/rainy.png" , wallpaper: "image/yazd.jpg"},
}

let searchBar = document.querySelector(".search-bar");
let searchBtn = document.getElementById("search");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let msg = document.getElementById("msg");
let icon = document.getElementsByClassName("icon");
let description = document.getElementsByClassName("description");
let humidity = document.getElementsByClassName("humidity");
let wind = document.getElementsByClassName("wind");
let windDirection = document.getElementsByClassName("windDirection");
let enterCity = document.getElementById("enterCity");

searchBtn.addEventListener("click", start);
function start() {
  msg.style.display = "none";
  let searchValue = searchBar.value.toLowerCase().trim(); //  user input
  let cityData = citiesData[searchValue]; //  user city

  if (cityData) {
    city.innerHTML = `Weather in ${cityData.city}`;
    temp.textContent = `${cityData.temp}°C`;
    icon[0].setAttribute("src",cityData.logo)
    description[0].innerHTML = cityData.weather;
    humidity[0].innerHTML = `Humidity: ${cityData.humidity}%`;
    wind[0].innerHTML = `Wind Speed: ${cityData.windSpeed} km/h`;
    windDirection[0].innerHTML = `Wind Direction: ${cityData.windDirection}`;
    document.body.style.backgroundImage = `url(${cityData.wallpaper})`;
  } else {
    enterCity.innerHTML = "Enter your city correctly";
    enterCity.style.color = "red";
    enterCity.style.fontSize = "20px";
    enterCity.style.fontWeight = "bold";
    enterCity.style.textAlign = "center";
    city.style.display = "none";
    temp.style.display = "none";
    icon[0].style.display = "none";
    description[0].style.display = "none";
    humidity[0].style.display = "none";
    wind[0].style.display = "none";
    windDirection[0].style.display = "none";


  }
}


























































// let searchBar = document.querySelector(".search-bar");
// let searchBtn = document.getElementById("search");


// searchBtn.addEventListener("click" , function(){
//   let searchBarValue = searchBar.value;
//   let mainCityDatas = citiesData[searchBarValue];



//   if(mainCityDatas){
//     document.querySelector(".city").innerHTML = "weather in " + mainCityDatas.city;
//     document.querySelector(".temp").innerHTML = mainCityDatas.temp + "C";
//     document.querySelector(".description").innerHTML = mainCityDatas.weather;
//     document.querySelector(".icon").setAttribute("src" , mainCityDatas.logo);
//     document.querySelector(".humidity").innerHTML = "humidity is " + mainCityDatas.humidity;
//     document.querySelector(".wind").innerHTML = "wind speed is " + mainCityDatas.windSpeed + "km/h";
//     document.querySelector(".windDirection").innerHTML = "wind direction is " + mainCityDatas.windDirection;
//     document.body.style.backgroundImage = "url(" + mainCityDatas.wallpaper + ")";
//     document.getElementById("msg").style.display = "none";




//   }else{
//     document.getElementById("enterCity").innerHTML = "enter your city correctly";
//     document.getElementById("enterCity").style.color = "red";
//     document.getElementById("enterCity").style.fontSize = "25px";
//     document.getElementById("enterCity").style.fontWeight = "bold";
//     document.getElementById("enterCity").style.textAlign = "center";
//     document.getElementById("msg").style.display = "none";
//   }




// })

