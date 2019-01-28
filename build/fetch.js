"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const p_retry_1 = __importDefault(require("p-retry"));
exports.fetch = (url, timeout = 7000, retries = 1) => __awaiter(this, void 0, void 0, function* () {
    const toFetch = () => __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.request({ url, timeout });
        if (response.status === 404) {
            throw new p_retry_1.default.AbortError(response.statusText);
        }
        return response;
    });
    return p_retry_1.default(toFetch, {
        retries,
        onFailedAttempt: (error) => {
            console.log(`[WARN] Fetch ${url} attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} attempts left.`);
        },
    });
});
//# sourceMappingURL=fetch.js.map