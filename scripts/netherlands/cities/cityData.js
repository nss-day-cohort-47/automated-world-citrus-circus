const cityCollection = [
    {
      cityName: "Amsterdam",
      cityImage: "Amsterdam.jpeg",
      cityPopulation: "821,752",
      cityFact: "The city sits on 11 million poles to stop buildings from sinking.",
    },
    {
      cityName: "Delft",
      cityImage: "delft.jpg",
      cityPopulation: "103,163",
      cityFact:"Dutch porcelain is called Delftware or Delft Blue.",
    },
    {
      cityName: "Rotterdam",
      cityImage: "rotterdam.jpg",
      cityPopulation: "623,652",
      cityFact: "Rotterdam has 73 bridges.",
    },
  ];
  
  export const getCity = () => {
    return cityCollection;
  };