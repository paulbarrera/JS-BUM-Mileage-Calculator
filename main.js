import { createInterface } from 'readline';
const readlineInterface = createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, _reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// TODO: Drivers name input//
// /*Create a form and save the response (on click of Submit button) to an external file or API*/
async function main() {

    const name = await ask("What's your full name? ")
    const drive = await ask("Ready to drive? ");
    const email = await ask("What's your email address? ");
    const user = { name, drive, email };
    console.log(user);
  process.exit();
}
//call the function//
main();

// TODO: login date//
// returns a string and the login date//

// //TODO: Countdown Timer til tax day//
// //(ex: get the current date and display how many many days remaining until some event//

// //Caluculate the time remaining//
// //Display the clock on page when it reached the end//
// //function that takes a string, calculates the difference between endtime and current time//