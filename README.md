# LightIntel

## Introduction

This repo is the software part of an intelligent lighting system for family use, which was run on an arm development board with Android 4.4.

Here is a simple *demo*:

![Demo](http://ww3.sinaimg.cn/mw690/a60a3287jw1f56m6vacwyg208t0g9tsf.gif)

It was a Hybrid app based on Apache Cordova, which is a great platform with swift development ability and rich tool chains for debugging. It is also a practise of Google Angular framework with Ionic.

As for the hardware part, I made a cute lampshade with the head of KoroSensei, one of my favorite anime character.![](http://ww4.sinaimg.cn/mw690/a60a3287jw1f56mbr7f34j20um1degrj.jpg)

Inside the lamp are three **300mA-1W** LED in the colors of RGB, respectively, and three PT4115 chips to supply the current and are controled by the PWM signal sent by an Arduino UNO R3. The Arduino was linked to the Android development board via bluetooth.

## How to use

You must have the following dependency installed first:

- Cordova `$ npm install -g cordova`

- Ionic `npm install -g ionic`

- [ngCordova](http://ngcordova.com)

and then install BluetoothSerial plugin with:

`$ cordova plugin add cordova-plugin-bluetooth-serial`

add a platform with:

`$ ionic platform add android`

and then test the result with:

`$ ionic run android -device`

or

`$ ionic run browser`

## License

MIT License
