// @ts-ignore
import uuid4 from "uuid4";

//@ts-ignore
export default function addRequestId(req, res, next) {
    const id = uuid4();
    // @ts-ignore
    req.requestId = id;
    console.log(req.originalUrl)
    next();
}