const cityCollection = [
    {
        cityName: "Lisbon",
        cityImage: "Portugal-CityLisbon.jpg",
        cityPopulation: "2,942,000",
        cityFact: "Lisbon is one of the oldest cities in the world, and the second-oldest European capital city (after Athens), predating other modern European capitals by centuries."
    },
    {
        cityName: "Porto",
        cityImage: "Portugal-CityPorto.jpg",
        cityPopulation: "237,559",
        cityFact: "Port wine, one of Portugal's most famous exports, is named after Porto, since the metropolitan area, and in particular the cellars of Vila Nova de Gaia, were responsible for the packaging, transport, and export of fortified wine."
    },
    {
        cityName: "Coimbra",
        cityImage: "Portugal-CityCoimbra.jpg",
        cityPopulation: "105,842",
        cityFact: "Coimbra celebrates its municipal holiday on 4 July, in honour of Queen Elizabeth of Portugal; a religious and civic celebration that celebrated the life of the former Queen, that includes a fireworks display following the night-time march of the penitents."
    }
]

export const getCity = () => {
    return cityCollection
  };
