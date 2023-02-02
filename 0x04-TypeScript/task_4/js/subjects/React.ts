namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    class Cpp extends Subject {
        getRequirements() {
            return "Here is the list of requirements for React"
        }

        getAvailableTeacher() {
            if (this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstname}`
            } else {
                return "No available teacher"
            }
        }
    }
}