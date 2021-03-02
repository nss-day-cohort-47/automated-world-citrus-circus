import { city } from "./city.js"
import { getCity } from "./cityData.js"

export const cityList = () => {
    const cities = getCity();
    const contentElement = document.querySelector("#city_card")
        let finishHTMLRepresentations = "";
        for (const portugalCity of cities) {
            finishHTMLRepresentations += city(portugalCity);
        }
        contentElement.innerHTML += finishHTMLRepresentations;
}