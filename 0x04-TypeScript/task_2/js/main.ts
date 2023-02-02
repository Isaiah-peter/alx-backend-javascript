interface DirectorInterface {
    workFromHome: () => string,
    getCoffeeBreak: () => string,
    workDirectorTasks: () => string
}

interface TeacherInterface {
    workFromHome: () => string,
    getCoffeeBreak: () => string,
    workTeacherTasks: () => string
}

class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home"
    }

    workDirectorTasks() {
        return "Getting to director tasks"
    }

    getCoffeeBreak() {
        return "Getting a coffee break"
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return "Working from home"
    }

    workTeacherTasks() {
        return "Getting to work"
    }

    getCoffeeBreak() {
        return "Getting a coffee break"
    }
}

const createEmployee = (salary: number | string) => {
    if (salary < 500) {
        return new Teacher()
    }

    return new Director()
}

const isDirector = (empolyee: Director | Teacher) => {
    if (typeof empolyee === typeof Director) {
        return true
    }

    return false
}

const executeWork = (empolyee: any) => {
    if (isDirector) {
        return empolyee.workDirectorTasks
    }

    return empolyee.workTeacherTasks
}


type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => {
    return (`Teaching ${todayClass}`)
}
