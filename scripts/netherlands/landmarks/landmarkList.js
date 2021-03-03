import { landmark } from "./landmarks.js"
import { getLandmark } from "./landmarkData.js"

export const landmarkList = () => {
    const landmarks = getLandmark();
    const contentElement = document.querySelector("#landmark_card")
        let finishHTMLRepresentations = "";
        for (const netherlandsLandmark of landmarks) {
            finishHTMLRepresentations += landmark(netherlandsLandmark);
        }
        console.log("finishHTMLRepresentations", finishHTMLRepresentations)
        contentElement.innerHTML += finishHTMLRepresentations;
}
