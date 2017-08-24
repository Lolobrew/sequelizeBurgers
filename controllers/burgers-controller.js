var express = require ("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var model = require ("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect('/burgers');
});


router.get('/burgers', function(req, res){
    model.Burger.findAll({}).then(function(data){
    res.render('index', {burger_data: data});
  });
});



router.post("/burgers/create", function(req, res) {
  console.log(req.burger_name);
  model.Burger.create({
    name: req.body.burger_name,
  }).then(function(data){
  res.redirect('/');
      console.log(data);
    }); 
});

router.put('/burgers/update', function( req, res){
  model.Burger.update({
    devoured: true
  },{
      where: {
      id: req.body.burger_id
    }
  }).then(function(data){
    res.redirect('/');
    console.log(data);
  });
});

// Export routes for server.js to use.
module.exports = router;