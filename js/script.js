// Richiesta distanza da percorrere
var distanza = parseInt(prompt('Quanti Km devi percorrere?'));
// Richiesta età dell'utente
var età = parseInt(prompt('Quanti anni hai?'));
// Calcolo costo del biglietto in base alla tariffa di 0.21€/Km
var prezzoBiglietto = distanza * 0.21;
// Eventuale sconto per minorenni
var scontoMinorenni = ((prezzoBiglietto*20)/100);
// Eventuale sconto per over-65
var scontoOver65 = ((prezzoBiglietto*40)/100);

// Calcolo Totale
if (età < 18) {
  var prezzoBigliettoScontato = (prezzoBiglietto - scontoMinorenni).toFixed(2);
  document.getElementById('totale').innerHTML="Il costo del suo biglietto è: €"+prezzoBigliettoScontato;
} else if (età >= 65) {
  var prezzoBigliettoScontato = (prezzoBiglietto - scontoOver65).toFixed(2);
  document.getElementById('totale').innerHTML="Il costo del suo biglietto è: €"+prezzoBigliettoScontato;
} else {
  document.getElementById('totale').innerHTML="Il costo del suo biglietto è: €"+prezzoBiglietto;
}
