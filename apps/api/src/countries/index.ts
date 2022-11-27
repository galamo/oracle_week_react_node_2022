import express, { NextFunction, Request, Response } from "express"
import axios from "axios"
const countriesRouter = express.Router();
const productsUrl = "https://restcountries.com/v3.1/all";
import index from "./index.json"
import { validate, countrySchema } from "../middleware/validation";

type UserType = typeof index;

countriesRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await axios.get(productsUrl)
        // @ts-ignore
        console.log(req["requestId"])
        const { data } = result;
        // @ts-ignore
        res.json({ data, rid: req["requestId"] })
    } catch (error) {
        return next(error)
    }
})
//  we will use the middleware here!
countriesRouter.post("/", validate(countrySchema), (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    res.json({ data: req.body })
})
export { countriesRouter };