import { people } from "./people.js"
import { getPeople } from "./peopleData.js"

export const peopleList = () => {
    const person = getPeople();
    const contentElement = document.querySelector(".people_card")
        let finishHTMLRepresentations = "";
        for (const egyptPeople of person) {
            finishHTMLRepresentations += people(egyptPeople);
        }
        console.log("finishHTMLRepresentations", finishHTMLRepresentations)
        contentElement.innerHTML += finishHTMLRepresentations;
}
