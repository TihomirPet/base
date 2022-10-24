/* Dateien, die als Modul geladen werden, sind automatisch im strict mode. */

/* Möchte man Funktionen oder Variablen oder Klassen aus
anderen Dateien nutzen, importiert man sie, in dem man
in den geschweiften Klammern den Namen aufführt, der beim
export verwendet wird.
Wichtig: Importe immer am Anfang der Datei machen, und auf
oberster Ebene, also z.B. nicht in einem if-Block oder einer
Funktion. */
import { shuffle, fahrenheitToCelsius } from './helpers.js';

/* Der Name des default-Exports kann und muss beim importieren frei gewählt
werden. */
import myName from './helpers.js';

/* 
Man kann mit Komma getrennt auch in einer Zeile den default-Export
importieren und danach benannte Exporte importieren.
Benannte Importe können mit as umbenannt werden.
*/
import mathDefault, { add, subtract as minus, magicNumber } from './math.js';

// Variablen, Funktionen, Klassen etc. sind nicht im globalen Namensraum
const test = 'Hallo';

// console.log(document.querySelector('h1').innerHTML);

console.log(shuffle([1, 2, 3, 4]));

console.log(fahrenheitToCelsius(100));

myName();

console.log(minus(5, 3));
mathDefault();
console.log(magicNumber);
