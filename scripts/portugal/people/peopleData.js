const peopleCollection = [
    {
        personName: "Cristiano Ronaldo",
        personImage: "Portugal-PeopleRonaldo.jpeg",
        famousFor: "Soccer",
        aliveToday: true
    },
    {
        personName: "Ferdinand Magellan",
        personImage: "Portugal-PeopleMagellan..jpg",
        famousFor: "Explorer who organized the Spanish expedition to the East Indies",
        aliveToday: false
    },
    {
        personName: "Nelly Furtado",
        personImage: "Portugal-PeopleFurtado.jpg",
        famousFor: "Singer-Songwriter",
        aliveToday: true
    }
]

export const getPeople = () => {
    return peopleCollection
  };