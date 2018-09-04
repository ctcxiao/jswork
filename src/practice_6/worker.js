import Person from "./person";

export default class Worker extends Person{
    name;
    age;

    constructor(name, age, klass) {
        super(name, age);
        this.name = name;
        this.age = age;
    }

    introduce() {
        return super.introduce()+'I am a Teacher. I have a job.';
    }
}
