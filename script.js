// This is a code that meets parts of the criteria but is incomplete
// Assignment Code
let generateBtn = document.querySelector("#generate");
let alphaLetters = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
let lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let pwdNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let xTers =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ",
 "_", "`", "{", "|", "}", "~"];
 userChoice = [];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  function generatePassword() {
  let lengthPrompt = prompt("Please choose a password length between 8 to 128 characters"); 
  if (lengthPrompt < 8 || lengthPrompt > 128) {
   prompt("You need a between 8 to 128");
  } else {
   alert("Nicely Done. On to the next!");
  }
    if (confirm("Would you want to add numbers?")) {
      userChoice = userChoice.concat(pwdNumbers);
    }
    if (confirm("Would you want to add special characters?")) {
      userChoice = userChoice.concat(xTers);
    }
    if (confirm("Would you want to add uppercase letters?")) {
      userChoice = userChoice.concat(alphaLetters);
    }
    if (confirm("Would you want to add lowercase letters?")) {
      userChoice = userChoice.concat(lowerLetters);
    }
    if (userChoice.length === 0) {
      alert("Can't get a random password without choosing something ;)");
    }
  
    let userPassword = [];

    for (let i = 0; i < lengthPrompt; i++) {
    let comboChoice = userChoice[Math.floor(Math.random() * length)];
    userPassword.push(comboChoice) = passwordText;
    passwordText.value = password;
}

  }
}
// return userPassword.join("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
};



