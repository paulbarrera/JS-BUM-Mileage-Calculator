

//TODO: login date//
/*Create and use a function that accepts two or more values,*/ 
/*calculates or determies a new value based on those inputs, and returns a value.*/

let date = new Date();

let formatDate = (date) => {
    let day  = getTwoDigits(date.getDate());
    let month= getTwoDigits(date.getMonth() + 1);
    let year = date.getFullYear();

    return `${month}-${day}-${year}`;
}

document.getElementById('currentDate').value = formatDate(date);

//TODO: Drivers name input//
/*Create a form and save the response (on click of Submit button) to an external file or API*/

//TODO: Input outset and destination odometer readings//

//TODO: Calculate total amount of business usage miles (BUM) driven//

//TODO: Calculate total amount of yearly miles//

//TODO: Divide BUM by yearly total miles

//TODO: Countdown Timer til tax day//
/*Calculate and display data based on an external factor, */
/*(ex: get the current date and display how many many days remaining until some event)*/



    