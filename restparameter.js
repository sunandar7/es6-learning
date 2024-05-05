function multiply (name,...num) {
    console.log(name);
 
    let total = 1;
     
    for(n of num) {
        total *= n;
    }
    console.log(total);
}

function add (a,...b) {
    let total = a;

    for(n of b){
        total += n;
    }
    console.log(total);
    
}
add(2,3,4,5);

multiply('Su Nandar',1,2,3,4);  // 24
