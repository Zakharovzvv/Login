const regExpDic={
    email: /^[\w.-_]*@\w[\w-]*\w\.\w+$/,
    password:/^\w{4,}$/,
    phone:/^\+7\s?\(\d{3}\)[\-\s]?\d{3}[\-\s]?\d{2}[\-\s]?\d{2}$/,
    name:/^[a-zA-Z]+$/,
};

/**
 * Function validate. Check Input on RegExp provided in regExpDic by input data-required type
 * @param  {HTMLInputElement} el
 * @returns {boolean|*} - Return true if input valid or doesn't has data-required attr
 */
export function validate(el) {
    const regExpName=el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
}