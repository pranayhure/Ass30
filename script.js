let state = false;
function bulb_on_off() {
    if (state == false) {
        console.log("on");
        document.getElementById("bulb1").src = "on.png";
        document.getElementById("bulb_name").innerText = "OFF";
        state = true;
    }
    else {
        document.getElementById("bulb1").src = "off.png";
        document.getElementById("bulb_name").innerText = "ON"
        state = false;
    }
    console.log(`Out The If/else state is ${state}`);
}

function lightmode() {

    const body_bg = document.getElementById("body-color")
    body_bg.classList.remove("darkColor")
    body_bg.classList.add("lightColor")


}

function darkmode() {
    const body_bg = document.getElementById("body-color")
    body_bg.classList.remove("lightColor")
    body_bg.classList.add("darkColor")

   
}