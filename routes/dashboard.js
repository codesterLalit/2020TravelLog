var express = require('express');
var router = express.Router();

var Users = require('./../models/userModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Express',name:'codester' });
});

router.post('/user', (req,res, next)=>{
  console.log("consoling..")
  console.log(req.body);
  var NewUser= new Users(req.body);
  NewUser.save().then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });;
  });


module.exports = router;
