import summerImg from "../assets/summer-bg.jpg";
import winterImg from "../assets/winter-bg.jpg";
import rainyImg from "../assets/rainy-bg.jpg";
import summerIco from "../assets/icons/sun.svg";
import rainyIco from "../assets/icons/cloud-rain.svg";
import winterIco from "../assets/icons/cloud-snow.svg";

export const weather = {
    summer: {
        bg: summerImg,
        icon: summerIco,
        id: 1
    },
    rain: {
        bg: rainyImg,
        icon: rainyIco,
        id: 2
    },
    winter: {
        bg: winterImg,
        icon: winterIco,
        id: 3
    }
}
