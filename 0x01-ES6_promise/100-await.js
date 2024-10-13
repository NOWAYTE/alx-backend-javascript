import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaderUser() {
	try {
		const photo = await uploadPhoto();
		const user = await createUser();

		return {
			photo,
			user,
		}

	} catch (error) {

		photo: null;
		user: null;
	}
}
