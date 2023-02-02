interface Teacher {
  [propName:string]: boolean | string  | number,
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: boolean,
  location: string,
}

interface Directors extends Teacher {
  numberOfReports: number,
}


const printTeacher = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`
}

interface printTeacherFunction {
  printTeacher: (firstname: string, lastname: string) => string
}

interface Name {
  firstName: string,
  lastname: string
}


class Student implements Name {
  firstName: string
  lastname: string
  constructor(firstname: string, lastname: string) {
    this.firstName = firstname
    this.lastname = lastname
  }

  workOnHomework() {
    return 'Currently working'
  }

  displayName() {
    return this.firstName
  }
}