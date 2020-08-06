import axios from '../plugins/axios/index';

// eslint-disable-next-line import/no-mutable-exports
export let coutriesObj = {};
// eslint-disable-next-line import/no-mutable-exports
export let citiesObj = {};

async function getCountries() {
	try {
		const response = axios.get('/location/get-countries');
		return await response;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function getCities(countryIndex) {
	try {
		const response = axios.get(`/location/get-cities/${countryIndex}`);
		return await response;
	} catch (e) {
		return Promise.reject(e);
	}
}

function getCountryByName(name) {
	const 	 city = Object.entries(coutriesObj).find(
		([, value]) => value === name,
	);
	return city[0];
}
export async function loadCities(country) {
	citiesObj = await getCities(getCountryByName(country));
	console.log(citiesObj);
}

export async function initApp() {
	// console.log(getCountries());
	coutriesObj = await getCountries();
	console.log(coutriesObj);

	// const [countries] = response;
}
