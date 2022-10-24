// Übersicht zu den JavaScript-Regeln: https://eslint.org/docs/rules/
module.exports = {
  env: {
    //Wo soll der Code später funktionieren?
    browser: true, // Läuft im Browser
    es2021: true, // Legt fest, das neue Features von JavaScript erlaubt sind
    node: true, // Läuft mit Node
  },
  // Nutze die Standard-Regeln
  // Deaktiviere alle Formatierungsregeln, die mit Prettier in Konflikt stehen
  // Wichtig: Prettier immer als letztes auflisten
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021, // Sprachversion von JS, d.h. welche Features sind erlaubt?
    sourceType: 'module', // Werden JavaScript-Module genutzt, oder normale Scripte?
  },
  /*
    Hier werden Regeln aktiviert bzw. deaktiviert. Diese Einstellung sind immer die
    letztgültigen, d.h. hier kann man Einstellungen aus Regelsätzen überschreiben.
    */
  rules: {
    'no-var': 'error', // "off", "warn" oder "error", alternativ 0,1 oder 2
    'prefer-const': 'warn',
  },
};
