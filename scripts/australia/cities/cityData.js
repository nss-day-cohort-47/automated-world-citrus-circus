export const cityCollection = [ 
    { 
        cityName: "Sydney", 
        cityImage: "sydney.jpg", 
        cityPopulation: "4,991,654", 
        cityFact: "The Sydney Harbour Bridge is the widest long-span bridge and tallest steel arch bridge in the world" 
    }, 
    { 
        cityName: "Melborne", 
        cityImage: "melborne.jpg", 
        cityPopulation: "5,061,439", 
        cityFact: "Around 90 tonnes of dog poo is left on the streets of Melbourne every day" 
    }, 
    { 
        cityName: "Brisbane", 
        cityImage: "brisbane.jpg", 
        cityPopulation: "2,439,467", 
        cityFact: "Brisbane has 283 days of sunshine a year" 
    } 
] 
export const getCity = () => {
    return cityCollection;
  };
  