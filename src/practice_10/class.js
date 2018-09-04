export default class Class {
    number;
    member;
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(leader){
        if (leader.klass !== this){
            console.log("It is not one of us.");
        } else {
            this.leader = leader;
        }
    }

    appendMember(student){
        student.klass = this;
    }
}
