namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }

    class Cpp extends Subject {
        getRequirements() {
            return "Here is the list of requirements for Java"
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstname}`
            } else {
                return "No available teacher"
            }
        }
    }
}