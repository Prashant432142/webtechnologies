const neighbours = ['Nepal', 'India', 'China']; 
neighbours.push('Bangladesh'); 
console.log(neighbours); 
neighbours.pop(); 
console.log(neighbours); 
if (!neighbours.includes('Russia')) { 
console.log('Probably not a South Asian country :D');  } 
neighbours[neighbours.indexOf('china')] = 'Bangkok'; 
console.log(neighbours);
