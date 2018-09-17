'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // const importVue = require("./import.js");


var _import = require('./import.js');

var _import2 = _interopRequireDefault(_import);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var path = arguments[1];
    var title = arguments[2];
    var ex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var fileUrl = 'views/';
    var configs = {
        fileUrl: fileUrl,
        name: "",
        path: "/",
        title: title
    };
    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) == "object") {
        for (var i in config) {
            configs[i] = config[i];
        }
    } else {
        configs.name = config;
        configs.path = path || '/' + config.split("/").pop();
    }
    for (var _i in ex) {
        configs[_i] = ex[_i];
    }
    return (0, _import2.default)(configs);
};