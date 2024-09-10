import summerImg from "../assets/summer-bg.jpg";
import winterImg from "../assets/winter-bg.jpg";
import rainyImg from "../assets/rainy-bg.jpg";

import summerIco from "../assets/icons/sun.svg";
import rainyIco from "../assets/icons/cloud-rain.svg";
import winterIco from "../assets/icons/cloud-snow.svg";

import summerMp3 from "../assets/sounds/summer.mp3";
import rainMp3 from "../assets/sounds/rain.mp3";
import winterMp3 from "../assets/sounds/winter.mp3";

export const weather = {
    summer: {
        bg: summerImg,
        icon: summerIco,
        audio: new Audio(summerMp3),
        id: 1
    },
    rain: {
        bg: rainyImg,
        icon: rainyIco,
        audio: new Audio(rainMp3),
        id: 2
    },
    winter: {
        bg: winterImg,
        icon: winterIco,
        audio: new Audio(winterMp3),
        id: 3
    }
}
