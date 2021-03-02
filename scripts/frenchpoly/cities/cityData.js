const cityCollection = [
    {
        cityName: "Fa'a'a",
        cityPopulation: "29,506",
        cityFact: "On average, Fa'a'a is only 30 feet above sea level",
        cityImage: "faaaMain.jpg"
    },

    {
        cityName: "Puna'auia",
        cityPopulation: "28,103",
        cityFact: "In the late 1890's, French writer Paul Gasin lived in Puna'auia",
        cityImage: "punaMain.jpg"
    },

    {
        cityName: "Pape'ete",
        cityPopulation: "26,926",
        cityFact: "Pape'ete is the capital city of French Polynesia",
        cityImage: "PapeeteMain.jpg"
    }
];

export const getCity = () => {
    return cityCollection;
}