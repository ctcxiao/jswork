
import Person from "./person";

export default class Teacher extends Person{
    name;
    age;
    klass;

    constructor(name, age, klass=0) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.klass = klass;
    }

    introduce() {
        return super.introduce()+(this.klass?' I am a Teacher. I teach Class 2.'
            :' I am a Teacher. I teach No Class.');
    }


}
