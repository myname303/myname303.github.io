const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const city = document.getElementById('city');
const API_KEY = "c56fbc48d7a588e532722f8d00ff1c63";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // 날씨 아이콘
            const imageUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherIcon.src = imageUrl;

            // 온도
            temperature.innerText = `${data.main.temp}°C`;

            // 도시
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
