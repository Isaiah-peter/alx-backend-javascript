import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promise1 = await uploadPhoto().then(
    (value) => value,
    () => null,
  );

  const promise2 = await createUser().then(
    (value) => value,
    () => null,
  );

  return {
    photo: promise1,
    user: promise2,
  };
}
