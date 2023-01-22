const describePopulation = function (country,population){
    const percentage = percentageOfWorld1(population)
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description); 
}; 
describePopulation('Portugal', 10); 
describePopulation('China', 1411); 
describePopulation('USA', 32);
