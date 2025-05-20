(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Vue = {}));
})(this, (function (exports) { 'use strict';

    var a = function a() {
      console.log('1', 1);
    };
    var b = 111;
    var index = {
      a: a
    };

    exports.a = a;
    exports.b = b;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bundle.js.map
