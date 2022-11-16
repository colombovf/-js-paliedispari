let parolaInserita = prompt("Inserisci una parola per scoprire se è palindroma o meno:");
let palindroma_nonpalindroma = verificaPalindroma(parolaInserita);
console.log(palindroma_nonpalindroma);


//-------------------------Creazione di funzioni-------------------------
function verificaPalindroma(stringa) {
    let lunghezza_parola = parolaInserita.length;
    for (let i = 0; i < lunghezza_parola / 2; i ++ ) {
        if (stringa[i] != stringa [lunghezza_parola - 1 -i]) {
            return "Non è palindroma";
        }
    }
    return "E' palindroma";
}
//-------------------------Fine esercizio sulle parole palindrome-------------------------
let numero_inserito = prompt("Inserire un numero da 1 a 5:");
let numero_random = Math.floor(Math.random() * 11 / 2);
console.log(numero_random);