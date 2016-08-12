var express = require('express');
var router = express.Router();

var peeps = [];

function Peep(name, bio, url) {
    this.name = name,
        this.bio = bio,
        this.url = url
};

var kim = new Peep('Kim', 'Kim is gone at Summer Set', '../server/assets/images/Kim.jpg');
var keri = new Peep('Keri', 'Keri has minions! (children)', '../server/assets/images/Keri.jpg');
var joe = new Peep('Joe', 'Joe likes coffee', '../server/assets/images/Joe.jpg');
var harry = new Peep('Harry', "Harry won't shut up about Fuzzers", '../server/public/assets/images/Harry.jpg');
var ray = new Peep('Ray', 'Ray has colorful hair', '../server/public/assets/images/Ray.jpg');

router.post('/', function (req, res){
  var bio = req.body;
  peeps.push(kim, keri, joe, harry, ray);
  console.log(peeps);

  res.sendStatus(200);
});

router.get('/', function (req, res){

  res.send(peeps);
});

module.exports = router;
