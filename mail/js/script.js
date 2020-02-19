/*SCOPO DEL GIOCO:
Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato*/

//FASI
// Creare la lista delle mail valide
// Richiedere all'utente la sua Mail
// Creo ciclo che mi comprenda tutte le mail e imposto condizionali
// Stampare messaggio appropriato

//lista mail
var approvedMail= ['ajeje@brazorf.it', 'paolino@paperino.org', 'vero@rockettaro.it', 'vadavia@iciap.com'];

//prompt verifica Mail
var email = prompt('Inserisci la tua mail:')
console.log(email);

// creo ciclo for con condizione di verità
for (var i = 0; i < approvedMail.length; i++) {
    if (email == approvedMail[i]) {
        var verify = true;
    }
}

//condizionali
if (verify == true) {
  document.getElementById('container1').setAttribute('class', 'visible');
} else {
  document.getElementById('container2').setAttribute('class', 'visible');
}
