import rainyImg from './assets/rainy-bg.jpg'
import summerImg from './assets/summer-bg.jpg'
import winterImg from './assets/winter-bg.jpg'
import './index.scss'

const pageMain = {
    icon: {
        'icon-cloud-rain': document.querySelector('.icon_cloud-rain'),
        'icon-cloud-snow': document.querySelector('.icon_cloud-snow'),
        'icon-sun': document.querySelector('.icon_sun'),
    },
    btn: {
        'btn-cloud-rain': document.querySelector('.btn_cloud_rain'),
        'btn-cloud-snow': document.querySelector('.btn-cloud_snow'),
        'btn-sun': document.querySelector('.btn_sun'),
    },
    bg: document.querySelector('.bg-img'),
}

const weather = {
    summer: {
        bg:  summerImg,
    },
    rain: {
        bg: rainyImg,
    },
    winter: {
        bg: winterImg,
    }
}

const changeWeather = (clickedWeather) => {
    pageMain.bg.src = weather[clickedWeather].bg
}

pageMain.bg.src = summerImg

Object.keys(pageMain.btn).forEach(key => {
    pageMain.btn[key].addEventListener('click', () => {
        switch (key) {
            case 'btn-cloud-rain':
                changeWeather('summer')
                break
            case 'btn-cloud-snow':
                changeWeather('rain')
                break
            case 'btn-sun':
                changeWeather('winter')
                break
            default:
                changeWeather('summer')
        }
    })
})
