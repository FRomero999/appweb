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


module.exports = router;
