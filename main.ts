import express, { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";
import { validate, dataSchema } from "./validation/input.validation";
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
    return res.json({ message: "Validation with Zod 👊" });
});

app.post("/create",
    validate(dataSchema),
    (req: Request, res: Response): Response => {
        return res.json({ ...req.body });
    }
);

const start = (): void => {
    try {
        app.listen(3333, () => {
            console.log("Server started on port 3333");
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start()


