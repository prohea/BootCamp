// Assignment Code
var charSymbols = ['`~!@#$%^&*()-_=+/\|}{][><)('];
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var charNumbers = ['0123456789'];


function generatePassword () {
if (charSymbols + lowerCase + upperCase + charNumbers === 0) {
  window.alert ('must be at least 8 characters, no more than 128 characters'
  );
  generatePassword();
  }

var promptSymbols = confirm('You should add a symbol');
if (promptSymbols) {
  passwordBox += charSymbols;
}

var promptLowercase = confirm('You should add lowercase letters');
if (promptLowercase) {
  passwordBox += charLowercase;
}

var promptUppercase = confirm('You should add uppercase letters');
if (promptUppercase) {
  passwordBox += charUppercase; 
}

var promptNumbers = confirm('You should add numbers');
if (promptNumbers) {
  passwordBox += charNumbers;
}

if (passwordBox === '') {
  window.alert('Choose one of the criteria');
  generatePassword();
}

for (var i=0; i < promptLength; i++) {
  newPassword += passwordHolder.charAt (
    Math.floor(Math.random() * passwordBox.length)
  );
}
  return newPassword; 

}
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
