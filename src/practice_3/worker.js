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
        return 'I am a Worker. I have a job.';
    }
}
