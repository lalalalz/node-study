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

    process(exception, req: Request, res: Response, next: NextFunction): any {
        try {
            const status: number = exception.status || 500;
            const message: string = exception.message || "internal server error";
            console.log(`[${req.method}] ${req.path} : ${message}`);

            res.status(status).send(message);
        }
        catch(ex) {
            next(ex);
        }
    }
};