function emailValidation(email) {
    let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    return regexEmail.test(email)
}

function phoneValidation(phone) {
    let regexPhone = /^\d{3}\.\d{3}\.\d{4}$/
    return regexPhone.test(phone)
}

function userNameValidation(userName) {
    /* check format */
    return true
}

function passWordValidation(passWord) {
    /* check format */
    return true
}

export {emailValidation, phoneValidation, userNameValidation, passWordValidation}
