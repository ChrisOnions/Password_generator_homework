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
  var numberLengthNumber = 0
  var numbersChoiceBool = null
  var caseChoiceBool = null
  var letterChoiceBool = null
  var specialCharBool = null 
  



// Function to ask questions for password generation
function generatePassword(){
  // user input for password length  
  var numberLengthNumber = parseInt(
    prompt("How long would you like your password to be? 8-100"));
    console.log(numberLengthNumber);


  // Checks if the number is a number and not a sting
  if (isNaN(numberLengthNumber) === !true) {
    console.log("correct");
    }
  else {
    alert ("sorry please enter a NUMBER and try again")
  return;
  }

  // checks if number below secified value 
  if (numberLengthNumber <= 100 ) {
    console.log("correct");
  }
  else {
    alert("Sorry " + numberLengthNumber + " is not between 8-100")
  return;
  } 

  // checks if number above secified value
  if (numberLengthNumber > 8) {
    console.log("correct");
  }
  else {
    alert("Sorry " + numberLengthNumber + " is not between 8-100 try again")
  return;}

// User input For if they want uppercase letters 
  var numbersChoiceBool = confirm("Press ok for Numbers in your password if not press Cancel")
  if (numbersChoiceBool == true){
      numbersChoiceBool = true ;
  console.log(numbersChoiceBool);
  }
  else {
    numbersChoiceBool = false
    console.log(numbersChoiceBool)
  }

  //Ask user if they want letter aswell as numbers
  var  userChoiceArray = confirm("Press OK if you would you like to also use Letters if not Cancel")
    if (userChoiceArray == true){
        userChoiceArray = true 
    console.log( userChoiceArray);
    }
    else {
      userChoiceArray[0] = false;
      console.log(userChoiceArray)
    }
    console.log(userChoiceArray)
  // Ask user if they want to use upper and lower case
  var caseChoiceBool = confirm("Press ok for Both UPPER and lower case if you would like only lower case press Cancel")
    if (caseChoiceBool == true){
        caseChoiceBool = true 
    
    console.log(caseChoiceBool);
    }
    else {
    caseChoiceBool = false
      console.log(caseChoiceBool)
    }
    //Asks user if they want Special chars
  var specialCharBool = confirm("Press ok for Both UPPER and lower case if you would like only lower case press Cancel")
    if (specialCharBool == true){
        specialCharBool = true 

    console.log(specialCharBool);
    }
    else {
      specialCharBool = false
      console.log(specialCharBool)
    }

    if  (
      numbersChoiceBool === false && 
      caseChoiceBool === false && 
      letterChoiceBool === false && 
      specialCharBool === false  
      ) {
        alert ("You need to choose at least one Try again" )
        generatePassword()
        console.log("no options selected")
        } 
    
  // 


  }






 

// Make an array of all characters. A - Z
// Make a random number generator in an function. 0 - 9
// Make an array to hold the password values (total output)

// Make a function to choose how long the password will be 8 - 100
// Make a make a function to choose each element from either the letters or numbers randomly 
// Add them all to the array at the end 
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

