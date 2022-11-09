import "reflect-metadata";
import {container, registry} from "tsyringe";
import controller1 from "./di/controller1";
import {ControllerInterface} from "./di/ControllerInterface";
import controller2 from "./di/controller2";
import Controllers from "./di/Controllers";

const controllers = new Controllers();

import express from "express";
import {IRouter} from "./decorators/Handlers";
import exp from "constants";
import ErrorMiddleware from "./middlewares/ErrorMiddleware";

function start() {
    const app = express();
    const router = express.Router();
    const controllers: ControllerInterface[] = container.resolveAll<ControllerInterface>("ControllerInterface");

    app.use(express.urlencoded());
    app.use(express.json());

    controllers.forEach(c => {
        console.log(c.constructor.name);
        const routePath = Reflect.getMetadata("routePath", c.constructor);
        const routers: IRouter[] = Reflect.getMetadata("routers", c.constructor);

        routers.forEach(({method, path, handlerName}) => {
            // console.log(method, path, handlerName);
            router[method](path, c[String(handlerName)].bind(c));
        })
        app.use(routePath, router);
    })

    const errorMiddleware = new ErrorMiddleware();
    app.use(errorMiddleware.process);

    app.listen(8080, () => console.log("server is running "));
}

start();