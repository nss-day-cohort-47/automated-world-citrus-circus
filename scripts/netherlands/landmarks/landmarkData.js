const landmarkCollection = [
    {
        landmarkName: "Keukenhof",
        landmarkImage: "Keukenhof.jpg",
        landmarkLocation: "Lisse",
        openWithCovid: true
    },
    {
        landmarkName: "Rikjsmuseum",
        landmarkImage: "rikjsmuseum.jpg",
        landmarkLocation: "Amsterdam",
        openWithCovid: true
    },
    {
        landmarkName: "Windmills of Kinderijk",
        landmarkImage: "windmills.jpg",
        landmarkLocation: "Kinderijk",
        openWithCovid: true
    }
]


export const getLandmark = () => {
    return landmarkCollection;
  };