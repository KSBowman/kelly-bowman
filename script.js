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

/***********************************************************************************************************************/
/* theme selector */
/*BASE CODE PULLED FROM https://codepen.io/kevinpowell/pen/MWXybWJ, AUTHORED BY KEVIN POWELL*/

const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    // fallback for no :has() support
    // document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        storeTheme(themeOption.id);
    });
});

document.onload = setTheme();
