/* NPM-Module werden ohne Pfad (nur mit Modulname) importiert,
üblicherweise vor den selbstgeschriebenen Modulen. (Auch die
Dateiendung fällt weg, hier hat das Modul nur .js im Namen. ) */
import length from 'length.js';

/* Selbstgeschriebene Module werden normal mit Pfadangabe importiert,
man kann nur auf Wunsch die Dateiendung weglassen.
Achtung: Kein gültiger JavaScript-Syntax, funktioniert ohne Dateiendung
nur, wenn man einen Bundler nutzt.
*/
import { add } from './math';

console.log(add(2, 6));

console.log(length(100, 'cm').to('in'));

const person = {
  name: 'Jonathan',
};

console.log(person.age ?? 'Alter Unbekannt');
