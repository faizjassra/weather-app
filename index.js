let City = document.querySelector("#city")
let temp = document.querySelector("#temp")
let weather = document.querySelector("#weather")
let icon = document.querySelector(".icon")

// let pressure = document.querySelector("#pres")
// let wind = document.querySelector("#wind")
let humid = document.querySelector("#humid")
let vis = document.querySelector("#vis")

let data = {}
let city = "haridwar"

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=dehradun&appid=238cc98aeb466451f9eae9d74f6e30dd`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log("error:" + err)
//     })

let url = "https://api.openweathermap.org/data/2.5"
async function doWork() {
    try {
        let response = await fetch(`${url}/weather?q=${city}&appid=238cc98aeb466451f9eae9d74f6e30dd`)
        let data = await response.json()
        console.log(data)

        show(data)

    } catch (error) {
        console.log(error)
    }

}
doWork()

function show(data) {
    let temp_kel = data.main.temp
    let temp_cel = temp_kel - 273.15
    console.log(temp_cel)
    temp.innerHTML = Math.floor(temp_cel) + "°"
    City.innerHTML = data.name
    weather.innerHTML = data.weather[0].main

    humid.innerHTML = "Humidity: " + data.main.humidity + " %";
    // wind.innerHTML = data.wind.speed + " km/h"
    vis.innerHTML = "Visibility: " + (data.visibility) / 1000 + " km"

    if (data.weather[0].main == 'Clear')
        icon.src = "./clearsky.png"
    if (data.weather[0].main == 'Rain')
        icon.src = "./rain.png"
    if (data.weather[0].main == 'Smoke')
        icon.src = "./mist.png"
    if (data.weather[0].main == 'Clouds')
        icon.src = "./fewClouds.png"
    if (data.weather[0].main == 'ShowerRain')
        icon.src = "./showerRain.png"
    // pressure.innerHTML = data.main.pressure + " mb"
}

