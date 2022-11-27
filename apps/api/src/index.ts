import express, { NextFunction, Request, Response } from "express"
import { productsRouter } from "./products";
import { countriesRouter } from "./countries";
import addRequestId from "./middleware/addReqId";

const app = express();
app.use(express.json())
app.use(addRequestId)

app.get("/", (req: Partial<Request>, res: Response, next: NextFunction) => {
    console.log("api is working")
    res.json({ message: "api is working", time: new Date().toISOString() })
})

app.use("/products", productsRouter)
app.use("/countries", countriesRouter)

app.get("/long-calc", (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "long-calc finished", time: new Date().toISOString() })
})
// @ts-ignore
app.use((error, req, res, next) => {
    res.status(500).send(`something is not working well! contact the admin with: ${req.requestId}`)
})

app.listen(4000, () => {
    console.log("Listening to Port 4000")
})