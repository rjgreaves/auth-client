import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signInUser({email, password}) {

    return function(dispatch) {

        // submit email/password to server
        axios.post(
            `${ROOT_URL}/signin`,
            { email, password }
        )
        // if request is good...
        // - Update state to authenticated
        // - Save the JWT token
        // - Redirect to route/feature

        // If request is bad...
        // - Show an error to the user

    }

}