# LightIntel

## Introduction

This is the software part of an intelligent lighting system for family use, which was run on an arm development board with Android 4.4.

Here is a simple *demo* of the useage:

![Demo](http://ww3.sinaimg.cn/mw690/a60a3287jw1f56m6vacwyg208t0g9tsf.gif)

It was an Android app based on Cordova, which is really quick to develop and easy to debug.

As for the hardware part, I made a lampshade with the head of KoroSensei, it quite fit, to be honest.![](http://ww4.sinaimg.cn/mw690/a60a3287jw1f56mbr7f34j20um1degrj.jpg)

Inside the lamp are three **300mA-1W** LED in the color of RGB, and three PT4115 chip to supply the current and controled by the PWM signal sent by Arduino UNO R3. The Arduino was linked to the development board via bluetooth.

## How to use

You must install the following first:

- Cordova

- Ionic

- ngCordova

and install BluetoothSerial plugin with:

`$ cordova plugin add cordova-plugin-bluetooth-serial`

add a platform with:

`ionic platform add android`

and then test the result with:

`ionic run android -device`

or

`ionic run browser`

## Lincense

MIT License