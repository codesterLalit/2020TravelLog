var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary');


var Users = require('./../models/userModel');



cloudinary.config({
  cloud_name: 'codester47',
  api_key: '383616613174939',
  api_secret: 'wHFQ1sPzofWNop1kdo8-7XUogfc'
  });


/* GET home page. */
router.get('/creatediary', function(req, res, next) {
  res.render('postdiaries', { title: 'Express',name:'codester' });
});

router.get('/addplace', function(req, res, next) {
    res.render('postplaces', { title: 'Express',name:'codester' });
  });


  router.post('/creatediary',function(req, res, next){
    exports.uploads = (file) =>{
      return new Promise(resolve => {
      cloudinary.uploader.upload(file, (result) =>{  
      resolve({url: result.url, id: result.public_id})
      }, {resource_type: "auto"})
      })
      }
  })


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
