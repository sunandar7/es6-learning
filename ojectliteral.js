const person = (name) => {
    return {
        // name: name,
        name
        // if property name and value name are same, can write shorthen form like that name instead of name:name 
    }
}
console.log(person('Su Nandar'));

const info = () => {
    return {
        showName: function(){
            console.log('Show name');
        },

        showAge(){
            console.log('Show age');
        }
    }
}
info().showName();
info().showAge();

// computed property => allow you to set property dynamically
const data = (name) => {
    let prefix = 'mr';
    return {
        // [prefix] : name
        [prefix+name] : name
    }
}
console.log(data('John')['mrJohn']);