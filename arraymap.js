const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);

for(let i = 0; i < array1.length-1; i+=2){
    console.log(array1[i] + 1);
}

array1.forEach(arr => console.log(arr + 2));

const array2 = ['Su Su','Aye Aye','Hla Hla','Ma Ma'];

// let n = 0;

// while(n < array2.length) {
//     console.log(array2[n]);
//     n++;
// }

let a = 0;
do{
    console.log(array2[a]);
    a++;
} while(a < array2.length);

let fruitcategory = 'banana';

switch(fruitcategory) {
    case 'apple' : 
        console.log('Apple is red');
        break;
    case 'orange' :
        console.log('Orange is orange');
        break;
    case 'banana' : 
        console.log('Banana is yellow');
        break;
    default :
        console('Unknown fruits');
}