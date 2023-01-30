const getListStudentIds = (arr) => {
  const ids = [];

  try {
    arr.map((list) => ids.push(list.id));
  } catch (e) {
    return [];
  }

  return ids;
};

export default getListStudentIds;
