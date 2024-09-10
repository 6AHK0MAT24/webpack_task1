import summerImg from './assets/summer-bg.jpg'
import { weather } from "./CONSTANTS/weather-mock";
import pauseIco from "./assets/icons/pause.svg";
import './index.scss'

const mainPage = {
    icon: {
        'rain': document.querySelector('.icon_cloud-rain'),
        'winter': document.querySelector('.icon_cloud-snow'),
        'summer': document.querySelector('.icon_sun'),
    },
    btn: {
        'rain': document.querySelector('.btn_cloud_rain'),
        'winter': document.querySelector('.btn_cloud_snow'),
        'summer': document.querySelector('.btn_sun'),
    },
    bg: document.querySelector('.bg-img'),
    volumeControl: document.querySelector('#volume-control')
}


const changeWeather = (clickedWeather) => {
    mainPage.bg.src = weather[clickedWeather].bg

    Object.keys(weather).forEach(key => {
        if (clickedWeather !== key && !weather[key].audio.paused) {
            weather[key].audio.pause()
            mainPage.icon[key].src	= weather[key].icon
        }
    })

    if (weather[clickedWeather].audio.paused) {
        weather[clickedWeather].audio.play()
        mainPage.icon[clickedWeather].src = pauseIco
    } else {
        weather[clickedWeather].audio.pause()
        mainPage.icon[clickedWeather].src = weather[clickedWeather].icon
    }
}

Object.keys(weather).forEach(key => {
    mainPage.icon[key].src = weather[key].icon
})

mainPage.volumeControl.addEventListener('input', () => {
    Object.keys(weather).forEach(key => {
        weather[key].audio.volume = mainPage.volumeControl.value
    })
})

mainPage.bg.src = summerImg

Object.keys(mainPage.btn).forEach(key => {
    mainPage.btn[key].addEventListener('click', () => {
        switch (key) {
            case 'summer':
                changeWeather('summer')
                break
            case 'rain':
                changeWeather('rain')
                break
            case 'winter':
                changeWeather('winter')
                break
            default:
                changeWeather('summer')
        }
    })
})
