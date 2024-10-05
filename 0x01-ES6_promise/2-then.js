function handleResponseFromAPI(promise){
	return promise.then( () =>  ({ status:  200, body: "success"})).catch( () => { Error() } ).finally( () => {console.log("Got the reponse from the API ")})
}

