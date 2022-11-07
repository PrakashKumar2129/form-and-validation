let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let password = document.getElementById('pwd');
let showPassword = document.getElementById('showpwd');
let confirmPassword = document.getElementById('cpwd');
let mail = document.getElementById('mail');
let address = document.getElementById('address');
let remainingChar = document.getElementById('count');
let phoneNumber = document.getElementById('pnum');

let fnameErr = document.getElementById('fnameErr');
let lnameErr = document.getElementById('lnameErr');
let pwdErr = document.getElementById('pwdErr');
let cPassErr = document.getElementById('cPassErr');
let mailErr = document.getElementById('mailErr');
let pnumErr = document.getElementById('pnumErr');


function validation() {

    // First Name 
    if (fname.value.length < 3 || fname.value.length > 8) {
        if (fname.value.length < 3) {
            fnameErr.innerText = "minimum enter 3 character";
        }
        else {
            fnameErr.innerText = "maximun allowed charecter 8";
            fname.value = "";
        }
        fname.style.borderColor = "red";
        fname.focus();
        return false;
    }
    else {
        fnameErr.innerText = ""
        fname.style.border = "none";
    }

    // Last Name
    if (lname.value.length < 3 || lname.value.length > 8) {
        if (lname.value.length < 3) {
            lnameErr.innerText = "minimum enter 3 character";
        }
        else {
            lnameErr.innerText = "maximun allowed charecter 8";
            lname.value = "";
        }
        lname.style.borderColor = "red";
        lname.focus();
        return false;
    }
    else {
        lnameErr.innerText = ""
        lname.style.border = "none";
    }

    //password
    if (password.value === "") {
        pwdErr.innerText = "enter password";
        password.style.borderColor = "red";
        password.focus();
        return false;
    }
    else {
        pwdErr.innerText = "";
        password.style.border = "none";
    }

    //confirm password
    if (password.value !== confirmPassword.value) {
        cPassErr.innerText = "password not match"
        confirmPassword.style.borderColor = "red";
        confirmPassword.focus();
        return false;
    }
    else {
        cPassErr.innerText = "";
        confirmPassword.style.border = "none";
    }

    //email
    let mailValue = mail.value;
    let atpos = -1;
    let dotpos = -1;
    for (let i = 0; i < mailValue.length; i++) {
        if (mailValue[i] === "@") atpos = i;
        if (mailValue[i] === ".") dotpos = i;
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= mailValue.length) {
        mailErr.innerText = "enter valid mail id"
        mail.style.borderColor = "red";
        mail.focus();
        return false;
    }
    else {
        mailErr.innerText = "";
        mail.style.border = "none";
    }

    //phone number
    let pnumArray = [];
    let pnumValue = phoneNumber.value;
    while (pnumValue > 0) {
        let rem = pnumValue % 10;
        pnumArray.push(rem);
        pnumValue = parseInt(pnumValue / 10);
    }

    console.log(pnumArray[9]);
    console.log(phoneNumber.value.length);
    if (phoneNumber.value.length !== 10) {
        pnumErr.innerText = "enter valid phone number"
        phoneNumber.style.borderColor = "red";
        phoneNumber.focus();
        return false;
    }
    else if (pnumArray[9] < 6 || pnumArray > 9) {
        pnumErr.innerText = "first number start with 6,7,8,9"
        phoneNumber.style.borderColor = "red";
        phoneNumber.focus();
        return false;
    }
    else {
        pnumErr.innerText = "";
        phoneNumber.style.border = "none";
    }
}


let max = address.getAttribute("maxlength");
remainingChar.style.color = "black";
remainingChar.innerText = "Remaining character : " + max;

function remChar() {
    let currentvalue = address.value.length;
    remainingChar.innerText = "Remaining character : " + (max - currentvalue);
}





function showPass() {
    if (showPassword.checked) {
        password.setAttribute("type", "text");
    }
    else {
        password.setAttribute("type", "password");
    }
}