export default function handleResponseFromAPI(promise) {
  promise.then(
    (value) => {
      console.log(value);
    },
    () => console.log(new Error()),
    console.log('Got a response from the API'),
  );
}
