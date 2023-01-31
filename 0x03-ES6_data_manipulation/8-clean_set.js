const cleanSet = (set, str) => {
  const arr = [];
  for (key in set) {
    if (set[key].include(str)) {
      arr.push(set[key]);
    }
  }

  console.log("arr", arr);
};

export default cleanSet;
