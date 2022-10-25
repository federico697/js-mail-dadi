// seleziono l'elemento html input email
let inputEmail = document.getElementById('inputEmail');


// creo array delle email
let emails = ['paolo@email.it', 'andrea@email.it', 'giorgio@email.it']


// variabile soldatino o flag o di controllo
let presenzaEmail = false


// funzione che si attiva al click del bottone
function invioEmail(){
//  recupero il valore dell'input html email
 let valueEmail = inputEmail.value;

//  ciclare tutto l'array per trovare la corrispondenza tra email dell'input e email array
for (let i = 0; i < emails.length; i++ ){
    let thisEmail = emails[i];

    if( valueEmail == thisEmail ){
        // email dell'input è uguale a una email dell'array camcio la variabile soldatino
        presenzaEmail = true;
    }
 }
// controllo presenza o assenza dell'email sulla base dello status della variabile di controllo 
 if(presenzaEmail == true){
    document.getElementById('testo').innerText = "l'email è presente nella lista"
 } else{
    document.getElementById('testo').innerText = "l'email NON è presente nella lista"
 }

}


// ----------------------------------------------------------------------------------
let vittorieGiocatore = [];
let vittorieCpu = [];




let giocatore = Math.round( Math.random() * 6) + 1;

let cpu = Math.round( Math.random() * 6) + 1;


document.getElementById('numGiocatore').innerText = "il numero giocatore è: " + giocatore
document.getElementById('numCpu').innerText = "il numero giocatore è: " + cpu

if(giocatore > cpu){
    document.getElementById('risultato').innerText = `ha vinto giocatore`
    vittorieGiocatore.push('vinto');
} else if(cpu > giocatore) {
    document.getElementById('risultato').innerText = `ha vinto cpu`
    vittorieCpu.push('vinto')
} else{
    document.getElementById('risultato').innerText = `pareggio`
}

document.getElementById('numVittorieGiocatore').innerText = `il giocatore ha vinto : ${vittorieGiocatore.length} volte`
document.getElementById('numVittorieCpu').innerText = `il cpu ha vinto :${vittorieCpu.length} volte`