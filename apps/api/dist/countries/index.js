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
exports.countriesRouter = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const countriesRouter = express_1.default.Router();
exports.countriesRouter = countriesRouter;
const productsUrl = "https://restcountries.com/v3.1/all";
const validation_1 = require("../middleware/validation");
countriesRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get(productsUrl);
        // @ts-ignore
        console.log(req["requestId"]);
        const { data } = result;
        // @ts-ignore
        res.json({ data, rid: req["requestId"] });
    }
    catch (error) {
        return next(error);
    }
}));
//  we will use the middleware here!
countriesRouter.post("/", (0, validation_1.validate)(validation_1.countrySchema), (req, res, next) => {
    console.log(req.body);
    res.json({ data: req.body });
});
