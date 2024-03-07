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

let pesoComplessivo = 0;

// 2
for (let i = 0; i < zucchine.length; i++) {
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
  return zucchina.lunghezza >= 15;
});
console.log(zucchinePiuDi15cm);

// 3
// zucchina.peso perchè io voglio accedere al peso di ogni singola zucchina, non al peso dell'intero array
// il primo parametro di reduce() serve come un'accumulazione dei risultati ottenuti su ciascun elemento dell'array attraverso le varie iterazioni
let pesoVuoto = 0;
const totalePesoMenoDi15cm = zucchineMenoDi15cm.reduce((sommaPeso, zucchina) =>{
  return sommaPeso + zucchina.peso;
}, pesoVuoto);

console.log('snack 2',zucchineMenoDi15cm);

console.log(totalePesoMenoDi15cm);


const totalePesoPiuDi15cm = zucchinePiuDi15cm.reduce((sommaPeso, zucchina) =>{
  return sommaPeso + zucchina.peso;
}, 0);
// 0 è il contatore

console.log(totalePesoPiuDi15cm);



//JSnack 3
function saluto(ciao) {
  console.log(ciao);

  var caratteri = ciao.split('');
  var caratteriInvertiti = caratteri.reverse();
  var stringaInvertita = caratteriInvertiti.join('');

  console.log(stringaInvertita);
  return stringaInvertita;
  
};

saluto('ciao');



// JSnack 4
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3,];
const newArray = [];

function unireArray(){
  for(let i = 0; i < array1.length; i++){
    newArray.push(array1[i]);
    newArray.push(array2[i]);
}
}

unireArray()
console.log(newArray);

