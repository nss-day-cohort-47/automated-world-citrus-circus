const landmarkCollection = [ 
{ 
    landmarkName: "Sydney Opera House", 
    landmarkImage: "Portugal-LandmarkPena", 
    landmarkLocation: "Sydney, Australia", 
    openWithCovid: true 
}, 
{
     landmarkName: "Port Arthur", 
     landmarkImage: "idk",
      landmarkLocation: "Town in Tasmania, Australia", 
      openWithCovid: true 
    },
    {
         landmarkName: "Uluru", 
         landmarkImage: "idk", 
         landmarkLocation: "", 
         openWithCovid: false 
        }
     ]
export getlandmark = () => {
    return landmarkCollection
}
