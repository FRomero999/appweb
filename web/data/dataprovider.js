var galeria = require("./data.json");
var carta = require("./carta.json");
var contactos = require("./messages.json");
var usuarios = require("./users.json");

function getGalleryData(){
    return galeria;
}

function getAllCarta(){
    return carta;
}

function getItemCarta(id){
    const item = carta.filter( (a) => { return(a.id==id)} );
    return item[0];
}

function getAllContactos(){
    return contactos;
}

function addContacto(nombre, email, mensaje, info){
    contactos.push(
        {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fecha: new Date(),
            info: info
        }
    )
}

function validateUser(email,password){
    let u = usuarios.filter(
        (u)=>{
            return( (u.email==email) && (u.password==password) )
        }
    )
    if(u.length>0)
        return u[0]
    else
        return null
    
}

module.exports = {
    getGalleryData,
    getAllCarta,
    getItemCarta,
    getAllContactos,
    addContacto,
    validateUser
}