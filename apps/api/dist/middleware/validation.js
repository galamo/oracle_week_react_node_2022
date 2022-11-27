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
Object.defineProperty(exports, "__esModule", { value: true });
exports.countrySchema = exports.validate = void 0;
const zod_1 = require("zod");
// validate
const validate = (schema) => {
    // @ts-ignore
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield schema.parseAsync({
                    body: req.body
                });
                return next();
            }
            catch (error) {
                console.log(error);
                return next(error);
            }
        });
    };
};
exports.validate = validate;
exports.countrySchema = zod_1.z.object({
    body: zod_1.z.object({
        countryName: zod_1.z.string({ required_error: "country is not string" })
    })
});
