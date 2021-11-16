const primaParola = prompt("Inserisci la prima parola");
console.log("La parola inserita è: " + primaParola);

function palindroma(parola){
//creo un array vuoto
const arrayPrimaParola = [];

//popolo il mio array vuoto con le lettere, in ordine contrario, della parola inserita dall'utente 
for (i = parola.length - 1; i >= 0; i--) {
    arrayPrimaParola.push(parola[i]);
}
console.log("array con lettere inserite al contrario: " + arrayPrimaParola);

//creo la variabile che conterrà la mia parola processata
let parolaPalindroma = "";
//riempio la mia variabile estraendo le lettere dal mio array
for(i = 0; i < arrayPrimaParola.length; i++) {
    parolaPalindroma = parolaPalindroma +  arrayPrimaParola[i];
}

console.log("Parola scritta al conrario " + parolaPalindroma);

//confronto la parola inserita con la mia variabile
if (parola == parolaPalindroma) {
    return "parola palindroma";
    
}   return "parola non palindroma";
}

const risultato = palindroma(primaParola);

console.log(risultato);