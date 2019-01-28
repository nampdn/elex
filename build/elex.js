"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const p_some_1 = __importDefault(require("p-some"));
const p_any_1 = __importDefault(require("p-any"));
exports.electSome = (urls, options) => {
    const allChecks = urls.map(url => {
        const path = options ? options.checkPath : '';
        return `${url}/${path}`;
    });
    return p_some_1.default(allChecks, { count: 1 });
};
exports.electOne = (urls, options) => {
    const allChecks = urls.map(url => {
        const path = options ? options.checkPath : '';
        return `${url}/${path}`;
    });
    return p_any_1.default(allChecks);
};
//# sourceMappingURL=elex.js.map