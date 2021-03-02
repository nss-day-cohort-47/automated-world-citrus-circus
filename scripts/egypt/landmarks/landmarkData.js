const landmarkCollection = [
    {
        landmarkName: "The Pyramids of Giza",
        landmarkImage: "Egypt-LandmarkPyramid.jpg",
        landmarkLocation: "Giza Necropolis, Cairo",
        openWithCovid: true
    },
    {
        landmarkName: "The Temple of Karnak",
        landmarkImage: "Egypt-LandmarkKarnak.jpg",
        landmarkLocation: "Luxor",
        openWithCovid: true
    },
    {
        landmarkName: "The Red Sea Reef",
        landmarkImage: "Egypt-LandmarkReef.jpg",
        landmarkLocation: "Sharm al Sheikh",
        openWithCovid: true
    }
]


export const getLandmark = () => {
    return landmarkCollection;
  };