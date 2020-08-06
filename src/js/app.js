import '../style/style.sass';
import 'bootstrap/scss/bootstrap.scss';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { removeInputError, showAutocompleteList, showInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';
import {
	initApp, loadCities, coutriesObj, citiesObj,
} from './services/locations.service';

document.addEventListener('DOMContentLoaded', () => {
	const {
		form, inputEmail, inputPassword, inputCountry, inputCity, cityList, countryList,
	} = UI;
	const inputs = [inputEmail, inputPassword];
	initApp();

	async function onFormSubmit() {
		const isValidForm = inputs.every((el) => {
			const isValidInput = validate(el);
			if (!isValidInput) {
				showInputError(el);
			}
			return isValidInput;
		});
		// form.classList.add('was-validated')

		if (!isValidForm) return;

		try {
			await login(inputEmail.value, inputPassword.value);
			form.reset();
			notify({ msg: 'Login success', className: 'alert-success' });
		} catch (e) {
			notify({ msg: 'Login failed', className: 'alert-danger' });
		}
	}

	inputs.forEach((el) => el.addEventListener('focus', () => removeInputError(el)));

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		onFormSubmit();
	});
	function onCountryKeyUp({ target }) {
		inputCity.disabled = true;
		showAutocompleteList(countryList, coutriesObj, target.value);
	}

	function onCityKeyUp({ target }) {
		showAutocompleteList(cityList, citiesObj, target.value);
	}

	inputCountry.addEventListener('keyup', onCountryKeyUp);
	inputCity.addEventListener('keyup', onCityKeyUp);

	countryList.addEventListener('click', ({ target }) => {
		const { innerHTML } = target;
		inputCountry.value = innerHTML;
		countryList.innerHTML = '';
		inputCity.disabled = false;
		loadCities(inputCountry.value);
	});

	cityList.addEventListener('click', ({ target }) => {
		const { innerHTML } = target;
		inputCity.value = innerHTML;
		cityList.innerHTML = '';
	});
});
