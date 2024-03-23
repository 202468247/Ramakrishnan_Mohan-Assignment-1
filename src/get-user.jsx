import {userData} from './user.jsx'
import {emailValidation, phoneValidation, userNameValidation, passWordValidation} from './validation'

let returnMessage = ''

export function checkLogin (userName, passWord) {

    //Check for login 
    const newArray = userData.filter(element => element.userName == userName)
    if (newArray[0].passWord==passWord) {
        returnMessage = returnMessage + `Thank you ${newArray[0].firstName} for login as ${newArray[0].userType}`
    }
    else {
        returnMessage = returnMessage + `Login failed`
    }

    //check for email format
    if (!emailValidation(newArray[0].emailId)) {
        returnMessage = returnMessage + "\n" + 'X -- Your email address format is wrong. please edit your email address in the profile' 
    }

     //check for phone format
     if (!phoneValidation(newArray[0].phone)) {
        returnMessage = returnMessage + "\n" + 'X -- Your phone format is wrong. please edit your phone number in the profile' 
    }

    console.log("test 1")

    return returnMessage
}



/*
// Data Validation//
returnMessage = returnMessage + ''

//login validation//
export function checkLogin (userName, passWord) {
    if ((userName == Admin.userName) && (passWord == Admin.passWord)) {
        returnMessage = returnMessage + `Thank you ${Admin.firstName} for login as ${Admin.userType}`
    }
    else if ((userName == Client.userName) && (password == Client.passWord)) {
        returnMessage = returnMessage + `Thank you ${Client.firstName} for login as ${Client.userType}`
    }
    else if ((userName == ServiceProvider.userName) && (password == Client.passWord)) {
        returnMessage = returnMessage + `Thank you ${ServiceProvider.firstName} for login as ${ServiceProvider.userType}`
    }
    else {
        returnMessage = returnMessage + `Login failed`
    }

    return returnMessage
} */
