//Inizio generatore di password
var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');
var colorePreferito = prompt('Qual è il tuo colore preferito?');
var annoCorrente = ('19');

// Comandi di debug per visualizzare che tutto funzioni correttamente
console.log(nome);
console.log(cognome);
console.log(colorePreferito);
console.log(annoCorrente);
//Fine comandi di debug

// Output cambiando HTML per visualizzazione nel browser
document.getElementById('password').innerHTML = nome + cognome + colorePreferito + annoCorrente;
