
import Person from "./person";

export default class Teacher extends Person{
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
        return super.introduce()+(this.klass?` I am a Teacher. I teach Class ${this.klass}.`
            :' I am a Teacher. I teach No Class.');
    }


}
