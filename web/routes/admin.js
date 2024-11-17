var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");



/* Rutas de administración */

router.get('/',function(req,res){
  if(req.session.login)  res.render("admin/admin", { user:req.session.user });
  else res.redirect("/login");
});


router.get('/mensajes',function(req,res){
  console.log( datos.getAllContactos() );
  if(req.session.login)  res.render("admin/mensajes", { user:req.session.user, mensajes:datos.getAllContactos() });
  else res.redirect("/login");
});

router.get('/carta',function(req,res){
  if(req.session.login)  res.render("admin/carta", { user:req.session.user, carta:datos.getAllCarta() });
  else res.redirect("/login");
});

router.post('/carta',function(req,res){
  if(req.session.login){
    console.log(req.body);
    let plato = {
      "id": req.body.id,
      "nombre": req.body.nombre,
      "precio": req.body.precio,
      "imagen": req.body.imagen,
      "descripcion": req.body.descripcion,
      "disponibilidad": req.body.disponibilidad,
      "categoria": req.body.categoria
    };
    datos.addItemCarta(plato);
    res.redirect("/admin/carta");
  }
  else res.redirect("/login");
});



module.exports = router;
