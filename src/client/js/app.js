const weatherLocation = document.querySelector(".weather__location");
const weatherTitle = document.querySelector(".weather__title");

const paintTitle = (info) => {
  weatherLocation.innerText = `${info.name}@`;
  weatherTitle.innerText = `${info.main.temp}`;
};

const getWeather = async (lat, lon) => {
  const locationObj = {
    lat,
    lon,
  };
  const responsive = await fetch(`/api/weather/info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(locationObj),
  });
  const weatherInfo = await responsive.json();
  paintTitle(weatherInfo);
};

const getLocation = () => {
  const handleSuccess = (pos) => {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    getWeather(lat, lon);
  };
  const handleError = () => {
    weatherTitle.innerText = "location Error";
  };
  navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
};

function init() {
  if (navigator.geolocation) {
    getLocation();
  }
}

init();
