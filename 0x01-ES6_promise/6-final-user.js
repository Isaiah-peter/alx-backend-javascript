import signUp from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const promise1 = signUp(firstname, lastname);
  const promise2 = uploadPhoto(filename);

  return Promise.all([promise1, promise2]).then((value) => console.log(value));
}
