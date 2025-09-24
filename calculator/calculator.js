var display = document.getElementById("display");

function showDisplay(value) {
    if (display.value == ".") {
        display.value = "0.";
    } else {
        display.value += value;
    // Limit display length to 16 characters
    if (display.value.length > 16) {
        display.value = display.value.slice(0, 16);
    }
}
}
function clearAll() {
    display.value = "";
}

function result() {
    let result = eval(display.value);
    display.value = result;

    if (display.value == `undefined` || display.value == `Infinity`) {
        display.value = "Error";
    }
}
