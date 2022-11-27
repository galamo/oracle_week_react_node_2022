import express, { NextFunction, Request, Response } from "express"
import axios from "axios"
const productsRouter = express.Router();
const productsUrl = "https://restcountries.com/v3.1/all";
import index from "./index.json"

type UserType = typeof index;

productsRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
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
productsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({ products: [{ p1: 1 }] })
})
export { productsRouter };