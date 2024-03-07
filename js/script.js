//JSnack 1

// 1
const zucchine = [
  {
    zucchina: 'nera',
    lunghezza: 5,
    peso: 16,
  },
  {
    zucchina: 'romanesco',
    lunghezza: 7,
    peso: 5,
  },
  {
    zucchina: 'fiorentino',
    lunghezza: 9,
    peso: 15,
  },
  {
    zucchina: 'napoletana',
    lunghezza: 11,
    peso: 9,
  },
  {
    zucchina: 'tonde',
    lunghezza: 21,
    peso: 7,
  },
  {
    zucchina: 'trombetta',
    lunghezza: 6,
    peso: 24,
  },
  {
    zucchina: 'pâtisson',
    lunghezza: 15,
    peso: 7,
  },
  {
    zucchina: 'gialla',
    lunghezza: 10,
    peso: 13,
  },
  {
    zucchina: 'rugoso friulano',
    lunghezza: 25,
    peso: 10,
  },
  {
    zucchina: 'Crookneck',
    lunghezza: 14,
    peso: 30,
  },
]

var pesoComplessivo = 0;

// 2
for (var i = 0; i < zucchine.length; i++) {
  // Aggiungi il peso della zucchina corrente al peso complessivo
  pesoComplessivo += zucchine[i].peso;
}

console.log("Il peso complessivo di tutte le zucchine è: " + pesoComplessivo + " grammi.");




//JSnack 2

// 2
// filter restituisce valori che soddisfano una determinata condizione
// Filter restituisce sempre un array
const zucchineMenoDi15cm = zucchine.filter(zucchina => {
  return zucchina.lunghezza < 15;
});
console.log(zucchineMenoDi15cm);
// 2
const zucchinePiuDi15cm = zucchine.filter(zucchina => {
  return zucchina.lunghezza > 15;
});
console.log(zucchinePiuDi15cm);
