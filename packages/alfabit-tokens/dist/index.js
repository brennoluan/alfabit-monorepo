"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  background: () => background,
  blue: () => blue,
  gray: () => gray,
  violet: () => violet
});
module.exports = __toCommonJS(index_exports);

// src/colors.ts
var background = {
  light: "#FFFFFF",
  dark: "#F8F8F8"
};
var gray = {
  primary: "#181818",
  secondary: "#5c5c5c",
  tertiary: "#747474",
  icon: "#7c7b7b",
  border: "#d7d7d7",
  divider: "#ededed",
  disabled: "#8a8a8a",
  white: "#FFFFFF",
  black: "#000000"
};
var blue = {
  primary: "#2d5bff",
  secondary: "#6284fd",
  tertiary: "#96ADFF",
  quaternary: "#ECF0FF",
  hover: "#1B4AF0",
  click: "#002ED0"
};
var violet = {
  primary: "#AF4BFE",
  secondary: "#BE74F9",
  tertiary: "#E2BDFF",
  quaternary: "#F5E8FF"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  background,
  blue,
  gray,
  violet
});
