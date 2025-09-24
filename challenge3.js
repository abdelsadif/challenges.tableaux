const prompt = require("prompt-sync")()

let tab = [];

for (let i=0 ; i<8 ; i++) {
    let N = +prompt("entrer l'entier "+(i+1)+" : ");
    tab.push(N);
}

let R = +prompt("quel est le nombre à rechercher ? : ");

let T = false;
let P = -1;

for (let i=0 ; i<tab.length ; i++){
    if (tab[i]=== R ){
        T = true;
        P = i+1;
        break;
    }
}

if (T){
    console.log("le nombre recherché se trouve dans position : ",P);
} else{
    console.log("le nombre recherché n'est pas dans le tableau ");
}