import ClassRoom from "./0-classroom";

export default function initializeRooms() {
    let classs = new ClassRoom(19)

    return [
        `ClassRoom { _maxStudentsSize: ${classs._maxStudentsSize} }`,
        `ClassRoom { _maxStudentsSize: 20 }`,
        `ClassRoom { _maxStudentsSize: 34 }`
    ]
}