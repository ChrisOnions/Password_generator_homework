var password = "";
//String of uppercase letters
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRXTUVWXYZ";
//split the letters into an individual array
upperCaseLetters = upperCaseLetters.split("");
//String of lowercase letters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
//split the letters into an individual array
lowerCaseLetters = lowerCaseLetters.split("");
// String of all special characters
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//split the Special characters into an individual array
specialCharacters = specialCharacters.split("");
// Numbers variable 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// vadiable to store the number length
var numberLengthNumber;

// Function to ask questions for password generation
function generatePassword() {
  // user input for password length  
  numberLengthNumber = parseInt(
    prompt("How long would you like your password to be? 8-100"));
  console.log(numberLengthNumber);

  // Checks if the number is a number and not a sting
  if (isNaN(numberLengthNumber) === !true) {
    console.log("correct");
  }
  else {
    alert("sorry please enter a NUMBER and try again")
    return;
  }

  // Checks if number below secified value 
  if (numberLengthNumber <= 100) {
    console.log("correct");
  }
  else {
    alert("Sorry " + numberLengthNumber + " is not between 8-100")
    return;
  }

  // checks if number above secified value
  if (numberLengthNumber >= 8) {
    console.log("correct");
  }
  else {
    alert("Sorry " + numberLengthNumber + " is not between 8-100 try again")
    return;
  }
  var choicesArray = [];
  // User input For if they want uppercase letters 
  var numbersChoiceBool = confirm("Press ok for Numbers in your password if not press Cancel")
  if (numbersChoiceBool == true) {
    choicesArray = choicesArray.concat(numbers)
    console.log(numbersChoiceBool);
  }
 
  var userChoiceBool = confirm("Press OK if you would you like to use Lower Case Letters if not Cancel")
  if (userChoiceBool == true) {
    choicesArray = choicesArray.concat(lowerCaseLetters)
    console.log(userChoiceBool);
  }

  var caseChoiceBool = confirm("Press ok for Both UPPER and lower case if you would like only lower case press Cancel")
  if (caseChoiceBool == true) {
    choicesArray = choicesArray.concat(upperCaseLetters)
    console.log(caseChoiceBool);
  }
 
  var specialCharBool = confirm("Press ok for Special Characters if not  press Cancel")
  if (specialCharBool == true) {
    choicesArray = choicesArray.concat(specialCharacters)
    console.log(specialCharBool);
  }

  //
  if (
    numbersChoiceBool === false &&
    caseChoiceBool === false &&
    userChoiceBool === false &&
    specialCharBool === false
  ) {
    alert("You need to choose at least one Try again")
    console.log("no options selected")
    return;
    //
  }
  console.log(choicesArray)
  for (var i = 0; i < numberLengthNumber; i++) {
    var item = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    password += item;
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var arrayGen = createSizeArray();
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
