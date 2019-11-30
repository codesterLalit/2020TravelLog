var express = require('express');
var router = express.Router();

var Users = require('./../models/userModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express',name:'codester' });
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

  router.post('/login',(req, res, next)=>{
    const targetBaseUrl = 'http://localhost:3000/';
    console.log(req.body);
    Users.findOne({username:req.body.username, user_password:req.body.user_password}).then((doc)=>{
     if(doc)
     {
       targetUrl = targetBaseUrl+'dashboard'
      res.redirect(targetUrl);
     }
     else{
      res.redirect(targetBaseUrl);
     }
   })
  .catch((err)=>{
      console.log(err);
  });
  })

module.exports = router;
