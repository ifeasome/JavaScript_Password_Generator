// This is a code that meets parts of the criteria but is incomplete

let alphaLetters = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
let lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let pwdNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let xTers =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[",  "]", " ^ ",
 "_", "`", "{", "|", "}", "~"];
 let userChoice = [];

// Assignment Code
 let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  let lengthPrompt = prompt("Please choose a password length between 8 to 128 characters");

  if (lengthPrompt < 8 || lengthPrompt > 128) {
   alert("Please pick a number between 8 - 128");
   return;
  }

  else {
    
    let confirmpwdNumbers = confirm("Would you want to add numbers?"); 
    {console.log("confirm number: ", confirmpwdNumbers);}

    let confirmxTers = confirm("Would you want to add special characters?");
    {console.log("confirm number: ", confirmxTers);}
  
    let confirmalphaLetters = confirm("Would you want to add uppercase letters?"); 
    {console.log("confirm number: ", confirmalphaLetters);}

    let  confirmlowerLetters = confirm("Would you want to add lowercase letters?");
    {console.log("confirm number: ", confirmlowerLetters);}

    if (confirmpwdNumbers === false && confirmxTers === false && confirmalphaLetters === false && confirmlowerLetters === false) {
      alert("You have to make a choice")
    }

      if (confirmpwdNumbers) { 
        userChoice = userChoice.concat(pwdNumbers);
      }

      if (confirmxTers) {
        userChoice = userChoice.concat(xTers);
      }
 
      if (confirmalphaLetters) {
        userChoice = userChoice.concat(alphaLetters);
      }

      if (confirmlowerLetters) {  
          userChoice = userChoice.concat(lowerLetters);

      }
    }

    let randomPassword = [];

    for (let i = 0; i < lengthPrompt; i++) {
    randomPassword = randomPassword + userChoice[Math.floor(Math.random() * userChoice.length)];

    }
    return randomPassword;

    
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


