const peopleCollection = [
    {
        personName: "Eddie Van Halen",
        personImage: "eddievanhalen.jpg",
        famousFor: "Lead guitarist and songwriter for the band Van Halen.",
        aliveToday: false
    },
    {
        personName: "Carice Van Houten",
        personImage: "CaricevanHouten.jpg",
        famousFor: "Dutch born actress and singer",
        aliveToday: true
    },
    {
        personName: "Mata Hari",
        personImage: "matahari.jpg",
        famousFor: "Exotic dnacer and spy",
        aliveToday: false
    }
];

export const getPeople = () => {
    return peopleCollection;
  };