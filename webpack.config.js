const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env, argv) {
  const mode = argv ? argv.mode : ''; // Lese aus, welche mode beim Aufruf über die Kommandozeile gesetzt wurde

  return {
    // Erzeuge eine map-Datei. Inline ist etwas schneller und deshalb gut für die Entwicklung.
    devtool: mode === 'production' ? 'source-map' : 'inline-source-map',
    entry: {
      // Selbsgewählter Name und Pfad zur Einstiegsdatei.
      // __dirname enthält automatisch den Pfad zum aktuellen obersten Verzeichnis.
      javascript: `${__dirname}/js/src/js-module.js`,
      mixed: `${__dirname}/js/src/mixed-app.js`,
    },
    output: {
      path: `${__dirname}/js/dist`, // Pfad zum Ordner, in dem die gebündelten Dateien gespeichert werden
      filename: `[name].build.js`, // [path] wird durch den gewählten Namen der Einstiegsdatei ersetzt
    },
    plugins: [new CleanWebpackPlugin()], // Lösche alte Dateien im dist-Ordner
    module: {
      rules: [
        {
          test: /\.js$/, // Teste, ob die Datei mit .js aufhört
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader', // Integriere Babel in Webpack
              options: {
                presets: [['@babel/preset-env']], // Nutze die browserslist-Angabe in package.json
              },
            },
          ],
        },
      ],
    },
  };
};
