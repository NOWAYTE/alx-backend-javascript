import { uploadPhoto, createUser } from "./utils.js"

export function handleProfileSignup(){
	return uploadPhoto()
		.then( (body) => {
			console.log(photo.body);
			return createUser();
		})
		.then( (user) => {
			console.log(`${user.firstName} ${user.lastName}`);
		})
		.catch( () => {
			console.log("Sign up system offline")
		})
}
