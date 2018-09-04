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
        return 'My name is Tom. I am 21 years old.';
    }

}
