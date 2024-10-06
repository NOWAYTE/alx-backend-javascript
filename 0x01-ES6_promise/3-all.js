import { uploadPhoto, createUser } from './utils.js';

export function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then((results) => {
            const [photo, user] = results; // Destructure results
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

