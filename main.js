
// TODO: login date//
// returns a string and the login date//
import { createInterface } from 'readline';
//input/output coming from the terminal//
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('are you driving today? ', (answer) => {
// TODO: Log the answer in a database
const date = new Date();
  console.log("great, let's drive!");
  console.log("Lets start logging your driving on " + date);

  rl.close();
});

// TODO: Drivers name input//
// /*Create a form and save the response (on click of Submit button) to an external file or API*/


// //TODO: Countdown Timer til tax day//
// //(ex: get the current date and display how many many days remaining until some event//

// //Caluculate the time remaining//
// //Display the clock on page when it reached the end//
// //function that takes a string, calculates the difference between endtime and current time//
