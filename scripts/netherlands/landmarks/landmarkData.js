const landmarkCollection = [
    {
        landmarkName: "Keukenhof",
        landmarkImage: "Keukenhof.jpeg",
        landmarkLocation: "Lisse",
        openWithCovid: true
    },
    {
        landmarkName: "Rikjsmuseum",
        landmarkImage: "rikjsmuseum.jpeg",
        landmarkLocation: "Amsterdam",
        openWithCovid: true
    },
    {
        landmarkName: "Windmills of Kinderijk",
        landmarkImage: "Kinderdijk.jpeg",
        landmarkLocation: "Kinderijk",
        openWithCovid: true
    }
]


export const getLandmark = () => {
    return landmarkCollection;
  };