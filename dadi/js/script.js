/*SCOPO DEL GIOCO
Gioco dei dadi, chi fa di più vince*/

//Inserisco prompt per nome giocatori
//Inserisco numeri possibili per ogni dado


/*giocatori*/
var giocatoreUno = prompt('Giocatore 1: inserisci il tuo nome:')
var giocatoreDue = prompt('Giocatore 2: inserisci il tuo nome:')

document.getElementById('primo-nome').innerHTML = giocatoreUno;
document.getElementById('secondo-nome').innerHTML = giocatoreDue;

/*numeri dadi*/
var dadiUno = Math.floor(Math.random() * 12) + 1;
var dadiDue = Math.floor(Math.random() * 12) + 1;
console.log(dadiUno);

document.getElementById('lancio').innerHTML = dadiUno;
document.getElementById('lancio2').innerHTML = dadiDue;
