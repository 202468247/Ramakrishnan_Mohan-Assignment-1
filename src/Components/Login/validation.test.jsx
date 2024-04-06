//import {emailValidation, phoneValidation, userNameValidation, passWordValidation} from './validation.js'
import { emailValidation, phoneValidation, userNameValidation, passWordValidation } from "./validation"

test('check for email format', () => {
    expect(emailValidation("Solar331@yahoo.ca")).toBeTruthy()
})

test('check for phone format', () => {
    expect(phoneValidation("647.300.2695")).toBeTruthy()
})