const prompt = require("prompt-sync")()

let tab = [];

for (let i = 0; i<5 ;i++){
    let saisie = +prompt("enter l'entier n° :"+(i+1)+":");
    tab.push(saisie); 
}

let reversed = tab.reverse();

console.log("les entiers saisie sont : ",tab);
console.log("le tableau inversé ", reversed);
