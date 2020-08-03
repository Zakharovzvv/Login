import axios from '../plugins/axios/index';


/**
 * Function login. Make login request to API
 * @param email
 * @param password
 * @returns {Promise<*>}
 */
export async function login(email,password) {
    try{
    const response=await axios.post(
        `/auth/login`,
        JSON.stringify({email,password}),
        {
        },
    );
    console.log(response);
    return response.data;
    }catch (e) {
        console.log(e);
       return  Promise.reject(e);
    }
}