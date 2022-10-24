/* Die Funktionen, Variablen oder Klassen, die man aus einer Datei
exportieren möchte, so dass sie in anderen Dateien importiert werden
können, muss man als "benannte" Exporte (named export) mit export markieren.
*/

export function shuffle(arr) {
  arr.sort(() => 0.5 - Math.random());
  return arr;
}

export function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

/* Jede Datei kann exakt einen default-Export haben,
dieser kann (muss aber nicht) anonym sein. */
export default function () {
  console.log('Ich bin der Default-Export!');
}
