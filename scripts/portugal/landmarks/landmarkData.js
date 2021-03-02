const landmarkCollection = [
    {
        landmarkName: "Palace of Pena",
        landmarkImage: "Portugal-LandmarkPena.png",
        landmarkLocation: "Sintra",
        openWithCovid: true
    },
    {
        landmarkName: "Belem Tower",
        landmarkImage: "Portugal-LandmarkBelem.jpg",
        landmarkLocation: "Lisbon",
        openWithCovid: true
    },
    {
        landmarkName: "Jeronimos",
        landmarkImage: "Portugal-LandmarkJeronimos.jpg",
        landmarkLocation: "Lisbon",
        openWithCovid: false
    }
]

export const getLandmark = () => {
    return landmarkCollection
  };