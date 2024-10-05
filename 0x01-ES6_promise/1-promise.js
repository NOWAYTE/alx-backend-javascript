export function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success == true) {
            resolve({ status: 200, body: "Success" });
        } else {
            reject("The fake API is not working");
        }
    });
}

// Usage
getFullResponseFromAPI(true)  // Pass 'true' or 'false' to test both cases
    .then(response => console.log(response))   // Logs the success response
    .catch(error => console.log(error));       // Logs the error message

