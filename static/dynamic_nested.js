(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dynamic_nested"] = factory();
	else
		root["dynamic_nested"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/dynamic_nested.js-exposed");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/dynamic_nested.js-exposed":
/*!**************************************!*\
  !*** ./js/dynamic_nested.js-exposed ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {if(!global["Phoenix"]) global["Phoenix"] = {};
module.exports = global["Phoenix"]["LiveView"] = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./dynamic_nested.js */ "./node_modules/babel-loader/lib/index.js!./js/dynamic_nested.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./js/dynamic_nested.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./js/dynamic_nested.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Add dynamic support to add and remove nested associations generated by `Phoenix.HTML.inputs_for`.
 *
 * In order to get it working, the following attributes must be added in the markup:
 *
 * [dynamic-nested]                 - to active this component.
 * [dynamic-nested-index=${index}]  - to get nested association.
 * [dynamic-nested-add]             - to add nested.
 * [dynamic-nested-remove]          - to remove nested.
 *
 * ## Examples
 *
 * ```
 * <div dynamic-nested>
 *   <%= inputs_for @f, :categories, [skip_hidden: true], fn c -> %>
 *     <%= content_tag :div, dynamic_nested_index: c.index do %>
 *       # PS: generate hidden fields manually for handling them easily.
 *       = for {key, value} <- c.hidden do
 *         = hidden_input c, key, value: value, dynamic_nested_field_id: true
 *      <%= text_input c, :name %>
 *       <button type="button" dynamic-nested-remove>Remove</button>
 *     <% end %>
 *   <% end %>
 * </div>
 * ```
 *
 * <button type="button" dynamic-nested-add>Add</button>
 *
 * Everytime a User adds a new nested, it is going to generate a new index for that nested incrementing
 * +1 from the last nested on the page. As soon as an User removes one, all indexes will be updated
 * accordingly to reflect their position on the page.
 *
 * Also, make sure to initialize this script after importing it on your application.
 *
 * ```JS
 * import DynamicNested from 'dynamic-nested'
 *
 * document.querySelectorAll('[dynamic-nested]').forEach(element => new DynamicNested(element))
 * ```
 *
 * It supports the following callbacks:
 *
 * * beforeClone  - You might want to do something before cloning the element.
 * * afterAdd     - You might want to do something after adding the new element.
 * * afterRemove  - You might want to do something after removing the element.
 *
 * ```JS
 * const beforeClone = (element) => { ... }
 * const afterAdd    = (element, newElement) => { ... }
 * const afterRemove = (elements) => { ... }
 *
 * new DynamicNested(element, { beforeClone, afterAdd, afterRemove })
 * ```
 *
 * ## Know caveats
 *
 * * It must contains at least one nested markup rendered on the page since `DinamicNested` will
 *   use it as a template to clone.
 * * You must be using the last version of `Phoenix.HTML` that supports `skip_hidden` fields.
 **/
class DynamicNested {
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.toggleRemoveButtonDisplay();
    document.addEventListener('click', event => {
      if (event.target.matches('[dynamic-nested-add]')) {
        const $allNested = this.element.querySelectorAll('[dynamic-nested-index]');
        this.add($allNested);
        this.toggleRemoveButtonDisplay();
      }

      if (event.target.matches('[dynamic-nested-remove]')) {
        debugger;
        const $nested = event.target.closest('[dynamic-nested-index]');
        this.remove($nested);
        this.toggleRemoveButtonDisplay();
      }
    }, false);
  }

  toggleRemoveButtonDisplay() {
    const $allNested = this.element.querySelectorAll('[dynamic-nested-index]');

    if ($allNested.length <= 1) {
      const $button = $allNested[0].querySelector('[dynamic-nested-remove]');
      $button.style.display = 'none';
    } else {
      for (let $button of this.element.querySelectorAll('[dynamic-nested-remove]')) {
        $button.style.display = 'block';
      }
    }
  }

  add($allNested) {
    const $lastNested = $allNested[$allNested.length - 1];

    if (this.options.beforeClone) {
      this.options.beforeClone($lastNested);
    }

    const $newNested = $lastNested.cloneNode(true); // copy selected options from the cloned to the new nested since they are not copied when cloned.
    // $newNested.querySelectorAll('select').forEach((select, index) => {
    //   const cloneSelect = $lastNested.querySelectorAll('select')[index]
    //   if(select.multiple) {
    //     for(let option of select.options) {
    //       const cloneSelectOption = Array.from(cloneSelect.options).find(o => o.value == option.value)
    //       cloneSelectOption.selected
    //     }
    //   } else {
    //     select.selectedIndex = cloneSelect.selectedIndex
    //   }
    // })
    // When editing the form, the cloned element will have hidden ids. They must be removed from
    // the new element.

    const hiddenId = $newNested.querySelector('[dynamic-nested-field-id]');

    if (hiddenId) {
      $newNested.removeChild(hiddenId);
    } // Create a new index according to the last nested.


    const index = +$lastNested.getAttribute('dynamic-nested-index') + 1;
    this.replaceIndex($newNested, index); // Clear value of cloned item

    $newNested.querySelectorAll("input").forEach(el => {
      el.value = "";
    }); // Add new nested on the page.

    this.element.appendChild($newNested);

    if (this.options.afterAdd) {
      this.options.afterAdd($lastNested, $newNested);
    }
  }

  remove($nested) {
    this.element.removeChild($nested);
    const $allNested = this.element.querySelectorAll('[dynamic-nested-index]');
    Array.from($allNested).forEach(($nested, index) => {
      this.replaceIndex($nested, index);
    });

    if (this.options.afterRemove) {
      this.options.afterRemove($allNested);
    }
  }
  /**
   * Replace indexes in `id`, `name` and `for` for all children from the given nested element.
   *
   * @param {object} element - DOM element.
   * @param {string} index   - The new index that will be used in the attribute name.
   *
   * Examples
   *
   *   Given the following nested element:
   *   <div dynamic-nested-index="0">
   *     <input id="user_categories_0_name" name="user[categories][0][name]">
   *   </div>
   *
   *   replaceIndex(element, "1")
   *
   *   Will replace indexes in the <input /> and changes the DOM to:
   *   <div dynamic-nested-index="1">
   *     <input id="user_categories_1_name" name="user[categories][1][name]">
   *   </div>
   **/


  replaceIndex($nested, newIndex) {
    for (let attribute of ['id', 'name', 'for']) {
      const $children = $nested.querySelectorAll(`[${attribute}]`);
      Array.from($children).forEach($child => {
        const value = this.newAttributeName($child, attribute, newIndex);
        $child.setAttribute(attribute, value);
      });
      $nested.setAttribute('dynamic-nested-index', newIndex);
    }
  }
  /**
   * Build a new attribute name according to the previous attribute name and new index.
   *
   * @param {object} element   - DOM element that contains the attributes' name as base.
   * @param {string} attribute - Attribute name present in the given element.
   * @param {string} index     - The new index that will be used in the attribute name.
   *
   * Examples
   *
   *    newAttributeName(<input name="user[categories][0][name]">, "name", 1)
   *    => "user[categories][1][name]"
   *
   *    newAttributeName(<input id="user_categories_0">, "id", 1)
   *    => "user_categories_1"
   **/


  newAttributeName(element, attribute, index) {
    return element.getAttribute(attribute).replace(/[0-9]/g, index);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DynamicNested);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY19uZXN0ZWQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljX25lc3RlZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZHluYW1pY19uZXN0ZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pY19uZXN0ZWQvLi9qcy9keW5hbWljX25lc3RlZC5qcy1leHBvc2VkIiwid2VicGFjazovL2R5bmFtaWNfbmVzdGVkLy4vanMvZHluYW1pY19uZXN0ZWQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pY19uZXN0ZWQvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImR5bmFtaWNfbmVzdGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImR5bmFtaWNfbmVzdGVkXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2R5bmFtaWNfbmVzdGVkLmpzLWV4cG9zZWRcIik7XG4iLCJpZighZ2xvYmFsW1wiUGhvZW5peFwiXSkgZ2xvYmFsW1wiUGhvZW5peFwiXSA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCJQaG9lbml4XCJdW1wiTGl2ZVZpZXdcIl0gPSByZXF1aXJlKFwiLSEvaG9tZS9zdXNoYW50L0RvY3VtZW50cy9keW5hbWljX25lc3RlZC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL2R5bmFtaWNfbmVzdGVkLmpzXCIpOyIsIi8qKlxuICogQWRkIGR5bmFtaWMgc3VwcG9ydCB0byBhZGQgYW5kIHJlbW92ZSBuZXN0ZWQgYXNzb2NpYXRpb25zIGdlbmVyYXRlZCBieSBgUGhvZW5peC5IVE1MLmlucHV0c19mb3JgLlxuICpcbiAqIEluIG9yZGVyIHRvIGdldCBpdCB3b3JraW5nLCB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXMgbXVzdCBiZSBhZGRlZCBpbiB0aGUgbWFya3VwOlxuICpcbiAqIFtkeW5hbWljLW5lc3RlZF0gICAgICAgICAgICAgICAgIC0gdG8gYWN0aXZlIHRoaXMgY29tcG9uZW50LlxuICogW2R5bmFtaWMtbmVzdGVkLWluZGV4PSR7aW5kZXh9XSAgLSB0byBnZXQgbmVzdGVkIGFzc29jaWF0aW9uLlxuICogW2R5bmFtaWMtbmVzdGVkLWFkZF0gICAgICAgICAgICAgLSB0byBhZGQgbmVzdGVkLlxuICogW2R5bmFtaWMtbmVzdGVkLXJlbW92ZV0gICAgICAgICAgLSB0byByZW1vdmUgbmVzdGVkLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKlxuICogYGBgXG4gKiA8ZGl2IGR5bmFtaWMtbmVzdGVkPlxuICogICA8JT0gaW5wdXRzX2ZvciBAZiwgOmNhdGVnb3JpZXMsIFtza2lwX2hpZGRlbjogdHJ1ZV0sIGZuIGMgLT4gJT5cbiAqICAgICA8JT0gY29udGVudF90YWcgOmRpdiwgZHluYW1pY19uZXN0ZWRfaW5kZXg6IGMuaW5kZXggZG8gJT5cbiAqICAgICAgICMgUFM6IGdlbmVyYXRlIGhpZGRlbiBmaWVsZHMgbWFudWFsbHkgZm9yIGhhbmRsaW5nIHRoZW0gZWFzaWx5LlxuICogICAgICAgPSBmb3Ige2tleSwgdmFsdWV9IDwtIGMuaGlkZGVuIGRvXG4gKiAgICAgICAgID0gaGlkZGVuX2lucHV0IGMsIGtleSwgdmFsdWU6IHZhbHVlLCBkeW5hbWljX25lc3RlZF9maWVsZF9pZDogdHJ1ZVxuICogICAgICA8JT0gdGV4dF9pbnB1dCBjLCA6bmFtZSAlPlxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZHluYW1pYy1uZXN0ZWQtcmVtb3ZlPlJlbW92ZTwvYnV0dG9uPlxuICogICAgIDwlIGVuZCAlPlxuICogICA8JSBlbmQgJT5cbiAqIDwvZGl2PlxuICogYGBgXG4gKlxuICogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZHluYW1pYy1uZXN0ZWQtYWRkPkFkZDwvYnV0dG9uPlxuICpcbiAqIEV2ZXJ5dGltZSBhIFVzZXIgYWRkcyBhIG5ldyBuZXN0ZWQsIGl0IGlzIGdvaW5nIHRvIGdlbmVyYXRlIGEgbmV3IGluZGV4IGZvciB0aGF0IG5lc3RlZCBpbmNyZW1lbnRpbmdcbiAqICsxIGZyb20gdGhlIGxhc3QgbmVzdGVkIG9uIHRoZSBwYWdlLiBBcyBzb29uIGFzIGFuIFVzZXIgcmVtb3ZlcyBvbmUsIGFsbCBpbmRleGVzIHdpbGwgYmUgdXBkYXRlZFxuICogYWNjb3JkaW5nbHkgdG8gcmVmbGVjdCB0aGVpciBwb3NpdGlvbiBvbiB0aGUgcGFnZS5cbiAqXG4gKiBBbHNvLCBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSB0aGlzIHNjcmlwdCBhZnRlciBpbXBvcnRpbmcgaXQgb24geW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBgYGBKU1xuICogaW1wb3J0IER5bmFtaWNOZXN0ZWQgZnJvbSAnZHluYW1pYy1uZXN0ZWQnXG4gKlxuICogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2R5bmFtaWMtbmVzdGVkXScpLmZvckVhY2goZWxlbWVudCA9PiBuZXcgRHluYW1pY05lc3RlZChlbGVtZW50KSlcbiAqIGBgYFxuICpcbiAqIEl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2tzOlxuICpcbiAqICogYmVmb3JlQ2xvbmUgIC0gWW91IG1pZ2h0IHdhbnQgdG8gZG8gc29tZXRoaW5nIGJlZm9yZSBjbG9uaW5nIHRoZSBlbGVtZW50LlxuICogKiBhZnRlckFkZCAgICAgLSBZb3UgbWlnaHQgd2FudCB0byBkbyBzb21ldGhpbmcgYWZ0ZXIgYWRkaW5nIHRoZSBuZXcgZWxlbWVudC5cbiAqICogYWZ0ZXJSZW1vdmUgIC0gWW91IG1pZ2h0IHdhbnQgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHJlbW92aW5nIHRoZSBlbGVtZW50LlxuICpcbiAqIGBgYEpTXG4gKiBjb25zdCBiZWZvcmVDbG9uZSA9IChlbGVtZW50KSA9PiB7IC4uLiB9XG4gKiBjb25zdCBhZnRlckFkZCAgICA9IChlbGVtZW50LCBuZXdFbGVtZW50KSA9PiB7IC4uLiB9XG4gKiBjb25zdCBhZnRlclJlbW92ZSA9IChlbGVtZW50cykgPT4geyAuLi4gfVxuICpcbiAqIG5ldyBEeW5hbWljTmVzdGVkKGVsZW1lbnQsIHsgYmVmb3JlQ2xvbmUsIGFmdGVyQWRkLCBhZnRlclJlbW92ZSB9KVxuICogYGBgXG4gKlxuICogIyMgS25vdyBjYXZlYXRzXG4gKlxuICogKiBJdCBtdXN0IGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBuZXN0ZWQgbWFya3VwIHJlbmRlcmVkIG9uIHRoZSBwYWdlIHNpbmNlIGBEaW5hbWljTmVzdGVkYCB3aWxsXG4gKiAgIHVzZSBpdCBhcyBhIHRlbXBsYXRlIHRvIGNsb25lLlxuICogKiBZb3UgbXVzdCBiZSB1c2luZyB0aGUgbGFzdCB2ZXJzaW9uIG9mIGBQaG9lbml4LkhUTUxgIHRoYXQgc3VwcG9ydHMgYHNraXBfaGlkZGVuYCBmaWVsZHMuXG4gKiovXG5jbGFzcyBEeW5hbWljTmVzdGVkIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudG9nZ2xlUmVtb3ZlQnV0dG9uRGlzcGxheSgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCdbZHluYW1pYy1uZXN0ZWQtYWRkXScpKSB7XG4gICAgICAgIGNvbnN0ICRhbGxOZXN0ZWQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2R5bmFtaWMtbmVzdGVkLWluZGV4XScpO1xuICAgICAgICB0aGlzLmFkZCgkYWxsTmVzdGVkKTtcbiAgICAgICAgdGhpcy50b2dnbGVSZW1vdmVCdXR0b25EaXNwbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnW2R5bmFtaWMtbmVzdGVkLXJlbW92ZV0nKSkge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc3QgJG5lc3RlZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZHluYW1pYy1uZXN0ZWQtaW5kZXhdJyk7XG4gICAgICAgIHRoaXMucmVtb3ZlKCRuZXN0ZWQpO1xuICAgICAgICB0aGlzLnRvZ2dsZVJlbW92ZUJ1dHRvbkRpc3BsYXkoKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICB0b2dnbGVSZW1vdmVCdXR0b25EaXNwbGF5KCkge1xuICAgIGNvbnN0ICRhbGxOZXN0ZWQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2R5bmFtaWMtbmVzdGVkLWluZGV4XScpO1xuXG4gICAgaWYgKCRhbGxOZXN0ZWQubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSAkYWxsTmVzdGVkWzBdLnF1ZXJ5U2VsZWN0b3IoJ1tkeW5hbWljLW5lc3RlZC1yZW1vdmVdJyk7XG4gICAgICAkYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0ICRidXR0b24gb2YgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkeW5hbWljLW5lc3RlZC1yZW1vdmVdJykpIHtcbiAgICAgICAgJGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGQoJGFsbE5lc3RlZCkge1xuICAgIGNvbnN0ICRsYXN0TmVzdGVkID0gJGFsbE5lc3RlZFskYWxsTmVzdGVkLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5iZWZvcmVDbG9uZSkge1xuICAgICAgdGhpcy5vcHRpb25zLmJlZm9yZUNsb25lKCRsYXN0TmVzdGVkKTtcbiAgICB9XG5cbiAgICBjb25zdCAkbmV3TmVzdGVkID0gJGxhc3ROZXN0ZWQuY2xvbmVOb2RlKHRydWUpOyAvLyBjb3B5IHNlbGVjdGVkIG9wdGlvbnMgZnJvbSB0aGUgY2xvbmVkIHRvIHRoZSBuZXcgbmVzdGVkIHNpbmNlIHRoZXkgYXJlIG5vdCBjb3BpZWQgd2hlbiBjbG9uZWQuXG4gICAgLy8gJG5ld05lc3RlZC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKChzZWxlY3QsIGluZGV4KSA9PiB7XG4gICAgLy8gICBjb25zdCBjbG9uZVNlbGVjdCA9ICRsYXN0TmVzdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpW2luZGV4XVxuICAgIC8vICAgaWYoc2VsZWN0Lm11bHRpcGxlKSB7XG4gICAgLy8gICAgIGZvcihsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XG4gICAgLy8gICAgICAgY29uc3QgY2xvbmVTZWxlY3RPcHRpb24gPSBBcnJheS5mcm9tKGNsb25lU2VsZWN0Lm9wdGlvbnMpLmZpbmQobyA9PiBvLnZhbHVlID09IG9wdGlvbi52YWx1ZSlcbiAgICAvLyAgICAgICBjbG9uZVNlbGVjdE9wdGlvbi5zZWxlY3RlZFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGNsb25lU2VsZWN0LnNlbGVjdGVkSW5kZXhcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIFdoZW4gZWRpdGluZyB0aGUgZm9ybSwgdGhlIGNsb25lZCBlbGVtZW50IHdpbGwgaGF2ZSBoaWRkZW4gaWRzLiBUaGV5IG11c3QgYmUgcmVtb3ZlZCBmcm9tXG4gICAgLy8gdGhlIG5ldyBlbGVtZW50LlxuXG4gICAgY29uc3QgaGlkZGVuSWQgPSAkbmV3TmVzdGVkLnF1ZXJ5U2VsZWN0b3IoJ1tkeW5hbWljLW5lc3RlZC1maWVsZC1pZF0nKTtcblxuICAgIGlmIChoaWRkZW5JZCkge1xuICAgICAgJG5ld05lc3RlZC5yZW1vdmVDaGlsZChoaWRkZW5JZCk7XG4gICAgfSAvLyBDcmVhdGUgYSBuZXcgaW5kZXggYWNjb3JkaW5nIHRvIHRoZSBsYXN0IG5lc3RlZC5cblxuXG4gICAgY29uc3QgaW5kZXggPSArJGxhc3ROZXN0ZWQuZ2V0QXR0cmlidXRlKCdkeW5hbWljLW5lc3RlZC1pbmRleCcpICsgMTtcbiAgICB0aGlzLnJlcGxhY2VJbmRleCgkbmV3TmVzdGVkLCBpbmRleCk7IC8vIENsZWFyIHZhbHVlIG9mIGNsb25lZCBpdGVtXG5cbiAgICAkbmV3TmVzdGVkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnZhbHVlID0gXCJcIjtcbiAgICB9KTsgLy8gQWRkIG5ldyBuZXN0ZWQgb24gdGhlIHBhZ2UuXG5cbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoJG5ld05lc3RlZCk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmFmdGVyQWRkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuYWZ0ZXJBZGQoJGxhc3ROZXN0ZWQsICRuZXdOZXN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgkbmVzdGVkKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKCRuZXN0ZWQpO1xuICAgIGNvbnN0ICRhbGxOZXN0ZWQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2R5bmFtaWMtbmVzdGVkLWluZGV4XScpO1xuICAgIEFycmF5LmZyb20oJGFsbE5lc3RlZCkuZm9yRWFjaCgoJG5lc3RlZCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMucmVwbGFjZUluZGV4KCRuZXN0ZWQsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYWZ0ZXJSZW1vdmUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5hZnRlclJlbW92ZSgkYWxsTmVzdGVkKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2UgaW5kZXhlcyBpbiBgaWRgLCBgbmFtZWAgYW5kIGBmb3JgIGZvciBhbGwgY2hpbGRyZW4gZnJvbSB0aGUgZ2l2ZW4gbmVzdGVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50IC0gRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbmRleCAgIC0gVGhlIG5ldyBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAqXG4gICAqIEV4YW1wbGVzXG4gICAqXG4gICAqICAgR2l2ZW4gdGhlIGZvbGxvd2luZyBuZXN0ZWQgZWxlbWVudDpcbiAgICogICA8ZGl2IGR5bmFtaWMtbmVzdGVkLWluZGV4PVwiMFwiPlxuICAgKiAgICAgPGlucHV0IGlkPVwidXNlcl9jYXRlZ29yaWVzXzBfbmFtZVwiIG5hbWU9XCJ1c2VyW2NhdGVnb3JpZXNdWzBdW25hbWVdXCI+XG4gICAqICAgPC9kaXY+XG4gICAqXG4gICAqICAgcmVwbGFjZUluZGV4KGVsZW1lbnQsIFwiMVwiKVxuICAgKlxuICAgKiAgIFdpbGwgcmVwbGFjZSBpbmRleGVzIGluIHRoZSA8aW5wdXQgLz4gYW5kIGNoYW5nZXMgdGhlIERPTSB0bzpcbiAgICogICA8ZGl2IGR5bmFtaWMtbmVzdGVkLWluZGV4PVwiMVwiPlxuICAgKiAgICAgPGlucHV0IGlkPVwidXNlcl9jYXRlZ29yaWVzXzFfbmFtZVwiIG5hbWU9XCJ1c2VyW2NhdGVnb3JpZXNdWzFdW25hbWVdXCI+XG4gICAqICAgPC9kaXY+XG4gICAqKi9cblxuXG4gIHJlcGxhY2VJbmRleCgkbmVzdGVkLCBuZXdJbmRleCkge1xuICAgIGZvciAobGV0IGF0dHJpYnV0ZSBvZiBbJ2lkJywgJ25hbWUnLCAnZm9yJ10pIHtcbiAgICAgIGNvbnN0ICRjaGlsZHJlbiA9ICRuZXN0ZWQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlfV1gKTtcbiAgICAgIEFycmF5LmZyb20oJGNoaWxkcmVuKS5mb3JFYWNoKCRjaGlsZCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uZXdBdHRyaWJ1dGVOYW1lKCRjaGlsZCwgYXR0cmlidXRlLCBuZXdJbmRleCk7XG4gICAgICAgICRjaGlsZC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgICRuZXN0ZWQuc2V0QXR0cmlidXRlKCdkeW5hbWljLW5lc3RlZC1pbmRleCcsIG5ld0luZGV4KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEJ1aWxkIGEgbmV3IGF0dHJpYnV0ZSBuYW1lIGFjY29yZGluZyB0byB0aGUgcHJldmlvdXMgYXR0cmlidXRlIG5hbWUgYW5kIG5ldyBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnQgICAtIERPTSBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGF0dHJpYnV0ZXMnIG5hbWUgYXMgYmFzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJpYnV0ZSAtIEF0dHJpYnV0ZSBuYW1lIHByZXNlbnQgaW4gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbmRleCAgICAgLSBUaGUgbmV3IGluZGV4IHRoYXQgd2lsbCBiZSB1c2VkIGluIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICpcbiAgICogRXhhbXBsZXNcbiAgICpcbiAgICogICAgbmV3QXR0cmlidXRlTmFtZSg8aW5wdXQgbmFtZT1cInVzZXJbY2F0ZWdvcmllc11bMF1bbmFtZV1cIj4sIFwibmFtZVwiLCAxKVxuICAgKiAgICA9PiBcInVzZXJbY2F0ZWdvcmllc11bMV1bbmFtZV1cIlxuICAgKlxuICAgKiAgICBuZXdBdHRyaWJ1dGVOYW1lKDxpbnB1dCBpZD1cInVzZXJfY2F0ZWdvcmllc18wXCI+LCBcImlkXCIsIDEpXG4gICAqICAgID0+IFwidXNlcl9jYXRlZ29yaWVzXzFcIlxuICAgKiovXG5cblxuICBuZXdBdHRyaWJ1dGVOYW1lKGVsZW1lbnQsIGF0dHJpYnV0ZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5yZXBsYWNlKC9bMC05XS9nLCBpbmRleCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljTmVzdGVkOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9