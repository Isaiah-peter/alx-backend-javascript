const updateStudentGradeByCity = (list = [], city, newGrade = []) => {
  const newUpdatedList = [];
  const newList = list.filter((x) => x.location === city);

  newList.map((l) => {
    let grades = newGrade.filter((x) => x.studentId === l.id);
    let dict = { ...l };
    if (grades.length > 0) {
      dict.grade = grades[0].grade;
    } else {
      dict.grade = 'N/A';
    }
    newUpdatedList.push(dict);
  });

  return newUpdatedList;
};

export default updateStudentGradeByCity;
