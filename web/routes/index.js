var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");


/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('home', {head_title: "Principal"});
});


router.get('/celebraciones', function(req, res, next) {
  res.redirect("/celebraciones.html");
});


router.get('/contacta-con-nosotros', function(req, res, next) {
  res.render("contacto", {head_title: "Contacto"});
});

router.get('/contact-with-us', function(req, res, next) {
  res.redirect("/contacto.html");
});

router.get('/galeria', function(req, res, next) {
  const imagenes = datos.getGalleryData()
  res.render("galeria",{head_title:"Galerias de imágenes", imagenes:imagenes});
});

router.get('/carta', function(req,res){
  const carta = datos.getAllCarta();
  res.render("carta",{carta:carta});
});

router.get('/carta/:id',function(req,res){
  const plato = datos.getItemCarta(req.params.id);
  res.send(plato);
});

router.get('/debug/:category/:id', function(req, res, next) {
  console.log(req.body);
  console.log(req.hostname);
  console.log(req.params);
  console.log(req.query);
  res.send("ok");
});


module.exports = router;
