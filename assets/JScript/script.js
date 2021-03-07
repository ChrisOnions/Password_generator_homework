// Make an array of all characters. A - Z
// Make a random number generator in an function. 0 - 9
// Make an array to hold the password values (total output)

// Make a function to choose how long the password will be 8 - 100
// Make a make a function to choose each element from either the letters or numbers randomly 
// Add them all to the array ad the end 
// consolidate the array so its printed as a password

// Generate password button clicked
// prompt for an input of length of password
// prompted for character types I choose lowercase, uppercase, numeric, and/or special character
//  The password is either displayed in an alert or written to the page





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Resourses

