//this file contains methods for accessing each of the user CRUD API endpoints

//creates new user. Returns a promise.json()
const create = async(user) => {
    try {
        let response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //this line converts the JS user obj into a JSON formatted string
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
//returns an array
const list = async (signal) => {
    try {
        let response = await fetch('/api/users', {
            method: 'GET',
            signal: signal,
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }

}