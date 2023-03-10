namespace Subjects {
    export interface Teacher {
        experienceTeachingC: number
    }

    class Cpp extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp"
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstname}`
            } else {
                return "No available teacher"
            }
        }
    }
}