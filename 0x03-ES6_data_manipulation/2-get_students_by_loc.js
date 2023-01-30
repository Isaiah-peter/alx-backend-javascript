const getStudentsByLocation = (arr = [], city) => {
  const returns = arr.filter((x) => x.location === city);

  return returns;
};

export default getStudentsByLocation;
