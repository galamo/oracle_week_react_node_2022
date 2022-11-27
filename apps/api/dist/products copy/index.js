"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const productsRouter = express_1.default.Router();
exports.productsRouter = productsRouter;
const productsUrl = "https://restcountries.com/v3.1/all";
productsRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get(productsUrl);
        // @ts-ignore
        console.log(req["requestId"]);
        const { data } = result;
        // @ts-ignore
        res.jso({ data, rid: req["requestId"] });
    }
    catch (error) {
        return next(error);
    }
}));
productsRouter.post("/", (req, res, next) => {
    res.json({ products: [{ p1: 1 }] });
});
