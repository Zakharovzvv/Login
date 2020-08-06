const lsTokenKey = 'my_app_token';

function setToken(req) {
	const isAuthUrl = req.url.includes('auth');
	if (!isAuthUrl) {
		req.headers['x-access-token'] = localStorage.getItem(lsTokenKey);
	}
	return req;
}

function setTokenOnLogin(res) {
	const isLoginUrl = res.config.url.includes('login');
	if (isLoginUrl) {
		const token = res.dataset.token;
		localStorage.setItem(lsTokenKey, token);
	}
	return res;
}

function getClearResponse(res) {
	return res.data;
}

function onError(e) {
	console.log(e);
	return Promise.reject(e);
}

// eslint-disable-next-line func-names
export default function (axios) {
	axios.interceptors.request.use(setToken);
	axios.interceptors.response.use(setTokenOnLogin);
	axios.interceptors.response.use(getClearResponse, onError);
}
