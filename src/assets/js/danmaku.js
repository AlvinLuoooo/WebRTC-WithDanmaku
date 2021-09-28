//This initiate the Danmaku component
export var danmaku = new Danmaku({
    container: document.getElementById("dm-container"),
    engine: "DOM",
    speed: 144
});
//Callback function for danmaku.emit() in rtc.js
export function createComment(text) {
    return {
        text,
        style: { // styling, should be done by some controllers on interface
            fontSize: '25px',
            background: 'rgb(200, 200, 200, 0.2)',
            font: 'sans-serif',
        }
    }
}

//jQuery to fix the container position
$(document).ready(function () {
    let dmContHeight = window.screen.height - ($('.navbar').outerHeight(true) + 10)
    $("#dm-container").css({
        "margin-top": `${$('.navbar').outerHeight(true) + 10}px`,
        "height": dmContHeight
    })
})