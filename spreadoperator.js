
let fruits = ['apple','orange'];
let fullFruits = [...fruits, 'mango'];

console.log(fullFruits);

let personalDetails = {
    name: 'Su Nandar',
    age: 25
};

let fullPersonalDetails = {...personalDetails, location:'mandalay', phone:'09123456'};
console.log(fullPersonalDetails);
console.log(fullPersonalDetails.name);