const getStudentIdsSum = (arr = []) => {
  const returns = arr.reduce((prev, next) => prev + next.id, 0);

  return returns;
};

export default getStudentIdsSum;
