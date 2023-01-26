import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let string = '';

  uploadPhoto().then(
    (value) => {
      string += value.body;
    },
    () => console.log('Signup system offline'),
  );
  createUser().then(
    (value) => {
      string += ` ${value.firstName} ${value.lastName}`;
      console.log(string);
    },
    () => console.log('Signup system offline'),
  );
}
