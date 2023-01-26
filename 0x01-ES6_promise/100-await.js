import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const promise1 = await uploadPhoto().then(
    (value) => value,
  );

  const promise2 = await createUser().then(
    (value) => value,
  );

  return {
    photo: promise1 || null,
    user: promise2 || null,
  };
}
