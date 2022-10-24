/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/helpers.js":
/*!***************************!*\
  !*** ./js/src/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shuffle": function() { return /* binding */ shuffle; },
/* harmony export */   "fahrenheitToCelsius": function() { return /* binding */ fahrenheitToCelsius; },
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* Die Funktionen, Variablen oder Klassen, die man aus einer Datei
exportieren möchte, so dass sie in anderen Dateien importiert werden
können, muss man als "benannte" Exporte (named export) mit export markieren.
*/
function shuffle(arr) {
  arr.sort(() => 0.5 - Math.random());
  return arr;
}
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
/* Jede Datei kann exakt einen default-Export haben,
dieser kann (muss aber nicht) anonym sein. */

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  console.log('Ich bin der Default-Export!');
}

/***/ }),

/***/ "./js/src/math.js":
/*!************************!*\
  !*** ./js/src/math.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "magicNumber": function() { return /* binding */ magicNumber; },
/* harmony export */   "subtract": function() { return /* binding */ subtract; }
/* harmony export */ });
function add(a, b) {
  console.log('Addieren!');
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate() {
  console.log('Result!');
}

const magicNumber = 42;
/* Alternativ dazu, direkt vor Funktionen oder Variablen export
zu schreiben, kann man die benannten Exporte am Ende der Datei
auch in geschweiften Dateien aufführen. */


/* harmony default export */ __webpack_exports__["default"] = (calculate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************!*\
  !*** ./js/src/js-module.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./js/src/helpers.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math.js */ "./js/src/math.js");
/* Dateien, die als Modul geladen werden, sind automatisch im strict mode. */

/* Möchte man Funktionen oder Variablen oder Klassen aus
anderen Dateien nutzen, importiert man sie, in dem man
in den geschweiften Klammern den Namen aufführt, der beim
export verwendet wird.
Wichtig: Importe immer am Anfang der Datei machen, und auf
oberster Ebene, also z.B. nicht in einem if-Block oder einer
Funktion. */

/* Der Name des default-Exports kann und muss beim importieren frei gewählt
werden. */


/* 
Man kann mit Komma getrennt auch in einer Zeile den default-Export
importieren und danach benannte Exporte importieren.
Benannte Importe können mit as umbenannt werden.
*/

 // Variablen, Funktionen, Klassen etc. sind nicht im globalen Namensraum

const test = 'Hallo'; // console.log(document.querySelector('h1').innerHTML);

console.log((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)([1, 2, 3, 4]));
console.log((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fahrenheitToCelsius)(100));
(0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
console.log((0,_math_js__WEBPACK_IMPORTED_MODULE_1__.subtract)(5, 3));
(0,_math_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
console.log(_math_js__WEBPACK_IMPORTED_MODULE_1__.magicNumber);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YXNjcmlwdC5idWlsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUMzQkEsRUFBQUEsR0FBRyxDQUFDQyxJQUFKLENBQVMsTUFBTSxNQUFNQyxJQUFJLENBQUNDLE1BQUwsRUFBckI7QUFDQSxTQUFPSCxHQUFQO0FBQ0Q7QUFFTSxTQUFTSSxtQkFBVCxDQUE2QkMsVUFBN0IsRUFBeUM7QUFDOUMsU0FBUSxDQUFDQSxVQUFVLEdBQUcsRUFBZCxJQUFvQixDQUFyQixHQUEwQixDQUFqQztBQUNEO0FBRUQ7QUFDQTs7QUFDQSw2QkFBZSxzQ0FBWTtBQUN6QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTSxTQUFTQyxHQUFULENBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ3hCSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsU0FBT0UsQ0FBQyxHQUFHQyxDQUFYO0FBQ0Q7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQkYsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQ3RCLFNBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNEOztBQUVELFNBQVNFLFNBQVQsR0FBcUI7QUFDbkJOLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDRDs7QUFFTSxNQUFNTSxXQUFXLEdBQUcsRUFBcEI7QUFFUDtBQUNBO0FBQ0E7O0FBQ0E7QUFFQSwrREFBZUQsU0FBZjs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0NBR0E7O0FBQ0EsTUFBTUssSUFBSSxHQUFHLE9BQWIsRUFFQTs7QUFFQVgsT0FBTyxDQUFDQyxHQUFSLENBQVlSLG9EQUFPLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQUQsQ0FBbkI7QUFFQU8sT0FBTyxDQUFDQyxHQUFSLENBQVlILGdFQUFtQixDQUFDLEdBQUQsQ0FBL0I7QUFFQVUsdURBQU07QUFFTlIsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGtEQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakI7QUFDQUQsb0RBQVc7QUFDWFQsT0FBTyxDQUFDQyxHQUFSLENBQVlNLGlEQUFaLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9zcmMvanMtbW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIERpZSBGdW5rdGlvbmVuLCBWYXJpYWJsZW4gb2RlciBLbGFzc2VuLCBkaWUgbWFuIGF1cyBlaW5lciBEYXRlaVxuZXhwb3J0aWVyZW4gbcO2Y2h0ZSwgc28gZGFzcyBzaWUgaW4gYW5kZXJlbiBEYXRlaWVuIGltcG9ydGllcnQgd2VyZGVuXG5rw7ZubmVuLCBtdXNzIG1hbiBhbHMgXCJiZW5hbm50ZVwiIEV4cG9ydGUgKG5hbWVkIGV4cG9ydCkgbWl0IGV4cG9ydCBtYXJraWVyZW4uXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnIpIHtcbiAgYXJyLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWhyZW5oZWl0VG9DZWxzaXVzKGZhaHJlbmhlaXQpIHtcbiAgcmV0dXJuICgoZmFocmVuaGVpdCAtIDMyKSAqIDUpIC8gOTtcbn1cblxuLyogSmVkZSBEYXRlaSBrYW5uIGV4YWt0IGVpbmVuIGRlZmF1bHQtRXhwb3J0IGhhYmVuLFxuZGllc2VyIGthbm4gKG11c3MgYWJlciBuaWNodCkgYW5vbnltIHNlaW4uICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJY2ggYmluIGRlciBEZWZhdWx0LUV4cG9ydCEnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGQoYSwgYikge1xuICBjb25zb2xlLmxvZygnQWRkaWVyZW4hJyk7XG4gIHJldHVybiBhICsgYjtcbn1cblxuZnVuY3Rpb24gc3VidHJhY3QoYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZSgpIHtcbiAgY29uc29sZS5sb2coJ1Jlc3VsdCEnKTtcbn1cblxuZXhwb3J0IGNvbnN0IG1hZ2ljTnVtYmVyID0gNDI7XG5cbi8qIEFsdGVybmF0aXYgZGF6dSwgZGlyZWt0IHZvciBGdW5rdGlvbmVuIG9kZXIgVmFyaWFibGVuIGV4cG9ydFxuenUgc2NocmVpYmVuLCBrYW5uIG1hbiBkaWUgYmVuYW5udGVuIEV4cG9ydGUgYW0gRW5kZSBkZXIgRGF0ZWlcbmF1Y2ggaW4gZ2VzY2h3ZWlmdGVuIERhdGVpZW4gYXVmZsO8aHJlbi4gKi9cbmV4cG9ydCB7IHN1YnRyYWN0IH07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIERhdGVpZW4sIGRpZSBhbHMgTW9kdWwgZ2VsYWRlbiB3ZXJkZW4sIHNpbmQgYXV0b21hdGlzY2ggaW0gc3RyaWN0IG1vZGUuICovXG5cbi8qIE3DtmNodGUgbWFuIEZ1bmt0aW9uZW4gb2RlciBWYXJpYWJsZW4gb2RlciBLbGFzc2VuIGF1c1xuYW5kZXJlbiBEYXRlaWVuIG51dHplbiwgaW1wb3J0aWVydCBtYW4gc2llLCBpbiBkZW0gbWFuXG5pbiBkZW4gZ2VzY2h3ZWlmdGVuIEtsYW1tZXJuIGRlbiBOYW1lbiBhdWZmw7xocnQsIGRlciBiZWltXG5leHBvcnQgdmVyd2VuZGV0IHdpcmQuXG5XaWNodGlnOiBJbXBvcnRlIGltbWVyIGFtIEFuZmFuZyBkZXIgRGF0ZWkgbWFjaGVuLCB1bmQgYXVmXG5vYmVyc3RlciBFYmVuZSwgYWxzbyB6LkIuIG5pY2h0IGluIGVpbmVtIGlmLUJsb2NrIG9kZXIgZWluZXJcbkZ1bmt0aW9uLiAqL1xuaW1wb3J0IHsgc2h1ZmZsZSwgZmFocmVuaGVpdFRvQ2Vsc2l1cyB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbi8qIERlciBOYW1lIGRlcyBkZWZhdWx0LUV4cG9ydHMga2FubiB1bmQgbXVzcyBiZWltIGltcG9ydGllcmVuIGZyZWkgZ2V3w6RobHRcbndlcmRlbi4gKi9cbmltcG9ydCBteU5hbWUgZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuLyogXG5NYW4ga2FubiBtaXQgS29tbWEgZ2V0cmVubnQgYXVjaCBpbiBlaW5lciBaZWlsZSBkZW4gZGVmYXVsdC1FeHBvcnRcbmltcG9ydGllcmVuIHVuZCBkYW5hY2ggYmVuYW5udGUgRXhwb3J0ZSBpbXBvcnRpZXJlbi5cbkJlbmFubnRlIEltcG9ydGUga8O2bm5lbiBtaXQgYXMgdW1iZW5hbm50IHdlcmRlbi5cbiovXG5pbXBvcnQgbWF0aERlZmF1bHQsIHsgYWRkLCBzdWJ0cmFjdCBhcyBtaW51cywgbWFnaWNOdW1iZXIgfSBmcm9tICcuL21hdGguanMnO1xuXG4vLyBWYXJpYWJsZW4sIEZ1bmt0aW9uZW4sIEtsYXNzZW4gZXRjLiBzaW5kIG5pY2h0IGltIGdsb2JhbGVuIE5hbWVuc3JhdW1cbmNvbnN0IHRlc3QgPSAnSGFsbG8nO1xuXG4vLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLmlubmVySFRNTCk7XG5cbmNvbnNvbGUubG9nKHNodWZmbGUoWzEsIDIsIDMsIDRdKSk7XG5cbmNvbnNvbGUubG9nKGZhaHJlbmhlaXRUb0NlbHNpdXMoMTAwKSk7XG5cbm15TmFtZSgpO1xuXG5jb25zb2xlLmxvZyhtaW51cyg1LCAzKSk7XG5tYXRoRGVmYXVsdCgpO1xuY29uc29sZS5sb2cobWFnaWNOdW1iZXIpO1xuIl0sIm5hbWVzIjpbInNodWZmbGUiLCJhcnIiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImZhaHJlbmhlaXRUb0NlbHNpdXMiLCJmYWhyZW5oZWl0IiwiY29uc29sZSIsImxvZyIsImFkZCIsImEiLCJiIiwic3VidHJhY3QiLCJjYWxjdWxhdGUiLCJtYWdpY051bWJlciIsIm15TmFtZSIsIm1hdGhEZWZhdWx0IiwibWludXMiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==