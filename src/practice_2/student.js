import Person from "./person";

export default class Student extends Person{
    name;
    age;
    klass;

    constructor(name, age, klass) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    introduce() {
        return 'I am a Student. I am at Class 2.';
    }


}
