function alertTemplate(msg, className, index) {
    return `
    <div class="alert ${className}" role="alert" data-index="${index}">
        ${msg}
    </div>
    `;
}

function getAlertIndex() {
    return document.querySelectorAll('.notify-container .alert').length;
}

export function notify(
    {
        msg = 'Info message',
        className = 'alert-info',
        timeOut = 2000
    } = {}) {
    const index = getAlertIndex();
    const template = alertTemplate(msg, className, index);
    const container = document.querySelector('.notify-container');
    container.insertAdjacentHTML('beforeend', template);
    setTimeout(() => closeNotify(index), timeOut);
}

function closeNotify(index) {
    let alert;
    if (index === undefined) {
        alert = document.querySelector('.notify-container .alert');

    } else {
        alert = document.querySelector(`.notify-container .alert[data-index="${index}"]`);
    }
    if (!alert) {
        console.log("Alert not found");
        return;
    }
    alert.remove();
}