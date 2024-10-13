import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const resPhoto = await uploadPhoto();
    const resUser = await createUser();
    return {
      photo: resPhoto,
      user: resUser,
    };
  } catch
  (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
