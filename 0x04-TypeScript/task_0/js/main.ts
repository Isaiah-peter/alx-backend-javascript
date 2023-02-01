interface Student {
    firstName: string,
    lastname: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Isaiah",
    lastname: "Peter",
    age: 20,
    location: "Akure"
}

const student2: Student = {
    firstName: "Daniel",
    lastname: "Etanuwoma",
    age: 21,
    location: "lagos"
}

const studentsList = [student1, student2]

function generateTable(table: { insertRow: () => any; }, data: any) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

let table = document.querySelector("table");
generateTable(table, studentsList);
