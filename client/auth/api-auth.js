//makes calls to auth api endpoints
//so since this takes user as an obj param with email and pwd fields,
//safe to assume the react comp that calls this will bundle the email/pwd into an obj somehow
const signin = async (user) => {
    try {
        let response = await fetch('/auth/signing/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        //the component invoking this method needs to handle the response appropriately by storing the received JWT 
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

const signout = async() => {
    try {
        let response = await fetch('/auth/signout', {method: 'GET'})
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

export { signin, signout }