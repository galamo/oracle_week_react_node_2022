import { z, AnyZodObject } from "zod"



// validate

export const validate = (schema: AnyZodObject) => {
    // @ts-ignore
    return async function (req, res, next) {
        try {
            await schema.parseAsync({
                body: req.body
            })
            return next()
        } catch (error) {
            console.log(error)
            return next(error)
        }
    }

}

export const countrySchema = z.object({
    body: z.object({
        countryName: z.string({ required_error: "country is not string" })
    })
})

type CountrySchema = typeof countrySchema;
