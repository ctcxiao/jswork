export default class Class {
    number;
    member;
    leader;
    teacher;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(leader) {
        if (leader.klass !== this) {
            console.log("It is not one of us.");
        } else {
            this.leader = leader;
        }
        if (this.teacher) {
            this.teacher.sayStudentHasBecomeLeader(leader);
        }
    }

    appendMember(student) {
        student.klass = this;
        if (this.teacher) {
            this.teacher.sayStudentHasJoin(student);
        }
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}
