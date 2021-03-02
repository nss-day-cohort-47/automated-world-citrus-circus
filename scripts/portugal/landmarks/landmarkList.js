import { landmark } from "./landmark.js"
import { getLandmark } from "./landmarkData.js"

export const landmarkList = () => {
    const landmarks = getLandmark();
    const contentElement = document.querySelector(".landmark_card")
        let finishHTMLRepresentations = "";
        for (const portugalLandmark of landmarks) {
            finishHTMLRepresentations += landmark(portugalLandmark);
        }
        console.log("finishHTMLRepresentations", finishHTMLRepresentations)
        contentElement.innerHTML += finishHTMLRepresentations;
}