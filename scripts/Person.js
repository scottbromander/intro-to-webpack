class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayName() {
        return `Hi! My name is ${this.firstName} ${this.lastName}`;
    }
}

export default Person;