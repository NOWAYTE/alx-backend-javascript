import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaderUser() {
  const photo = await uploadPhoto().catch(() => null);
  const user = await createUser().catch(() => null);

  return {
    photo,
    user,
  };
}
