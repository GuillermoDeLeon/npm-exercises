"use strict";
const $ = require('jquery');

$('div').css('background-color', 'yellow');

const sayHello = () => {
    console.log("Hello again test");
};

sayHello();

const niceMessage = require('./say-hello.js');
