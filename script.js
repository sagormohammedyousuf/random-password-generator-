const passwordBox = document.querySelector("#password");
const lengthA = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const number = "0123456789";
const symbol = "!@#$%^&*()_-+={[}]|\:;'<,>.?/"

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]


    while (lengthA > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}


function copyPass() {
    passwordBox.select();
    document.execCommand("copy")
}