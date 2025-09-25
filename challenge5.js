const prompt = require("prompt-sync")()

let tab = [];

for (let i=0 ; i<7 ; i++){
    let nombre = +prompt("entrer l'entier "+(i+1)+" : ");
    tab.push(nombre);

}

console.log("la valeur maximum est : ",Math.max(...tab));
console.log("la valeur minimum est : ",Math.min(...tab));
