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
 * Function showInputError. Add input error
 * @param {HTMLInputElement} el
 */
export function showInputError(el) {
    const inputParent=el.parentElement;
    const msg=el.dataset.invalidMessage;
    const template=inputErrorTemplate(msg);
    inputParent.insertAdjacentHTML('beforeend',template)
    el.classList.toggle('is-invalid');
}

/**
 * Function removeInputError. Remove input error
 * @param {HTMLInputElement} el
 */
export function removeInputError(el) {
    const inputParent=el.parentElement;
    const errorMessageDiv=inputParent.querySelector('.invalid-feedback');
    if (!errorMessageDiv) return;
    errorMessageDiv.remove();
    el.classList.toggle('is-invalid');
}