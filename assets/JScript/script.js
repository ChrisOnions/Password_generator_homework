// On button press 

  // prompt for an input of length of password
// "how long would you like your password to be 8 - 100 characters"

  // prompted for character types I choose lowercase, uppercase, numeric, and/or special character
// "would you like Numbers?" user Input
// "would you like uppercase letters?" user input yes or no
// "would you like special Characters?"user input yes or no

  var password = " ";
    //String of uppercase letters
  var upperCaseLetters  = "ABCDEFGHIJKLMNOPQRXTUVWXYZ" ;
    //split the letters into an individual array
  var upperCaseLetters = upperCaseLetters.split("");
    //String of lowercase letters
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz" ;
    //split the letters into an individual array
  var lowerCaseLetters = lowerCaseLetters.split("");
    // String of all special characters
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;
    //split the Special characters into an individual array
  var specialCharacters = specialCharacters.split("");
  var numberLength = 0
// Function to ask questions for password generation
  function generatePassword(){
    // user input for password length
    
    var numberLength = parseInt(
      prompt("How long would you like your password to be? 8-100"));
      console.log(numberLength);


      // Checks if the number is a number and not a sting
if (isNaN(numberLength) === !true) {
  console.log("correct") 
}
  else {
    alert ("sorry please number and try again")
    return;
  }

  // After user input number checks if its in the correct range  
  if (numberLength <= 100 ) {
  console.log("correct") ;
}
  else {
      alert("Sorry " + numberLength + " is not between 8-100")
    return;
  }
  
  // chacks if number is between secified value
  if (numberLength > 8) {
    console.log("correct") ;
  }
  
    else {
      alert("Sorry " + numberLength + " is not between 8-100 try again")
    return;}
  

  }
  console.log(numberLength)
  generatePassword()




// Make an array of all characters. A - Z
// Make a random number generator in an function. 0 - 9
// Make an array to hold the password values (total output)

// Make a function to choose how long the password will be 8 - 100
// Make a make a function to choose each element from either the letters or numbers randomly 
// Add them all to the array ad the end 
// consolidate the array so its printed as a password

// Generate password button clicked


//  The password is either displayed in an alert or written to the page

// prompted for character types I choose lowercase, uppercase, numeric, and/or special character



// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// Resourses

