/**
 *
 * Function inputErrorTemplate
 * @param {String} msg
 */
function inputErrorTemplate(msg) {
	return `
      <div class="invalid-feedback">
        ${msg}
      </div>
`;
}

/**
 * function autocompleteItemTemplate
 * @param itemText
 * @returns {string}
 */
function autocompleteItemTemplate(itemText) {
	return `
  <a href="#" class="list-group-item list-group-item-action">${itemText}</a>

`;
}

/**
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
	const inputParent = el.parentElement;
	const msg = el.dataset.invalidMessage;
	const template = inputErrorTemplate(msg);
	inputParent.insertAdjacentHTML('beforeend', template);
	el.classList.toggle('is-invalid');
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
	const inputParent = el.parentElement;
	const errorMessageDiv = inputParent.querySelector('.invalid-feedback');
	if (!errorMessageDiv) return;
	errorMessageDiv.remove();
	el.classList.toggle('is-invalid');
}

export function showAutocompleteList(container, list, searchText) {
	// eslint-disable-next-line no-param-reassign
	container.innerHTML = '';
	let fragment = '';
	Object.values(list).filter((country) => {
		if (country.toLowerCase().match(searchText.toLowerCase())) {
			const template = autocompleteItemTemplate(country);
			fragment += template;
		}
		return country;
	});
	container.insertAdjacentHTML('afterbegin', fragment);
}
