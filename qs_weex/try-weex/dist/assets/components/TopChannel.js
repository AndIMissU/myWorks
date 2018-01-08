// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    methods: {
        chooseChannel: function chooseChannel() {}
    }
};

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 114,
    "left": 0,
    "right": 0,
    "height": 54,
    "zIndex": 10,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": 1,
    "borderBottomColor": "#d9d9d9"
  },
  "w-ipx": {
    "top": 154
  },
  "scroller": {
    "height": 54,
    "flexDirection": "row"
  },
  "i-c": {
    "paddingTop": 10,
    "paddingLeft": 45,
    "paddingRight": 45,
    "paddingBottom": 6,
    "fontSize": 26,
    "color": "#333333"
  },
  "c-act": {
    "color": "#b4282d"
  },
  "j-uline": {
    "position": "absolute",
    "left": 30,
    "bottom": 0,
    "width": 82,
    "height": 4,
    "backgroundColor": "#b4282d"
  },
  "more": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": 52,
    "width": 100,
    "backgroundColor": "#fafafa",
    "textAlign": "center",
    "paddingTop": 10,
    "opacity": 0.96,
    "boxShadow": "-6px -4px 4px #fafafa"
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "loadmoreoffset": "750px",
      "showScrollbar": "false"
    },
    on: {
      "click": _vm.chooseChannel
    }
  }, [_c('div', {
    ref: "jcLine",
    staticClass: ["j-uline"],
    style: _vm.jLPosition
  }), _c('text', {
    ref: "actJC",
    staticClass: ["i-c", "c-act"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("推荐")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("限时购")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("新品")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("居家")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("餐厨")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("配件")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("服装")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("电器")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("洗护")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("杂货")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("饮食")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("婴童")]), _c('text', {
    staticClass: ["i-c"],
    attrs: {
      "jact": "true"
    }
  }, [_vm._v("志趣")])]), _c('text', {
    staticClass: ["more", "iconfont"]
  }, [_vm._v("")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/myWorks/qs_weex/try-weex/src/assets/components/TopChannel.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0d55f0db"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })

/******/ });