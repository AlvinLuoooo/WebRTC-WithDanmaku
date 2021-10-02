# WebRTC Video Call With Danmaku

This is a light-weight and simple web video call server-side application based on *WebRTC, NodeJS* and *Socket.io*. For the research purpose on improvement of user interaction and usability perspective, we add a chat-focus improvement function called Danmaku. Using this software and the accompanying non-Danmaku version of the software, the experimenter was able to complete a series of experimental questions on whether the Danmaku feature was effective in enhancing the user experience of text chat in Zoom-like software.

For our group project, the research question we majorly focused on is **"Whether interaction by Danmaku and Chat Bubble can improve the user experience of a WebRTC-based application in online education scenarios?"**. However, other researchers could further expand this question to a more general one, using the given add-on function.

Please be noticed, due to our restricted scope of complexity this version of application should be used with a series of experiment rules and instructions to users. Less than 5 peers in the application at the same room are recommended to avoid the performance issue (determined by the performance of the computer hardware of the conference participants).

# What is Danmaku?[^1]
Danmaku (Japanese: 弾幕, Chinese: 弹幕), literally translated as “bullet curtain" or "curtain fire”, is a Japanese term for the subtitle system used by online video platforms, that allows user to post moving comments onto a video as it is playing. These comments are synchronized to the video timeline, and are typically presented as “shooting” across the screen, resembling a barrage. In live environment, the audiences' chat will be real-time broadcasted and rendered in other user's video player.

The usage of Danmaku in online video and livestream platforms (e.g. *Niconico.com* and *Bilibili.com*) significantly improved the interaction experience between peer audiences. We assume this could bring a change to the current situation of Zoom-like software and applications as well, due to the lack of visibility and interactivity of traditional text chat feature.


# Getting Started locally
- Before running, check your NodeJS and NPM is installed by execute 
- `node -v`
- `npm -v`
- If you haven't install them on your computer, follow https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- After installation, in the project directory root:
- Run `npm ci`
- `npm start` or `npm run watch`(*nodemon*)
- Go to http://localhost:3000
- Done!

# Setup with remote environment
We use Heroku to host our web application. https://www.heroku.com/

If you would like to setup this application in a remote environment, we recommend to use Heroku with Automated Certificate Management (ACM) enabled (service charges may apply). This is the simplest way to make sure you could run this application in the valid HTTPS connection. 

Make sure your deployed execution script is using `npm start`.

In `App.js`, the default port setting is `port = process.env.PORT || 3000;`. This means if your deploying execution command passed in a port environment parameter, Node will accept it as the assigned running port; or it would run on port `3000` by default. Make sure your domain's port forwarding is set correctly.

If you are using other web application hosting services or you would like to setup your own server, please make sure you have a valid SSL certificate applied to your domain. This is due to the *Chromium getusermedia API* that used by *WebRTC* requires secure origins. In HTTP connection you can *only* test with localhost and for deployment you would need HTTPS[^2].

# Technical Stack
- HTML+JavaScript+CSS 
- Bootstrap (Styling and UI Elements)
- JQuery (Advanced Styling)
- NodeJS (Runtime Environment)
- ExpressJS (Server Routing) 
- WebRTC (Video Conferencing)
- Socket.io (WebSocket Communication, Signalling server and Chat Handler)
- Danmaku (Danmaku Engine)

# Features
- Multi-participants
- Toggling of video stream
- Toggling of audio stream (mute & unmute)
- Screen sharing
- Text chat
- Danmaku Feature
- Mute individual participant
- Expand participants' stream
- Screen Recording
- Video Recording

# Planned Features (todo-list)
- Danmaku Font Styling customization (now hard written in the createComment callback func.)
- Customize window size of other users
 
# Deployed Application
Application hosted at Heroku: https://webrtc-danmaku.herokuapp.com/.

You could use this hosted application for any research purpose. Please follow the instruction provided in the project. 

If the application is not working, please contact Yujun Zhang (yzha725@aucklanduni.ac.nz).

# Non-Danmaku Version
For the research and experiment convenience, the non-Danmaku version of this app is hosted at: https://webrtc-node-chat.herokuapp.com/

To hide the danmaku canvas, we have provided a switch to show/hide danmaku in the application.

If you would like to hide this feature as hard-written in code, there is a simple way to achieve this.
- Use Text Editor to open `index.html`
- Locate the element `<div id="dm-container">`
- Change the `visibility` in style property to `visibility=hidden` (This hide the danmaku container)
- Remove the whole element `<button id="toogle-danmaku">` (This remove the on/off switch of danmaku)

# Open-Source resources used in this project (GitHub Repo)
NodeJS WebRTC Video Call https://github.com/amirsanni/Video-Call-App-NodeJS from amirsanni

Danmaku Engine https://github.com/weizhenye/Danmaku from weizhenye

AutoLink Tool https://github.com/bryanwoods/autolink-js from bryanwoods

# Disclaimer
This project, and above referred Open-Source resources are licensed under MIT license.

[^1]: https://en.wikipedia.org/wiki/Danmaku

[^2]: https://www.chromium.org/Home/chromium-security/deprecating-powerful-features-on-insecure-origins
