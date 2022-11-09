import "reflect-metadata";
import { injectable } from "tsyringe";
import {NextFunction, Request, Response} from "express";

function Middleware() {
    return (target: Function) => {
        Reflect.defineMetadata("CLASSTYPE", "middleware", target);
    }
}

interface Middleware {
    process(err, req: Request, res: Response, next: NextFunction): any;
}

@injectable()
@Middleware()
export default class ErrorMiddleware implements Middleware {
    process(error: Error, req: Request, res: Response, next: NextFunction): any {
        try {
            const status: number = error.status || 500;
            const message: string = error.message || "internal server error";

            if (error instanceof EvalError) {

            }

            console.log(`[${req.method}] ${req.path} : ${message}`);
            res.status(status).send(message);
        }
        catch(ex) {
            next(ex);
        }
    }
};