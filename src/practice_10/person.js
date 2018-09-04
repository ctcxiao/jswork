export default class Person {

    name;
    age;
    klassNumber;

    constructor(klassNumber, name, age) {
        this.name = name;
        this.age = age;
        this.klassNumber = klassNumber;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }

}
