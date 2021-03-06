import { people } from "./people.js"
import { getPeople } from "./peopleData.js"

export const peopleList = () => {
    const person = getPeople();
    const contentElement = document.querySelector("#people_card")
        let finishHTMLRepresentations = "";
        for (const australiaPeople of person) {
            finishHTMLRepresentations += people(australiaPeople);
        }
        console.log("finishHTMLRepresentations", finishHTMLRepresentations)
        contentElement.innerHTML += finishHTMLRepresentations;
}
