const primaParola = prompt("Inserisci la prima parola");
console.log(primaParola);

function palindroma(parola){
const arrayPrimaParola = [];

for (i = parola.length - 1; i >= 0; i--) {
    arrayPrimaParola.push(parola[i]);
}
console.log(arrayPrimaParola);

let parolaPalindroma = "";
for(i = 0; i < arrayPrimaParola.length; i++) {
    parolaPalindroma = parolaPalindroma +  arrayPrimaParola[i];
}

console.log(parolaPalindroma);

if (parola == parolaPalindroma) {
    return "parola palindroma";
    
}   return "parola non palindroma";
}

const risultato = palindroma(primaParola);

console.log(risultato);