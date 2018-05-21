var Board = require('firmata')
var arduino = new Board('/dev/cu.usbmodemFD121');
var io = require('./io')

arduino.on('ready', function(){
  console.log("Arduino connected");
  arduino.setSamplingInterval(1000);
  arduino.analogRead(0, function(value) {
    celsius=(5*value*100)/1024;
    farenheit=celsius*(9/5)+32;
    io.emit('read', value);
    io.emit('celsius', celsius);
    io.emit('farenheit', farenheit);

  });
})

module.exports = arduino;
