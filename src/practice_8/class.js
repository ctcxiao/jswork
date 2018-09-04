export default class Class {
    number;
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(leader){
        this.leader = leader;
    }
}
