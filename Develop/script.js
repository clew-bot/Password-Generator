// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = "!@#$%^&*(){}[]></.,";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var pw = ''
//Create false absolute minimum values for each number, lowercase, uppercase, and special character until they are returned true. //
var minNum = false;
var minLowerCase = false;
var minUpperCase = false;
var minSpecial = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    
  
    personPasswordLength = '';
 
    // This variable will be assigned to the assignment variables from earlier if the box is checked true.
    var personPasswordLength = prompt("How many number of characters do you want for your password. Please pick between 8 and 128.");
    if (!personPasswordLength) {
      //The user must enter valid credentials between 8 and 128. //
      alert("Please enter a number between 8 and 128.");
      generatePassword();
    } if (personPasswordLength < 8 || personPasswordLength > 128) {
      alert("Please choose BETWEEN 8 and 128.")
      generatePassword();
      // Once conditions are met, nest the rest of the function in an else statement.
    }  
    if(confirm("Do you want to use Uppercases in your password?") === true) {
      //Detect whether confirm is true or not. Variables are default set to false, so if true, they will be set to true.
      //This will concatenate the variables (i.e. symbols, numbers, lowercase, uppercase) together if set to true on each if statement.
   
        
       minUpperCase = true
    }
    
    if(confirm("Should we have lowercases in your password?") === true) {
      minLowerCase = true
    }
    
    if(confirm("Numbers too?") === true) {
      minNum = true
    }
    if(confirm("Do you want special characters like '!@#$%^&*(?)'?") === true) {
      minSpecial = true
    }
    if(minUpperCase === false && minLowerCase === false && minNum === false && minSpecial === false) {
    alert("You can't have a password of nothing!")

    }
  
//Set an empty variable, check whether if statements are true using ternary operator, if true then concatenate into the empty variable. //
// The condition is the character, which is an empty string. If minUpperCase is TRUE then we apply it to character using +=, if it's FALSE then we have another empty string. //
  var character = '';
  character += (minUpperCase ? uppercase : '');
  character += (minLowerCase ? lowercase :'');
  character += (minSpecial ? symbols : '');
  character += (minNum ? numbers : '');
  console.log(character);
// The actual password the user will get will be right here. But before we give it to the user we must shorten it using another function. Here the function is called passwordGen.


// This function will take in two parameters, personPasswordLength and character. 

//personPasswordLength is the actual number the user had input for the desired length. 
//character is the variable that has joined all of the declared variables set before the function, only if they are set to true by the if statement.
  pw = passwordGen(personPasswordLength, character);
  console.log(pw);
  return pw;
  
    
// Return the password so the writePassword() function will accept a valid result. 
    
    
    
  }

//Function for getting the amount of characters in the users password //
  function passwordGen(l, character) {
    var pw = ''
    for (var i=0; i < l; i++) {
      //Using math random will give us a random number between 0 and 1, nested inside math floor will round it to the nearest integer. 
      //Multiplied by the character length which is the set of all the numbers/uppercase/lowercase/symbols (only if true) will give us random characters from the character variable. //
      // The password is then assigned to the random character. The first parameter is the actual number the user put in. It will be a number instead of l.
      pw += character.charAt(Math.floor(Math.random() * character.length));

    }
    console.log(pw);
    return pw;
    
  }

  
  //This assignment was very difficult and I had to learn about many things in a short amount of time. Console.log is your best friend. 

  //Script only runs perfectly once. Have to restart in order to get another precise password.