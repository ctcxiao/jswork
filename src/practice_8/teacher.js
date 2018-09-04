
import Person from "./person";

export default class Teacher extends Person{
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

    introduceWith(student){
        if (student.klass === this.klass){
            return super.introduce()+` I am a Teacher. I teach ${student.name}.`;
        }
        return super.introduce()+` I am a Teacher. I don't teach ${student.name}.`;
    }

    introduce() {
        return super.introduce()+(this.klass?` I am a Teacher. I teach Class ${this.klass.number}.`
            :' I am a Teacher. I teach No Class.');
    }


}
