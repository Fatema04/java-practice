const API_KEY = '7e3471e844ef5ee78fbb016b40214a04'
const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
loadWeather('khulna')