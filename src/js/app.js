import '../style/style.sass';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login } from './services/auth.service';
import { notify } from './views/notifications';

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

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
