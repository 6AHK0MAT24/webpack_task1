import summerImg from './assets/summer-bg.jpg'
import { weather } from "./CONSTANTS/weather-mock";
import './index.scss'

const pageMain = {
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
}


const changeWeather = (clickedWeather) => {
    pageMain.bg.src = weather[clickedWeather].bg
}

Object.keys(weather).forEach(key => {
    pageMain.icon[key].src = weather[key].icon
})

pageMain.bg.src = summerImg

Object.keys(pageMain.btn).forEach(key => {
    pageMain.btn[key].addEventListener('click', () => {
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
