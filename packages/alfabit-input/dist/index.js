'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var InputContainer = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  background: #f8f8f8;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n  border: 1px solid transparent;\n\n  ", "\n\n  &:hover {\n    border: 1px #1b4af0 solid;\n  }\n"], ["\n  width: 100%;\n  background: #f8f8f8;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n  border: 1px solid transparent;\n\n  ", "\n\n  &:hover {\n    border: 1px #1b4af0 solid;\n  }\n"])), function (_a) {
    var hasLabel = _a.hasLabel;
    return (hasLabel ? "6px 16px" : "12px 16px");
}, function (_a) {
    var isFocused = _a.isFocused;
    return isFocused && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border: 1px #1b4af0 solid;\n    "], ["\n      border: 1px #1b4af0 solid;\n    "])));
});
var Label = styled__default["default"].label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #5c5c5c;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n"], ["\n  color: #5c5c5c;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 16px;\n"])));
var StyledInput = styled__default["default"].input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  background: transparent;\n  border: none;\n  color: #181818;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n\n  &::placeholder {\n    color: #8a8a8a;\n  }\n"], ["\n  width: 100%;\n  background: transparent;\n  border: none;\n  color: #181818;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  padding: 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  ", "\n\n  &::placeholder {\n    color: #8a8a8a;\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      opacity: 0.5;\n    "], ["\n      opacity: 0.5;\n    "])));
});
styled__default["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Input = function (_a) {
    var disabled = _a.disabled, placeholder = _a.placeholder, label = _a.label, props = __rest(_a, ["disabled", "placeholder", "label"]);
    var _b = React.useState(false), isFocused = _b[0], setIsFocused = _b[1];
    return (React__default["default"].createElement(InputContainer, { hasLabel: !!label, isFocused: isFocused },
        label && React__default["default"].createElement(Label, null, label),
        React__default["default"].createElement(StyledInput, __assign({ disabled: disabled, placeholder: placeholder }, props, { onFocus: function () { return setIsFocused(true); }, onBlur: function () { return setIsFocused(false); } }))));
};

exports.Input = Input;
