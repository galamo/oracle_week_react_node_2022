"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const uuid4_1 = __importDefault(require("uuid4"));
//@ts-ignore
function addRequestId(req, res, next) {
    const id = (0, uuid4_1.default)();
    // @ts-ignore
    req.requestId = id;
    console.log(req.originalUrl);
    next();
}
exports.default = addRequestId;
