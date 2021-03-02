const peopleCollection = [ 
    {
        personName: "Nicole Kidman", 
        personImage: "nicole.jpg", 
         famousFor: "Acting", 
         aliveToday: true 
        }, 
        { 
            personName: "Chris Hemsworth", 
            personImage: "chris.jpg", 
            famousFor: " Acting", 
            aliveToday: true 
        }, 
        { 
            personName: "Heath Ledger", 
            personImage: "heath.jpg", 
            famousFor: "Acting", 
            aliveToday: false 
        } 
    ]

export const getPeople = () => {
    return peopleCollection;
  };