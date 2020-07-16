

//TODO: login date//

let date = new Date();

let formatDate = (date) => {
    let day  = getTwoDigits(date.getDate());
    let month= getTwoDigits(date.getMonth() + 1);
    let year = date.getFullYear();

    return `${month}-${day}-${year}`;
}

document.getElementById('currentDate').value = formatDate(date);

//TODO: drivers name input//

//TODO: Input outset and destination odometer readings//

//TODO: Calculate total amount of business usage miles (BUM) driven//

//TODO: Calculate total amount of yearly miles//

//TODO: Divide BUM by yearly total miles

//TODO: Countdown Timer til tax day//



    