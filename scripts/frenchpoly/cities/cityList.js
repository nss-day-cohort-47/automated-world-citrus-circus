import { city } from "./city.js"
import { getCity } from "./cityData.js"

export const cityList = () => {
    const cities = getCity();
    const contentElement = document.querySelector(".city_card")
        let finishHTMLRepresentations = "";
        for (const frenchCity of cities) {
            finishHTMLRepresentations += city(frenchCity);
        }
        contentElement.innerHTML += finishHTMLRepresentations;
}