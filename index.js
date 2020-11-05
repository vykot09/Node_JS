const personObjektum = require('./person');
const dataObjektum = require('./data');

const szemely = new personObjektum.Figura('Zsákos Bilbo', 130);

szemely.greetings();

personObjektum.feldolgoz();

personObjektum.kiir();
console.log(`A szám: ${personObjektum.szam}`);

console.log(`Nemrég elhunyt színész: ${dataObjektum.adatTomb[0]}, kora ${dataObjektum.adatTomb[1]}`);
