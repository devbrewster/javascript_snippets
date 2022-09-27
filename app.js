// Simple if & else if statement 
var driverAge = prompt("Please enter your age to determine if you can drive")

if (Number(driverAge) < 18) {
    alert("Sorry, you are too young to drive this car. Powering Off!!!");
} else if (Number(driverAge) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!!!");
} else {
    alert("Powering On. Enjoy the ride!!!"); 
}
//-----------------------------------------------------------------------------------------------
// function
function checkDriverAge() {
    var driverAge = prompt("Please enter your age to determine if you can drive");
        if (Number(driverAge) < 18) {
            alert("Sorry, you are too young to drive this car. Powering Off!!!");
        } else if (Number(driverAge) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!!!");
        } else {
          alert("Powering On. Enjoy the ride!!!");
        }
}

//-----------------------------------------------------------------------------------------------
