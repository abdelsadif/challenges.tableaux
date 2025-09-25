const prompt = require("prompt-sync")()

let tab = [];
for (let i=0 ; i<3 ; i++) {
    let CH = prompt("entrer la chaine de caractère N° "+(i+1)+" : ");
    tab.push(CH);
}

let R = prompt("quelle est le mot recerché : ");
let T = false;
let P = -1;

for (let i=0 ; i<tab.length ; i++){
    if (tab[i]===R){
        T = true;
        P = i+1;
        break;
    }
}

if (T){
    console.log("le mot que vous cherchez se trouve dans la case : ",P);
}
else{
    console.log("le mot que vous chercher ne se trouve pas dans le tableau :")
}