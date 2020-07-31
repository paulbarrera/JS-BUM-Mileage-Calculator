
// TODO: Drivers name input//
// /*Create a form and save the response (on click of Submit button) to an external file or API*//
function validation() {

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

        if (name=='' || password=='' || email=='')
        {

            document.getElementById("eresult").innerHTML = "Email field Required";
            return false;

        }

        else if(name.length<4){
            document.getElementById("eresult").innerHTML = "Name must be at least 4 characters";
            return false;

        }

        else if(name.length<6){
            document.getElementById("eresult").innerHTML = "Paasword must be at least 6 characters";
            return false;
        }
        else {

          return true;
        }
        }

// TODO: login date//
// returns a string and the login date//

// //TODO: Countdown Timer til tax day//
// //(ex: get the current date and display how many many days remaining until some event//

var countDownDate = new Date("April 15, 2021 15:37:25").getTime();

var x = setInterval(function() {

  // Get todays date and time//
  var now = new Date().getTime();

  // Find the distance between now and the count down date//
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds//
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = "<h1>" + days + " <span> days </span>: " + hours + "    <span>hours</span>: " + minutes + " <span>minutes </span>: <font color='red'>" + seconds + "<span> s</span></font> </h1>";

  // If the count down is finished//
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


