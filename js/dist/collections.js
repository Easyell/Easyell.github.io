/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAutobind = __webpack_require__(5);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(7);

	var NavBar = function (_React$Component) {
	  _inherits(NavBar, _React$Component);

	  function NavBar(props) {
	    _classCallCheck(this, NavBar);

	    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

	    (0, _reactAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(NavBar, [{
	    key: 'buildTitles',
	    value: function buildTitles() {
	      var _props = this.props,
	          titles = _props.titles,
	          current = _props.current;

	      var list = [];
	      titles.forEach(function (title, index) {
	        var classString = index == current ? "link_icon selected" : "link_icon";
	        list.push(_react2.default.createElement(
	          'a',
	          { className: classString, href: title.href },
	          title.text
	        ));
	        list.push(_react2.default.createElement(
	          'span',
	          null,
	          '/'
	        ));
	      });
	      return list;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'NavBar' },
	        _react2.default.createElement(
	          'div',
	          { className: 'right_block' },
	          _react2.default.createElement('img', { className: 'dice_icon', src: '/image/dice_icon.png' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'links_container' },
	            this.buildTitles()
	          )
	        )
	      );
	    }
	  }]);

	  return NavBar;
	}(_react2.default.Component);

	NavBar.defaultProps = {
	  titles: [{
	    href: '/',
	    text: "HOME"
	  }, {
	    href: '/about.html',
	    text: "ABOUT"
	  }, {
	    href: '/collections.html',
	    text: "COLLECTIONS"
	  }]
	};

	module.exports = NavBar;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoBind;
	var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

	var toBind = [];

	function autoBind(context) {
	  if (context === undefined) {
	    console.error('Autobind error: No context provided.');
	    return;
	  }

	  var objPrototype = Object.getPrototypeOf(context);

	  if (arguments.length > 1) {
	    // If a list of methods to bind is provided, use it.
	    toBind = Array.prototype.slice.call(arguments, 1);
	  } else {
	    // If no list of methods to bind is provided, bind all available methods in class.
	    toBind = Object.getOwnPropertyNames(objPrototype);
	  }

	  toBind.forEach(function (method) {
	    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

	    if (descriptor === undefined) {
	      console.warn('Autobind: "' + method + '" method not found in class.');
	      return;
	    }

	    // Return if it's special case function or if not a function at all
	    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
	      return;
	    }

	    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
	  });
	}

	/**
	* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	* Return a descriptor removing the value and returning a getter
	* The getter will return a .bind version of the function
	* and memoize the result against a symbol on the instance
	*/
	function boundMethod(objPrototype, method, descriptor) {
	  var fn = descriptor.value;

	  return {
	    configurable: true,
	    get: function get() {
	      if (this === objPrototype || this.hasOwnProperty(method)) {
	        return fn;
	      }

	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, method, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.4.1.0@sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.4.1.0@sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'flicker';\n  src: url(\"/font/flicker.otf\"); }\n\n#NavBar {\n  margin-top: 25px;\n  width: 100%;\n  position: absolute; }\n  #NavBar .right_block {\n    float: right;\n    margin-right: 5%; }\n  #NavBar .right_block:hover .links_container {\n    display: block;\n    animation: show_links 0.5s; }\n  #NavBar .right_block:hover .dice_icon {\n    animation: none; }\n  #NavBar .dice_icon {\n    float: right;\n    height: 40px;\n    animation: shake_dice 0.2s infinite; }\n  #NavBar .links_container {\n    display: none;\n    float: right;\n    padding: 10px;\n    font-family: flicker;\n    font-size: 24px;\n    margin-right: 40px;\n    color: white;\n    background-color: #FCC030; }\n    #NavBar .links_container .link_icon {\n      margin: 10px;\n      height: 20px;\n      text-decoration: none;\n      color: white; }\n    #NavBar .links_container .selected {\n      color: black; }\n\n@keyframes shake_dice {\n  0% {\n    -ms-transform: rotate(-10deg);\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg); }\n  50% {\n    -ms-transform: rotate(20deg);\n    -webkit-transform: rotate(20deg);\n    transform: rotate(20deg); }\n  100% {\n    -ms-transform: rotate(-10deg);\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg); } }\n\n@keyframes show_links {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(17);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(20);

	var About = function (_React$Component) {
	  _inherits(About, _React$Component);

	  function About() {
	    _classCallCheck(this, About);

	    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
	  }

	  _createClass(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'homeContainer' },
	        _react2.default.createElement(_index2.default, { current: 2 }),
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(_index4.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'foot' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'All content designed by jiangyiyi at 2016',
	            _react2.default.createElement('br', null),
	            'No reproduction without express promission',
	            _react2.default.createElement('br', null),
	            'Developed by guoshencheng'
	          )
	        )
	      );
	    }
	  }]);

	  return About;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(About, null), document.querySelector('#topContainer'));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAutobind = __webpack_require__(5);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(18);

	var CollectionItem = function (_React$Component) {
	  _inherits(CollectionItem, _React$Component);

	  function CollectionItem(props) {
	    _classCallCheck(this, CollectionItem);

	    var _this = _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).call(this, props));

	    (0, _reactAutobind2.default)(_this);
	    return _this;
	  }

	  _createClass(CollectionItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          href = _props.href,
	          image = _props.image,
	          text = _props.text,
	          desc = _props.desc,
	          title = _props.title;

	      var style = {
	        backgroundImage: "url(" + image + ")"
	      };
	      return _react2.default.createElement(
	        'a',
	        { href: href, style: style, className: 'collection_item' },
	        _react2.default.createElement(
	          'div',
	          { className: 'collection_item_mask' },
	          _react2.default.createElement(
	            'p',
	            { className: 'collection_item_desc' },
	            desc
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'collection_item_title' },
	            title
	          ),
	          _react2.default.createElement('img', { src: '/image/cover_plus.png' })
	        )
	      );
	    }
	  }]);

	  return CollectionItem;
	}(_react2.default.Component);

	var CollectionList = function (_React$Component2) {
	  _inherits(CollectionList, _React$Component2);

	  function CollectionList(props) {
	    _classCallCheck(this, CollectionList);

	    var _this2 = _possibleConstructorReturn(this, (CollectionList.__proto__ || Object.getPrototypeOf(CollectionList)).call(this, props));

	    (0, _reactAutobind2.default)(_this2);
	    return _this2;
	  }

	  _createClass(CollectionList, [{
	    key: 'buildItems',
	    value: function buildItems() {
	      var collections = this.props.collections;

	      var list = [];
	      collections.forEach(function (collection) {
	        list.push(_react2.default.createElement(CollectionItem, { image: collection.image, href: collection.href, title: collection.title, desc: collection.desc }));
	      });
	      return list;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'CollectionList' },
	        this.buildItems()
	      );
	    }
	  }]);

	  return CollectionList;
	}(_react2.default.Component);

	CollectionList.defaultProps = {
	  collections: [{
	    href: '/collections/renyanzhi.html',
	    image: "/image/renyanzhi_cover.png",
	    desc: "book design .editorial .",
	    title: "人言志"
	  }, {
	    href: '/collections/biye.html',
	    image: "/image/biye_cover.png",
	    desc: "illustation .book design .editorial",
	    title: "MAMA食谱日记"
	  }, {
	    href: '/collections/newsletter.html',
	    image: "/image/newsletter_cover.png",
	    desc: "book design .editorial",
	    title: "NEWSLETTER 筑境手册"
	  }, {
	    href: '/collections/banner.html',
	    image: "/image/renyan_activity_cover.png",
	    desc: "banner",
	    title: "招贴&活动页"
	  }]
	};

	module.exports = CollectionList;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.4.1.0@sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.4.1.0@sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'flicker';\n  src: url(\"/font/flicker.otf\"); }\n\n#CollectionList {\n  width: 100%;\n  height: 100%; }\n  #CollectionList .collection_item {\n    position: relative;\n    margin-left: 1.2%;\n    margin-right: 1.2%;\n    margin-top: 1%;\n    margin-bottom: 1%;\n    display: block;\n    float: left;\n    height: 46%;\n    width: 45.2%;\n    background-size: cover; }\n    #CollectionList .collection_item .collection_item_mask {\n      position: absolute;\n      display: none;\n      width: 100%;\n      height: 100%;\n      top: 0px;\n      background: rgba(255, 255, 255, 0.8); }\n      #CollectionList .collection_item .collection_item_mask p {\n        text-decoration: none;\n        margin-left: 10%;\n        width: 80%;\n        color: #333333; }\n      #CollectionList .collection_item .collection_item_mask img {\n        position: absolute;\n        right: 20px;\n        bottom: 20px;\n        height: 15px;\n        width: 15px; }\n      #CollectionList .collection_item .collection_item_mask .collection_item_desc {\n        margin-bottom: 0px;\n        margin-top: 20px;\n        font-size: 9px; }\n      #CollectionList .collection_item .collection_item_mask .collection_item_title {\n        margin-bottom: 0px;\n        margin-top: 8px;\n        font-size: 14px; }\n  #CollectionList .collection_item:hover .collection_item_mask {\n    display: block; }\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.4.1.0@sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.4.1.0@sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "html {\n  height: 100%; }\n\nbody {\n  margin: 0px;\n  height: 100%;\n  font-family: monospace;\n  background-color: #FDD10E; }\n  body #topContainer {\n    height: 100%; }\n    body #topContainer #homeContainer {\n      height: 100%; }\n    body #topContainer .container {\n      position: absolute;\n      left: 0px;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      width: 65%;\n      height: 70%; }\n    body #topContainer #foot {\n      font-size: 12px;\n      color: white;\n      position: absolute;\n      bottom: 0px;\n      width: 65%;\n      left: 18%; }\n", ""]);

	// exports


/***/ }
/******/ ]);