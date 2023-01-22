function describeCountry(country,population,capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const descNepal = describeCountry('Nepal',2,'Kathmandu');
const descJapan = describeCountry('Japan',4,'Tokyo');
console.log(descNepal,descJapan);