/// <reference path="crud.d.ts" />
import { RowID } from "./interface"
import { RowElement } from "./interface"
import * as CRUD from "./tr"


const row: RowElement = {
    firstname: "Guillaume",
    lastname: "Salva"
}

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)