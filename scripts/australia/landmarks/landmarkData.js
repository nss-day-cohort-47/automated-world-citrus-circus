const landmarkCollection = [ 
{ 
    landmarkName: "Sydney Opera House", 
    landmarkImage: "operahouse.jpg", 
    landmarkLocation: "Sydney, Australia", 
    openWithCovid: true 
}, 
{
     landmarkName: "Port Arthur", 
     landmarkImage: "portaurther.jpg",
      landmarkLocation: "Town in Tasmania, Australia", 
      openWithCovid: true 
    },
    {
         landmarkName: "Uluru", 
         landmarkImage: "uluru.jpg", 
         landmarkLocation: "South region of the Northern territory", 
         openWithCovid: false 
        }
     ]
export const getLandmark = () => {
    return landmarkCollection;
}
