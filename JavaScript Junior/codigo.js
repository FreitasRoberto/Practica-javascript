"use strict";

const definirCompra= (n)=>{
    let din = prompt(`Dinero de ${n}`);
    if(din >= 0.6 && din < 1) return (`${n}:Refresco de Coca Cola`);
    if(din >= 0.6 && din < 1) return (`${n}:Refresco de Fanta`);
    if(din >= 0.6 && din < 1) return (`${n}:Té`);
    if(din >= 0.6 && din < 1) return (`${n}:Refresco de Pepsi`);
    if(din >= 0.6 && din < 1) return (`${n}:Refresco de Fanta`);
    if(din >= 0.6 && din < 1) return (`${n}:Refresco de Clipper o una Caña`);
    else return (`${n}: No te alacanza para ningún refresco`);
}
 console.log(definirCompra("Keyla"));
 console.log(definirCompra("Armando"));
 console.log(definirCompra("Silvana"));
 











