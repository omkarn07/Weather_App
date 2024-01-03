let apiKey="4285c0305e54d23e63db08fe26765b7f";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity=document.getElementById("userText");
let temperature=document.getElementById("temp");
let ct=document.getElementById("city");
let humidity= document.getElementById("humidity-info");
let windInfo=document.getElementById("wind-info");

async function getWeatherData(){
    city=userCity.value;
    console.log(city);
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    let data=await response.json();
    console.log(data);
    ct.innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp - 273.15)+"°C";
    humidity.innerHTML=data.main.humidity + "%";
    windInfo.innerHTML=data.wind.speed+"km/h";
}