var galeria = require("./data.json");
var carta = require("./carta.json");

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


module.exports = {
    getGalleryData,
    getAllCarta,
    getItemCarta
}