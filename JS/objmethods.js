const myCountry = { 
    country: 'Nepal', 
    capital: 'Kathmandu', 
    language: 'Nepali', 
    population: 6, 
    neighbours: ['India', 'China', 'Bangladesh'], 
    describe: function () { 
    console.log( 
   `${this.country} has ${this.population} million ${this.language}-speaking people,  
   ${this.neighbours.length} neighbouring countries and a  capital called ${this.capital}.` 
    ); 
    }, 
    checkIsland: function () { 
    this.isIsland = this.neighbours.length === 0 ? true :  false; 
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);  } 
    };
    myCountry2.describe(); 
    myCountry2.checkIsland(); 
    console.log(myCountry2); 
}   