export default function appendToEachArrayValue(array, appendString) {
    for (let idx of array) {
      let value = `${appendString}${idx}`;
      array[idx] = value;
    }
  
    return array;
}
