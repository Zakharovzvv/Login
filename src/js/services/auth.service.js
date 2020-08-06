import axios from '../plugins/axios/index';

/**
 * Function login. Make login request to API
 * @param email
 * @param password
 * @returns {Promise<*>}
 */
export async function login(email, password) {
	try {
		const response = await axios.post(
			'/auth/login',
			JSON.stringify({ email, password }),
			{
			},
		);
		return response.data;
	} catch (e) {
		return Promise.reject(e);
	}
}
