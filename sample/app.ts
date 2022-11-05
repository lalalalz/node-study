import "reflect-metadata";
import express from "express";
import {IRouter} from "./decorators/Handlers";
import {controllers} from "./controllers";
import ErrorMiddleware from "./middlewares/ErrorMiddleware";
import MemberService from "./service/MemberService";

class Application {

    private readonly controllers: any[];
    private readonly middlewares: any[];
    private readonly instance: express.Application;

    constructor(controllers: any[]) {
        this.instance = express();
        this.controllers = controllers;
        this.registerRouters();
        this.registerMiddlewares();
    }

    public listen() {
        this.instance
            .listen(8080);
    }

    private registerRouters(): void {
        this.controllers
            .forEach(this.register());
    }

    private registerMiddlewares() {
        const errorMiddleware = new ErrorMiddleware();
        this.instance.use(errorMiddleware["process"].bind(errorMiddleware));
    }


    private register() {
        return (controller) => {
            // TODO: controller1 DL 로직으로 변경하기
            console.log(controller);
            const instanceOfController = new controller(new MemberService());

            const router = express.Router();
            const routePath = Reflect.getMetadata("routePath", controller);
            const httpHandler: IRouter[] = Reflect.getMetadata("routers", controller);

            httpHandler.forEach(({method, path, handlerName}) => {
                console.log(method, path, handlerName);
                router[method](path,
                    instanceOfController[String(handlerName)].bind(instanceOfController));
            });

            this.instance.use(routePath, router);
        }
    }
}

const application = new Application(controllers);

application.listen();