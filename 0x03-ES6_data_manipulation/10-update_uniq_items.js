const updateUniqueItems = (map) => {
  map.forEach((values, key) => {
    if (values === 1) {
      map.set(key, 100);
    }
  });
};

export default updateUniqueItems;
