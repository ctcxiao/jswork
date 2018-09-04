import Person from "./person";

export default class Student extends Person{
    name;
    age;
    klass;
    klassNumber;

    constructor(klassNumber, name, age, klass) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.klass = klass;
        this.klassNumber = klassNumber;
    }

    introduce() {
        if (this.klass.leader === this){
            return super.introduce()+` I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        return super.introduce()+` I am a Student. I am at Class ${this.klass.number}.`;
    }


}
