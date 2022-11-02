// this is to change the text in the initial greeting based on the time of day - NEEDS TO GRAB TIME TO USE AS ARGUMENT
let hourOfDay = new Date().getHours();
console.log(hourOfDay)
function timeBasedGreeting (userDeviceHourOfDay) {
    if (userDeviceHourOfDay >= 4 && userDeviceHourOfDay <= 10) {
        return "morning";
    }
    if (userDeviceHourOfDay >= 11 && userDeviceHourOfDay <= 16) {
        return "afternoon";
    }
    else {
        return "evening";
    }
}
/* If chosen to reduce it, but not needed, maybe even hinder */
let time = (timeBasedGreeting(hourOfDay))
console.log(time)
/* more likely to just use the function name and argument */
console.log(timeBasedGreeting(hourOfDay))
/* had to use below to transfer product of above function into the <span> element section. */
document.getElementById("hello-span").innerHTML = timeBasedGreeting(hourOfDay)


