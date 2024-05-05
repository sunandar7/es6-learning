const Person = {
    name: 'Su Nandar',
    age: 25,
    showName () {
        console.log(this.name);
    },
    showAge () {
        // console.log(this.age);

        let self = this;
        console.log(self.age);
    }
}

Person.showName();
Person.showAge()