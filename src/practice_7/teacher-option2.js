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

    introduceWith(student){
        if (student.klass === this.klass){
            return super.introduce()+" I am a Teacher. I teach "+student.name+".";
        }
        return super.introduce()+" I am a Teacher. I don't teach "+student.name+".";
    }

    introduce() {
        return super.introduce()+(this.klass?' I am a Teacher. I teach Class 2.'
            :' I am a Teacher. I teach No Class.');
    }


}
