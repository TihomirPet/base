/* 
Node hat ein eigenes Modulsystem namens "CommonJS"
*/

/* NPM-Module werden ohne Pfad (nur mit Modulname) importiert,
üblicherweise vor den selbstgeschriebenen Modulen. (Auch die
Dateiendung fällt weg, hier hat das Modul nur .js im Namen. ) */
const length = require('length.js');

const myDefaultExport = require('./node-module');

const { myFunction } = require('./node-module');

myDefaultExport();
myFunction();

console.log(length(100, 'cm').to('in'));
