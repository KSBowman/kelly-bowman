// this is to change the text in the initial greeting based on the time of day
let hourOfDay = new Date().getHours();
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
document.getElementById("hello-span").innerHTML = timeBasedGreeting(hourOfDay);