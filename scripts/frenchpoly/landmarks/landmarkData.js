
const landmarkCollection = [
    {
        landmarkName: "Eiao Cliffs",
        landmarkLocation: "Marquesas Islands",
        openWithCovid: true,
        landmarkImage: "landmark1.jpg"
    },
    {
        landmarkName: "Octopus Grotto",
        landmarkLocation: "Leeward Islands",
        openWithCovid: true,
        landmarkImage: "landmark2.jpg",
    },
    {
        landmarkName: "Vaipo Falls",
        landmarkLocation: "Kings Valley",
        openWithCovid: true,
        landmarkImage: "landmark3.jpg",
    }
]

export const getLandmark = () => {
    return landmarkCollection;
  };


