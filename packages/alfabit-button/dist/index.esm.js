import React from 'react';
import styled, { css } from 'styled-components';
import { blue, gray } from '@brennoluan/alfabit-tokens';

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

var StyledButton = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "primary" && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n      color: ", ";\n      border: none;\n\n      &:hover {\n        background: ", ";\n      }\n\n      &:active {\n        background: ", ";\n      }\n\n      &:disabled {\n        background: ", ";\n        cursor: not-allowed;\n      }\n    "], ["\n      background: ", ";\n      color: ", ";\n      border: none;\n\n      &:hover {\n        background: ", ";\n      }\n\n      &:active {\n        background: ", ";\n      }\n\n      &:disabled {\n        background: ", ";\n        cursor: not-allowed;\n      }\n    "])), blue.primary, gray.white, blue.hover, blue.click, gray.disabled);
}, function (_a) {
    var variant = _a.variant;
    return variant === "secondary" && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: transparent;\n      color: ", ";\n      border: 2px solid ", ";\n\n      &:hover {\n        background: #ede9ff;\n      }\n\n      &:active {\n        background: #d5ccff;\n      }\n\n      &:disabled {\n        color: #c3c3c3;\n        border-color: #c3c3c3;\n        cursor: not-allowed;\n      }\n    "], ["\n      background: transparent;\n      color: ", ";\n      border: 2px solid ", ";\n\n      &:hover {\n        background: #ede9ff;\n      }\n\n      &:active {\n        background: #d5ccff;\n      }\n\n      &:disabled {\n        color: #c3c3c3;\n        border-color: #c3c3c3;\n        cursor: not-allowed;\n      }\n    "])), blue.primary, blue.primary);
}, function (_a) {
    var size = _a.size;
    return size === "sm" && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      padding: 8px 16px;\n      font-size: 14px;\n    "], ["\n      padding: 8px 16px;\n      font-size: 14px;\n    "])));
}, function (_a) {
    var size = _a.size;
    return size === "md" && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      padding: 12px 24px;\n      font-size: 16px;\n    "], ["\n      padding: 12px 24px;\n      font-size: 16px;\n    "])));
}, function (_a) {
    var size = _a.size;
    return size === "lg" && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      padding: 16px 32px;\n      font-size: 18px;\n    "], ["\n      padding: 16px 32px;\n      font-size: 18px;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, children = _a.children, disabled = _a.disabled, onClick = _a.onClick;
    return (React.createElement(StyledButton, { size: size, variant: variant, disabled: disabled, onClick: onClick }, children));
};

export { Button };
