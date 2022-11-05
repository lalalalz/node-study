import {ControllerInterface} from "./ControllerInterface";
import {registry, singleton} from "tsyringe";
import controller1 from "./controller1";
import {Controller} from "../decorators/Controller";
import {Get} from "../decorators/Handlers";

@singleton()
@Controller("/controller2")
export default class controller2 implements ControllerInterface {

    constructor() {
        console.log("controller2 생성");
    }

    @Get("/hello/:id")
    public hello(req, res, next) {
        console.log(req.params);
        console.log("hello");
        res.send("hello");
    }

};
