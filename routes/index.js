var express = require('express');
var router = express.Router();
var arduino = require('../sensor');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Temperature sensor' });
  res.send({
    message: "Temperature in celsius",
    value : celsius
  })
});

router.get('/celsius', function(req, res, next){
  res.send({
    message: "Temperature in celsius",
    value : celsius
  })
})

router.get('/farenheit', function(req, res, next){
  res.send({
    message: "Temperature in farenheit",
    value : farenheit
  })
})

router.post('/http', function(req, res, next){
  if(req.body.pin){
    arduino.digitalWrite(req.body.pin, req.body.status)
    res.send(req.body)
  }
  else {
    res.send({
      error : "Invalid Requests"
    })
  }

})

module.exports = router;
