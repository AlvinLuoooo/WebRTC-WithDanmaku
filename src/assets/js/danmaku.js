//This initiate the Danmaku component
export var danmaku = new Danmaku({
    container: document.getElementById("dm-container"),
    engine: "DOM",
    speed: 200
});

//Callback function for danmaku.emit() in rtc.js
export function createComment(text) {
    return {
        text,
        style: { // styling, can be done by some controllers on interface
            background: 'rgb(200, 200, 200, 0.3)',
            font: 'sans-serif',
            fontSize: '25px',
            color: '#ffffff',
            textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000'
        }
    }
}

//jQuery to fix the container position even user scroll the screen
$(document).ready(function () {
    let dmContHeight = window.screen.height - ($('.navbar').outerHeight(true) + 10)
    $("#dm-container").css({
        "margin-top": `${$('.navbar').outerHeight(true) + 10}px`,
        "height": dmContHeight
    })
})