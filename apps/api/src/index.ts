import express, { NextFunction, Request, Response } from "express"
import { productsRouter } from "./products";
import { countriesRouter } from "./countries";
import cors from "cors"
import addRequestId from "./middleware/addReqId";
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json())
app.use(addRequestId)
app.use(cors())
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

app.listen(process.env.PORT, () => {
    console.log("Listening to Port ", process.env.PORT)
})