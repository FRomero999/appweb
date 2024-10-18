var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let h1text = "Restaurante Viva María - El Palo";
  if(req.query.title){
    h1text = req.query.title;
  }
  res.render('home', {titulo: h1text});
});


router.get('/celebraciones', function(req, res, next) {
  res.redirect("/celebraciones.html");
});


router.get('/contacta-con-nosotros', function(req, res, next) {
  res.redirect("/contacto.html");
});

router.get('/contact-with-us', function(req, res, next) {
  res.redirect("/contacto.html");
});

router.get('/galeria', function(req, res, next) {
  res.redirect("/galeria.html");
});

router.get('/debug/:category/:id', function(req, res, next) {
  console.log(req.body);
  console.log(req.hostname);
  console.log(req.params);
  console.log(req.query);
  res.send("ok");
});


module.exports = router;
