const personName = 'Su Nandar';

// for in (index number)
for(n in personName) {
    console.log(n);
}

// for of (value)
for(n of personName) {
    console.log(n);
}

const foods = ['pizza','chocolate','juice'];
for(f in foods) {
    console.log(f); // 0 1 2
}

for(f of foods) {
    console.log(f); // pizza chocolate juice
}