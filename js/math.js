export function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate() {
  console.log('Result!');
}

export const magicNumber = 42;

/* Alternativ dazu, direkt vor Funktionen oder Variablen export
zu schreiben, kann man die benannten Exporte am Ende der Datei
auch in geschweiften Dateien aufführen. */
export { subtract };

export default calculate;
