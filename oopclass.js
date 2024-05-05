class PersonInfo {
    constructor(name) {
        console.log('I am constructor',name);
    }

    static showPersonName () {
        console.log('I am static method');
    }
}

let p = new PersonInfo('Su Nandar');

// PersonInfo.showPersonName();

class Employee extends PersonInfo {
    constructor (name) {
        super(name);
    }
}

let e = new Employee('Su');