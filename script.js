


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd31a0a9f5emsh59caa7424a712ffp173ba3jsn88d8381a12ce',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getweather=(city)=>{
     cityname.innerHTML=city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
  .then((response)=>{
   return  response.json()
  }).then((response)=>{
      Cloud_pct.innerHTML=response.cloud_pct
      Temp.innerHTML=response.temp
      Feels_like.innerHTML=response.feels_like
      Humidity.innerHTML=response.humidity
      Min_temp.innerHTML=response.min_temp
      Max_temp.innerHTML=response.max_temp
      Wind_speed.innerHTML =response.wind_speed 
      // Wind_degrees.innerHTML=res.Wind_degrees
      Sunrise.innerHTML=response.sunrise
      Sunset.innerHTML=response.sunset
    console.log(response);
    }).catch(function (error) {
    console.error(error);
  });
}

Submit.addEventListener("click", (e)=>{
  e.preventDefault();
  getweather(city.value);
})

getweather("Delhi");




