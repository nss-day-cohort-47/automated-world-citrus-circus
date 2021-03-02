const peopleCollection = [
    {
        personName: "Hoda Kotb",
        personImage: "Egypt-PeopleHoda.jpg",
        famousFor: "Egyptian American broadcast journalist, television personality, and author.",
        aliveToday: true
    },
    {
        personName: "Omar Sharif",
        personImage: "Egypt-PeopleSharif.jpg",
        famousFor: "Egyptian film and television actor.",
        aliveToday: false
    },
    {
        personName: "Rami Malek",
        personImage: "Egypt-PeopleMalek.jpg",
        famousFor: "Egyptian American actor.",
        aliveToday: true
    }
];

export const getPeople = () => {
    return peopleCollection;
  };