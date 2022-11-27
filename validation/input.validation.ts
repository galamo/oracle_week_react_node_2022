import { Console } from "console";
import express, { Request, Response, NextFunction } from "express";
import { z, AnyZodObject } from "zod";


export const validate = (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
        console.log("test arrived")
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            console.log("validation passed")
            return next();
        } catch (error) {
            return res.status(400).json(error);
        }
    };

;


export const dataSchema = z.object({
    body: z.object({
        fullName: z.string({
            required_error: "Full name is required",
        }),
        email: z
            .string({
                required_error: "Email is required",
            })
            .email("Not a valid email"),
    }),
});