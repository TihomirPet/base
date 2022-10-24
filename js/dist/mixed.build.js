/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/src/math.js":
/*!************************!*\
  !*** ./js/src/math.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ }),

/***/ "./node_modules/length.js/length.js":
/*!******************************************!*\
  !*** ./node_modules/length.js/length.js ***!
  \******************************************/
/***/ (function(module) {

/**
 * length.js v1.1.0 (https://github.com/appalaszynski/length.js)
 * Copyright (c) 2018 appalaszynski (https://github.com/appalaszynski)
 * Licensed under MIT (https://github.com/appalaszynski/length.js/blob/master/LICENSE)
 */
;(function (global, factory) {
  if (true) {
    module.exports = factory();
  } else {}
}(this, (function () { 'use strict';

  var standardUnitDependences = {
    pm: Math.pow(10, -12),
    nm: Math.pow(10, -9),
    um: Math.pow(10, -6),
    mm: Math.pow(10, -3),
    cm: Math.pow(10, -2),
    dm: Math.pow(10, -1),
    m: 1,
    dam: Math.pow(10, 1),
    hm: Math.pow(10, 2),
    km: Math.pow(10, 3),
    nmi: 1852,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    fm: 1.8288,
    mi: 1609.344,
    ld: 384402000,
    au: 149597870700,
    ly: 9460730472580800,
    pc: (648000 / Math.PI) * 149597870700,
  };

  var supportedUnits = Object.keys(standardUnitDependences);

  var errors = {
    unitType: 'Unsupported unit type! Supported types:\n' + supportedUnits + '.',
    valueType: 'Value must be a number!',
    noUnit: 'You have to pass unit type!',
    noValue: 'You have to pass value!',
  };

  function validate(value, unit) {
    validateValue(value);
    validateUnit(unit);
  }

  function validateUnit(unit) {
    if (typeof unit === 'undefined') {
      throw Error(errors.noUnit);
    } else if (supportedUnits.indexOf(unit) == -1) {
      throw Error(errors.unitType);
    }
  }

  function validateValue(value) {
    if (typeof value === 'undefined') {
      throw Error(errors.noValue);
    } else if (typeof value !== 'number') {
      throw Error(errors.valueType);
    }
  }

  function Length(value, unit) {
    validate(value, unit);

    this.value = value;
    this.unit = unit;
  }

  var length = function (value, unit) {
    return new Length(value, unit);
  };

  function getValueInStandardUnit(value, unit) {
    return value * standardUnitDependences[unit];
  }

  function getValueByUnit(value, unit) {
    return value * (1 / standardUnitDependences[unit]);
  }

  function to(unit) {
    validateUnit(unit);
    var valueInStandardUnit = getValueInStandardUnit(this.value, this.unit);
    var convertedValue = getValueByUnit(valueInStandardUnit, unit);
    return length(convertedValue, unit);
  }

  function add(value, unit) {
    if (typeof unit === 'undefined' || this.unit === unit) {
      validateValue(value);
      return length(this.value + value, this.unit);
    }
    validate(value, unit);
    if (value === 0) return length(this.value, this.unit);
    var newValue = this.value + length(value, unit).to(this.unit).getValue();
    return length(newValue, this.unit);
  }

  function getValue() {
    return this.value;
  }

  function getUnit() {
    return this.unit;
  }

  function getString() {
    return this.value + this.unit;
  }

  function toPrecision(digits) {
    var value = digits ? this.value.toFixed(digits) : this.value;
    return length(parseFloat(value), this.unit);
  }

  var proto = Length.prototype;

  proto.version = '1.1.0';

  proto.to = to;
  proto.add = add;
  proto.getValue = getValue;
  proto.getUnit = getUnit;
  proto.getString = proto.toString = getString;
  proto.toPrecision = toPrecision;

  length.fn = proto;

  return length;

})));


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*****************************!*\
  !*** ./js/src/mixed-app.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var length_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! length.js */ "./node_modules/length.js/length.js");
/* harmony import */ var length_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(length_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./js/src/math.js");
/* NPM-Module werden ohne Pfad (nur mit Modulname) importiert,
üblicherweise vor den selbstgeschriebenen Modulen. (Auch die
Dateiendung fällt weg, hier hat das Modul nur .js im Namen. ) */

/* Selbstgeschriebene Module werden normal mit Pfadangabe importiert,
man kann nur auf Wunsch die Dateiendung weglassen.
Achtung: Kein gültiger JavaScript-Syntax, funktioniert ohne Dateiendung
nur, wenn man einen Bundler nutzt.
*/


console.log((0,_math__WEBPACK_IMPORTED_MODULE_1__.add)(2, 6));
console.log(length_js__WEBPACK_IMPORTED_MODULE_0___default()(100, 'cm').to('in'));
const person = {
  name: 'Jonathan'
};
console.log(person.age ?? 'Alter Unbekannt');
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4ZWQuYnVpbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLEdBQVQsQ0FBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI7QUFDeEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxTQUFPSCxDQUFDLEdBQUdDLENBQVg7QUFDRDs7QUFFRCxTQUFTRyxRQUFULENBQWtCSixDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I7QUFDdEIsU0FBT0QsQ0FBQyxHQUFHQyxDQUFYO0FBQ0Q7O0FBRUQsU0FBU0ksU0FBVCxHQUFxQjtBQUNuQkgsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNEOztBQUVNLE1BQU1HLFdBQVcsR0FBRyxFQUFwQjtBQUVQO0FBQ0E7QUFDQTs7QUFDQTtBQUVBLCtEQUFlRCxTQUFmOzs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTUFBTSxJQUE0RDtBQUNsRTtBQUNBLElBQUksS0FBSyxFQUVOO0FBQ0gsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O1VDdklEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUosMENBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFmO0FBRUFHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxnREFBTSxDQUFDLEdBQUQsRUFBTSxJQUFOLENBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQVo7QUFFQSxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsSUFBSSxFQUFFO0FBRE8sQ0FBZjtBQUlBUixPQUFPLENBQUNDLEdBQVIsQ0FBWU0sTUFBTSxDQUFDRSxHQUFQLElBQWMsaUJBQTFCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGVuZ3RoLmpzL2xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvc3JjL21peGVkLWFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgY29uc29sZS5sb2coJ0FkZGllcmVuIScpO1xuICByZXR1cm4gYSArIGI7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gIGNvbnNvbGUubG9nKCdSZXN1bHQhJyk7XG59XG5cbmV4cG9ydCBjb25zdCBtYWdpY051bWJlciA9IDQyO1xuXG4vKiBBbHRlcm5hdGl2IGRhenUsIGRpcmVrdCB2b3IgRnVua3Rpb25lbiBvZGVyIFZhcmlhYmxlbiBleHBvcnRcbnp1IHNjaHJlaWJlbiwga2FubiBtYW4gZGllIGJlbmFubnRlbiBFeHBvcnRlIGFtIEVuZGUgZGVyIERhdGVpXG5hdWNoIGluIGdlc2Nod2VpZnRlbiBEYXRlaWVuIGF1ZmbDvGhyZW4uICovXG5leHBvcnQgeyBzdWJ0cmFjdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGU7XG4iLCIvKipcbiAqIGxlbmd0aC5qcyB2MS4xLjAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hcHBhbGFzenluc2tpL2xlbmd0aC5qcylcbiAqIENvcHlyaWdodCAoYykgMjAxOCBhcHBhbGFzenluc2tpIChodHRwczovL2dpdGh1Yi5jb20vYXBwYWxhc3p5bnNraSlcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2FwcGFsYXN6eW5za2kvbGVuZ3RoLmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLmxlbmd0aCA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHN0YW5kYXJkVW5pdERlcGVuZGVuY2VzID0ge1xuICAgIHBtOiBNYXRoLnBvdygxMCwgLTEyKSxcbiAgICBubTogTWF0aC5wb3coMTAsIC05KSxcbiAgICB1bTogTWF0aC5wb3coMTAsIC02KSxcbiAgICBtbTogTWF0aC5wb3coMTAsIC0zKSxcbiAgICBjbTogTWF0aC5wb3coMTAsIC0yKSxcbiAgICBkbTogTWF0aC5wb3coMTAsIC0xKSxcbiAgICBtOiAxLFxuICAgIGRhbTogTWF0aC5wb3coMTAsIDEpLFxuICAgIGhtOiBNYXRoLnBvdygxMCwgMiksXG4gICAga206IE1hdGgucG93KDEwLCAzKSxcbiAgICBubWk6IDE4NTIsXG4gICAgaW46IDAuMDI1NCxcbiAgICBmdDogMC4zMDQ4LFxuICAgIHlkOiAwLjkxNDQsXG4gICAgZm06IDEuODI4OCxcbiAgICBtaTogMTYwOS4zNDQsXG4gICAgbGQ6IDM4NDQwMjAwMCxcbiAgICBhdTogMTQ5NTk3ODcwNzAwLFxuICAgIGx5OiA5NDYwNzMwNDcyNTgwODAwLFxuICAgIHBjOiAoNjQ4MDAwIC8gTWF0aC5QSSkgKiAxNDk1OTc4NzA3MDAsXG4gIH07XG5cbiAgdmFyIHN1cHBvcnRlZFVuaXRzID0gT2JqZWN0LmtleXMoc3RhbmRhcmRVbml0RGVwZW5kZW5jZXMpO1xuXG4gIHZhciBlcnJvcnMgPSB7XG4gICAgdW5pdFR5cGU6ICdVbnN1cHBvcnRlZCB1bml0IHR5cGUhIFN1cHBvcnRlZCB0eXBlczpcXG4nICsgc3VwcG9ydGVkVW5pdHMgKyAnLicsXG4gICAgdmFsdWVUeXBlOiAnVmFsdWUgbXVzdCBiZSBhIG51bWJlciEnLFxuICAgIG5vVW5pdDogJ1lvdSBoYXZlIHRvIHBhc3MgdW5pdCB0eXBlIScsXG4gICAgbm9WYWx1ZTogJ1lvdSBoYXZlIHRvIHBhc3MgdmFsdWUhJyxcbiAgfTtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgdW5pdCkge1xuICAgIHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuICAgIHZhbGlkYXRlVW5pdCh1bml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVW5pdCh1bml0KSB7XG4gICAgaWYgKHR5cGVvZiB1bml0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgRXJyb3IoZXJyb3JzLm5vVW5pdCk7XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0ZWRVbml0cy5pbmRleE9mKHVuaXQpID09IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcihlcnJvcnMudW5pdFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgRXJyb3IoZXJyb3JzLm5vVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoZXJyb3JzLnZhbHVlVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTGVuZ3RoKHZhbHVlLCB1bml0KSB7XG4gICAgdmFsaWRhdGUodmFsdWUsIHVuaXQpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudW5pdCA9IHVuaXQ7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlLCB1bml0KSB7XG4gICAgcmV0dXJuIG5ldyBMZW5ndGgodmFsdWUsIHVuaXQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlSW5TdGFuZGFyZFVuaXQodmFsdWUsIHVuaXQpIHtcbiAgICByZXR1cm4gdmFsdWUgKiBzdGFuZGFyZFVuaXREZXBlbmRlbmNlc1t1bml0XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlQnlVbml0KHZhbHVlLCB1bml0KSB7XG4gICAgcmV0dXJuIHZhbHVlICogKDEgLyBzdGFuZGFyZFVuaXREZXBlbmRlbmNlc1t1bml0XSk7XG4gIH1cblxuICBmdW5jdGlvbiB0byh1bml0KSB7XG4gICAgdmFsaWRhdGVVbml0KHVuaXQpO1xuICAgIHZhciB2YWx1ZUluU3RhbmRhcmRVbml0ID0gZ2V0VmFsdWVJblN0YW5kYXJkVW5pdCh0aGlzLnZhbHVlLCB0aGlzLnVuaXQpO1xuICAgIHZhciBjb252ZXJ0ZWRWYWx1ZSA9IGdldFZhbHVlQnlVbml0KHZhbHVlSW5TdGFuZGFyZFVuaXQsIHVuaXQpO1xuICAgIHJldHVybiBsZW5ndGgoY29udmVydGVkVmFsdWUsIHVuaXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKHZhbHVlLCB1bml0KSB7XG4gICAgaWYgKHR5cGVvZiB1bml0ID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnVuaXQgPT09IHVuaXQpIHtcbiAgICAgIHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIGxlbmd0aCh0aGlzLnZhbHVlICsgdmFsdWUsIHRoaXMudW5pdCk7XG4gICAgfVxuICAgIHZhbGlkYXRlKHZhbHVlLCB1bml0KTtcbiAgICBpZiAodmFsdWUgPT09IDApIHJldHVybiBsZW5ndGgodGhpcy52YWx1ZSwgdGhpcy51bml0KTtcbiAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZhbHVlICsgbGVuZ3RoKHZhbHVlLCB1bml0KS50byh0aGlzLnVuaXQpLmdldFZhbHVlKCk7XG4gICAgcmV0dXJuIGxlbmd0aChuZXdWYWx1ZSwgdGhpcy51bml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VW5pdCgpIHtcbiAgICByZXR1cm4gdGhpcy51bml0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlICsgdGhpcy51bml0O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9QcmVjaXNpb24oZGlnaXRzKSB7XG4gICAgdmFyIHZhbHVlID0gZGlnaXRzID8gdGhpcy52YWx1ZS50b0ZpeGVkKGRpZ2l0cykgOiB0aGlzLnZhbHVlO1xuICAgIHJldHVybiBsZW5ndGgocGFyc2VGbG9hdCh2YWx1ZSksIHRoaXMudW5pdCk7XG4gIH1cblxuICB2YXIgcHJvdG8gPSBMZW5ndGgucHJvdG90eXBlO1xuXG4gIHByb3RvLnZlcnNpb24gPSAnMS4xLjAnO1xuXG4gIHByb3RvLnRvID0gdG87XG4gIHByb3RvLmFkZCA9IGFkZDtcbiAgcHJvdG8uZ2V0VmFsdWUgPSBnZXRWYWx1ZTtcbiAgcHJvdG8uZ2V0VW5pdCA9IGdldFVuaXQ7XG4gIHByb3RvLmdldFN0cmluZyA9IHByb3RvLnRvU3RyaW5nID0gZ2V0U3RyaW5nO1xuICBwcm90by50b1ByZWNpc2lvbiA9IHRvUHJlY2lzaW9uO1xuXG4gIGxlbmd0aC5mbiA9IHByb3RvO1xuXG4gIHJldHVybiBsZW5ndGg7XG5cbn0pKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogTlBNLU1vZHVsZSB3ZXJkZW4gb2huZSBQZmFkIChudXIgbWl0IE1vZHVsbmFtZSkgaW1wb3J0aWVydCxcbsO8YmxpY2hlcndlaXNlIHZvciBkZW4gc2VsYnN0Z2VzY2hyaWViZW5lbiBNb2R1bGVuLiAoQXVjaCBkaWVcbkRhdGVpZW5kdW5nIGbDpGxsdCB3ZWcsIGhpZXIgaGF0IGRhcyBNb2R1bCBudXIgLmpzIGltIE5hbWVuLiApICovXG5pbXBvcnQgbGVuZ3RoIGZyb20gJ2xlbmd0aC5qcyc7XG5cbi8qIFNlbGJzdGdlc2NocmllYmVuZSBNb2R1bGUgd2VyZGVuIG5vcm1hbCBtaXQgUGZhZGFuZ2FiZSBpbXBvcnRpZXJ0LFxubWFuIGthbm4gbnVyIGF1ZiBXdW5zY2ggZGllIERhdGVpZW5kdW5nIHdlZ2xhc3Nlbi5cbkFjaHR1bmc6IEtlaW4gZ8O8bHRpZ2VyIEphdmFTY3JpcHQtU3ludGF4LCBmdW5rdGlvbmllcnQgb2huZSBEYXRlaWVuZHVuZ1xubnVyLCB3ZW5uIG1hbiBlaW5lbiBCdW5kbGVyIG51dHp0LlxuKi9cbmltcG9ydCB7IGFkZCB9IGZyb20gJy4vbWF0aCc7XG5cbmNvbnNvbGUubG9nKGFkZCgyLCA2KSk7XG5cbmNvbnNvbGUubG9nKGxlbmd0aCgxMDAsICdjbScpLnRvKCdpbicpKTtcblxuY29uc3QgcGVyc29uID0ge1xuICBuYW1lOiAnSm9uYXRoYW4nLFxufTtcblxuY29uc29sZS5sb2cocGVyc29uLmFnZSA/PyAnQWx0ZXIgVW5iZWthbm50Jyk7XG4iXSwibmFtZXMiOlsiYWRkIiwiYSIsImIiLCJjb25zb2xlIiwibG9nIiwic3VidHJhY3QiLCJjYWxjdWxhdGUiLCJtYWdpY051bWJlciIsImxlbmd0aCIsInRvIiwicGVyc29uIiwibmFtZSIsImFnZSJdLCJzb3VyY2VSb290IjoiIn0=