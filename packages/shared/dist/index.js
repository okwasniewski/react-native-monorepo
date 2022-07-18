"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = exports.add = void 0;
const add = (a, b) => {
    return a + b;
};
exports.add = add;
var TestComponent_1 = require("./TestComponent");
Object.defineProperty(exports, "TestComponent", { enumerable: true, get: function () { return __importDefault(TestComponent_1).default; } });
