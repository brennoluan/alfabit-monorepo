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

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var StyledButton = styled__default["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "primary" && styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: #5033c3;\n      color: #ffffff;\n      border: none;\n\n      &:hover {\n        background: #3d1eb3;\n      }\n\n      &:active {\n        background: #2e0f9e;\n      }\n\n      &:disabled {\n        background: #c3c3c3;\n        cursor: not-allowed;\n      }\n    "], ["\n      background: #5033c3;\n      color: #ffffff;\n      border: none;\n\n      &:hover {\n        background: #3d1eb3;\n      }\n\n      &:active {\n        background: #2e0f9e;\n      }\n\n      &:disabled {\n        background: #c3c3c3;\n        cursor: not-allowed;\n      }\n    "])));
}, function (_a) {
    var variant = _a.variant;
    return variant === "secondary" && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: transparent;\n      color: #5033c3;\n      border: 2px solid #5033c3;\n\n      &:hover {\n        background: #ede9ff;\n      }\n\n      &:active {\n        background: #d5ccff;\n      }\n\n      &:disabled {\n        color: #c3c3c3;\n        border-color: #c3c3c3;\n        cursor: not-allowed;\n      }\n    "], ["\n      background: transparent;\n      color: #5033c3;\n      border: 2px solid #5033c3;\n\n      &:hover {\n        background: #ede9ff;\n      }\n\n      &:active {\n        background: #d5ccff;\n      }\n\n      &:disabled {\n        color: #c3c3c3;\n        border-color: #c3c3c3;\n        cursor: not-allowed;\n      }\n    "])));
}, function (_a) {
    var size = _a.size;
    return size === "sm" && styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      padding: 8px 16px;\n      font-size: 14px;\n    "], ["\n      padding: 8px 16px;\n      font-size: 14px;\n    "])));
}, function (_a) {
    var size = _a.size;
    return size === "md" && styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      padding: 12px 24px;\n      font-size: 16px;\n    "], ["\n      padding: 12px 24px;\n      font-size: 16px;\n    "])));
}, function (_a) {
    var size = _a.size;
    return size === "lg" && styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      padding: 16px 32px;\n      font-size: 18px;\n    "], ["\n      padding: 16px 32px;\n      font-size: 18px;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, children = _a.children, disabled = _a.disabled, onClick = _a.onClick;
    return (React__default["default"].createElement(StyledButton, { size: size, variant: variant, disabled: disabled, onClick: onClick }, children));
};

exports.Button = Button;
