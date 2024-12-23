var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");


router.get('/', function(req, res, next) { 
  res.render('home', {head_title: "Principal"});
});


router.get('/celebraciones', function(req, res, next) {
  res.redirect("/celebraciones.html");
});


router.get('/contacta-con-nosotros', function(req, res, next) {
  res.render("contacto", {head_title: "Contacto"});
});

router.post('/contacta-con-nosotros', function(req, res, next) {
  console.log( req.body )
  datos.addContacto( req.body.nombre, req.body.email, req.body.mensaje, req.body.info );
  res.redirect('/contacta-con-nosotros');
});

router.get('/contactos', function(req, res, next) {
  res.send( datos.getAllContactos() );
});

router.get('/galeria', function(req, res, next) {
  const imagenes = datos.getGalleryData()
  res.render("galeria",{head_title:"Galerias de imágenes", imagenes:imagenes});
});

router.get('/carta', function(req,res){
  const carta = datos.getAllCarta();
  res.render("carta",{head_title:"Carta del restaurante",carta:carta});
});

router.get('/carta/:id',function(req,res){
  const plato = datos.getItemCarta(req.params.id);
  res.send(plato);
});



/* Rutas del login */


router.get('/login',function(req,res){
  res.render("login",{head_title:"Login"})
});


router.post('/login',function(req,res){
  const email = req.body.email;
  const pass = req.body.password;
  
  let user = datos.validateUser(email,pass);
  
  console.log(user);

  if(user){
    req.session.login = true;
    req.session.user = user;
    res.redirect("/admin");
  }
  else res.redirect("/login");
});

router.get('/logout',function(req,res){
  req.session.login = false;
  req.session.user = null;
  res.redirect("/");
});


/* Otras rutas */

router.get('/debug/:category/:id', function(req, res, next) {
  console.log(req.body);
  console.log(req.hostname);
  console.log(req.params);
  console.log(req.query);
  res.send("ok");
});

router.get('/bootstrap',function(req,res){
  res.render("bootstrap",{title:"Bootstrap"});
});


module.exports = router;
