import summerImg from "@assets/summer-bg.jpg";
import { weather } from "@constants/weather-mock";
import pauseIco from "@assets/icons/pause.svg";
import './index.scss';

interface WeatherElements {
    icon: {
        rain: HTMLImageElement | null;
        winter: HTMLImageElement | null;
        summer: HTMLImageElement | null;
    };
    btn: {
        rain: HTMLButtonElement | null;
        winter: HTMLButtonElement | null;
        summer: HTMLButtonElement | null;
    };
    bg: HTMLImageElement | null;
    volumeControl: HTMLInputElement | null;
}

const mainPage: WeatherElements = {
    icon: {
        rain: document.querySelector('.icon_cloud-rain'),
        winter: document.querySelector('.icon_cloud-snow'),
        summer: document.querySelector('.icon_sun'),
    },
    btn: {
        rain: document.querySelector('.btn_cloud_rain'),
        winter: document.querySelector('.btn_cloud_snow'),
        summer: document.querySelector('.btn_sun'),
    },
    bg: document.querySelector('.bg-img'),
    volumeControl: document.querySelector('#volume-control')
};

const changeWeather = (clickedWeather: keyof typeof weather): void => {
    if (!mainPage.bg) return;

    mainPage.bg.src = weather[clickedWeather].bg;

    (Object.keys(weather) as Array<keyof typeof weather>).forEach(key => {
        if (clickedWeather !== key && !weather[key].audio.paused) {
            weather[key].audio.pause();
            if (mainPage.icon[key]) {
                mainPage.icon[key]!.src = weather[key].icon;
            }
        }
    });

    if (weather[clickedWeather].audio.paused) {
        weather[clickedWeather].audio.play();
        if (mainPage.icon[clickedWeather]) {
            mainPage.icon[clickedWeather]!.src = pauseIco;
        }
    } else {
        weather[clickedWeather].audio.pause();
        if (mainPage.icon[clickedWeather]) {
            mainPage.icon[clickedWeather]!.src = weather[clickedWeather].icon;
        }
    }
};

// Инициализация иконок
(Object.keys(weather) as Array<keyof typeof weather>).forEach(key => {
    if (mainPage.icon[key]) {
        mainPage.icon[key]!.src = weather[key].icon;
    }
});

// Обработчик громкости
mainPage.volumeControl?.addEventListener('input', () => {
    (Object.keys(weather) as Array<keyof typeof weather>).forEach(key => {
        weather[key].audio.volume = Number(mainPage.volumeControl?.value) || 0.5;
    });
});

// Установка фонового изображения по умолчанию
if (mainPage.bg) {
    mainPage.bg.src = summerImg;
}

// Назначение обработчиков кнопок
(Object.keys(mainPage.btn) as Array<keyof typeof mainPage.btn>).forEach(key => {
    const weatherKey = key as keyof typeof weather;
    mainPage.btn[weatherKey]?.addEventListener('click', () => {
        changeWeather(weatherKey);
    });
});