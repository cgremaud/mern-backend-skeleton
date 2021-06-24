import { signout } from './api-auth.js'


//i'm guessing i'll import these into the components that call the api-auth functions and will call this to store result
const auth = {
    //saves JWT credentials received from server on successful sign in
    authenticate(jwt, cb) {
        if(typeof window !== "undefined") {
            //uses sessionStorage to store JWT token at sessionStorage.jwt
            //only saves for active tab use localStorage to store across tabs
            sessionStorage.setItem('jwt', JSON.stringify(jwt))
        }
        //calls callback function to proceed to next step/function
        cb()
    },
    //retrieves stored credentials to check if user signed in
    isAuthenticated() {
        if (typeof window == "undefined") {
            return false
        }
        
        if (sessionStorage.getItem('jwt')) {
            return JSON.parse(sessionStorage.getItem('jwt'))
        }

        else return false
    },
    //delete stored credentials
    clearJWT(cb) {
        if (typeof window !== "undefined") {
            sessionStorage.removeItem('jwt')
            cb()
            signout().then((data) => {
                document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            })
        }
    }

}