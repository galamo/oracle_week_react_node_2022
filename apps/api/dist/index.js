"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = require("./products");
const countries_1 = require("./countries");
const addReqId_1 = __importDefault(require("./middleware/addReqId"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(addReqId_1.default);
app.get("/", (req, res, next) => {
    console.log("api is working");
    res.json({ message: "api is working", time: new Date().toISOString() });
});
app.use("/products", products_1.productsRouter);
app.use("/countries", countries_1.countriesRouter);
app.get("/long-calc", (req, res, next) => {
    res.json({ message: "long-calc finished", time: new Date().toISOString() });
});
// @ts-ignore
app.use((error, req, res, next) => {
    res.status(500).send(`something is not working well! contact the admin with: ${req.requestId}`);
});
app.listen(4000, () => {
    console.log("Listening to Port 4000");
});
