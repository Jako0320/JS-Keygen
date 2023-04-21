// Assignment Code

//Var listing
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "_", "~"];
num = [2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let choice;
let passLength;
let confirmSymbols;
let confirmNum;
let confirmUpper;
let confirmLower;

// Creates the array with all cap letters
let up = function (x) {
  return x.toUpperCase();
};
lettersPass = letters.map(up);

// Add event listener to generate button
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  genPassword();
});

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

function genPassword() {

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  passLength = parseInt(prompt("How long do you need the password to be (Pick between 8 and 128)?"));

  if (!passLength || passLength < 8 || passLength > 128) {
    alert("Please pick a number between 8 and 128");
  }
  else {
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    confirmNum = confirm("Do you want numbers?");
    confirmSymbols = confirm("Do you want special characters?");
    confirmUpper = confirm("Do you want upper case letters?");
    confirmLower = confirm("Do you want lower case letters?");
  };

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (!confirmNum && !confirmSymbols && !confirmUpper && !confirmLower) {
    choice = alert("You must pick at least one criteria");
  }

  // list of all cases of user selections

  else if (confirmNum && confirmSymbols && confirmUpper && confirmLower) {
    choice = num.concat(symbols, letters, lettersPass);
  }
  else if (confirmNum && confirmSymbols && confirmUpper) {
    choice = num.concat(symbols, lettersPass);
  }
  else if (confirmNum && confirmSymbols && confirmLower) {
    choice = num.concat(symbols, letters);
  }
  else if (confirmNum && confirmUpper && confirmLower) {
    choice = num.concat(lettersPass, letters);
  }
  else if (confirmSymbols && confirmUpper && confirmLower) {
    choice = symbols.concat(lettersPass, letters);
  }
  else if (confirmNum && confirmLower) {
    choice = num.concat(letters);
  }
  else if (confirmNum && confirmUpper) {
    choice = num.concat(lettersPass);
  }
  else if (confirmNum && confirmSymbols) {
    choice = num.concat(symbols);
  }
  else if (confirmUpper && confirmLower) {
    choice = lettersPass.concat(letters);
  }
  else if (confirmUpper && confirmSymbols) {
    choice = lettersPass.concat(symbols);
  }
  else if (confirmLower && confirmSymbols) {
    choice = letters.concat(symbols);
  }
  else if (confirmNum) {
    choice = num;
  }
  else if (confirmUpper) {
    choice = lettersPass;
  }
  else if (confirmLower) {
    choice = letters;
  }
  else if (confirmSymbols) {
    choice = symbols;
  }
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  let password = [];
  for (let i = 0; i < passLength; i++) {
    let selection = choice[Math.floor(Math.random() * choice.length)];
    password.push(selection);
  }

  // mutate the array into a string
  let ps = password.join("")
  passDisplay(ps);
  return ps;
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
function passDisplay(ps) {
  document.getElementById("password").textContent = ps;
  alert(ps);
}














