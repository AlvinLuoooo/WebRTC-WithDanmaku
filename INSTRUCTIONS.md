# Application Guidence
Click on the link hosted at Heroku: https://webrtc-danmaku.herokuapp.com/ and a create room webpage will show.

(No Danmaku Version: https://webrtc-node-chat.herokuapp.com/)

Enter the room name and your name which will display in the chat.

Click on the Create Room button then go to the website. 

Remember to share the link with others who will participate in the meeting.

# Functions in the chat
On the top-right side you will see few buttons that represent different functions of the chat room:
- Hide or show Danmaku
- Hide or show your video
- Mute or unmute your microphone
- Share your screen with the other participants
- Record the meeting
- Post your message
- Exit the room

Besides, when you move your mouse over other participants' video, you will see two buttons that allow you to mute them or expand their video.

# Danmaku using in the chat
When you send messages in the chat box, the message will automatically display on all participants' screen from right to left. The chat box will also display the message sender and the exact time when the message is sent.

# Code interpretation and modification
If you want to apply and modify the application for your own purpose, following explanations will be useful. All files in the js folder contains all the functions of the front-end.

# app.js 
The entry point of this web application. When user visits the domain, this code would be excuted and send the index.html flie to user.

 Here, basic ExpressJS routing service and Socket.io Signaling server would be served. 
 
 app.js is where NodeJS and ExperessJS are configured and the application is initialised. The server port on which the application will run is set here. 
 
 If you have other application running on the port 3000 then you may need to change the port when you are running the application locally. 

# index.html
The basic webpage that is sent to user. Event on this page would be bind and run with followed JS scripts. All texts, buttons, containers and input boxes displayed in the website are written in this file. 

# rtc.js
All basic RTC related service codes. RTC connections between users are established here using RTCPeerConnection API. 

Chat function here is implemented with Socket.io data channel to better work with the Danmaku engine, as Danmaku service is based on Socket.io data connection, too. 

# helper.js
Most utility functions we used in this application are implemented in helper.js. getUserMedia API is called here to gather user media sources. Some other helper functions such as toggle mute or video size adjustment are implemented here as well.

Things need to mentioned here are:

If you want to change the message display type in the chat box, you can change the following codes in `addChat( data, senderType )` function.

        let infoDiv = document.createElement( 'div' );
        infoDiv.className = 'sender-info';
        infoDiv.innerText = `${ senderName } - ${ moment().format( 'Do MMMM, YYYY h:mm a' ) }`;

If you want to change the video size of each participants, you need to change the following codes of `adjustVideoElemSize()` function.

    adjustVideoElemSize() {
        let elem = document.getElementsByClassName( 'card' );
        let totalRemoteVideosDesktop = elem.length;
        let newWidth = totalRemoteVideosDesktop <= 2 ? '50%' : (
        '''

# events.js
It handle the events such as toggle chat panel, create room and enter room. The event listener of remote-video-controller is located here as well (line 110-118).

If you want to change the message displayed when you have created the chat room, customize the words in the ` document.getElementById( 'create-room' ).addEventListener( 'click', ( e )` part in events.js.

    //show message with link to room
            document.querySelector( '#room-created' ).innerHTML = `Room successfully created. Click <a href='${ roomLink }'>here</a> to enter room. 
            Copy and share the room link with your partners!
            ${ roomLink }`;

# Danmaku.js
For danmaku.js, it has the functions of initiating the Danmaku component which shows below.

    export var danmaku = new Danmaku({
    container: document.getElementById("dm-container"),
    engine: "DOM",
    speed: 200
    });

If you want to customize the Danmaku message, you can change the font style, font size, font color, background color and text shadow in the `createComment(text)` function.

    background: 'rgb(200, 200, 200, 0.3)',
    font: 'sans-serif',
    fontSize: '25px',
    color: '#ffffff',
    textShadow: '-1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000'


The following codes use jQuery to fix the container position. When there are multiple videos showing in the website and the user need to scroll the screen, the Danmaku message will always show on the top of screen.

    $(document).ready(function () {
        let dmContHeight = window.screen.height - ($('.navbar').outerHeight(true) + 10)
            $("#dm-container").css({
            "margin-top": `${$('.navbar').outerHeight(true) + 10}px`,
            "height": dmContHeight
        })
    })

For a detailed Danmaku Engine API, visit the original repo https://github.com/weizhenye/Danmaku. 

# autolink.js
autolink-js is a small (about half a kilobyte), simple, and tested JavaScript tool that takes a string of text, finds URLs within it, and hyperlinks them. (By bryanwoods)

# stream.js
Simple backend Socketio Signaling server.

# app.css
Styling sheet of the application webpage.

In app.css, you can change the style of elements in the application, including chat font, chat size, container size and etc.

Chat message customize:

    #chat-messages{
        height: 70vh;
        margin-bottom: 20px;
        overflow-x: hidden;
        overflow-y: auto;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* IE 10+ */
    }
Chat box customize:

    .chat-box{
        bottom: 30px;
        right: 0;
        position: absolute;
        border: 0;
        border-top: 1px groove white;
        border-left: 1px groove white;
        font-size: small;
    }
Chat message customize:

    .msg{
        font-weight: 400;
        font-size: 15px;
        color: black;
        background-color: wheat;
    }
