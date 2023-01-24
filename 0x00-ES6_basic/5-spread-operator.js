export default function concatArrays(array1, array2, string) {
    const allConcat = [...array1, ...array2, ...string];
    return allConcat;
}
