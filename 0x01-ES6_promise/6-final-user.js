import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignUp(firstName, lastName, filename){
	const res = [];

	try {
		const user = await signUpUser(firstName, lastName);
		res.push( { status: 'fulfilled', value: user } );
		await uploadPhoto(fileName);
		
	} catch (error) {
		res.push( {
			status: 'rejected',
			value: 'Error:  cannot  be processed',
		});

	}
	return res;

}
