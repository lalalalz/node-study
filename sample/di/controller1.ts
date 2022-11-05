import {inject, injectable, registry, singleton} from "tsyringe";
import service from "./service";
import {ControllerInterface} from "./ControllerInterface";
import {Controller} from "../decorators/Controller";
import {Get} from "../decorators/Handlers";


@singleton()
@Controller("/controller1")
export default class controller1 implements ControllerInterface {

    constructor(@inject(service) private readonly service: service) {
        this.service.login();
        console.log("controller1 생성");
    }

    @Get("/login")
    public login(req, res, next) {
        console.log(this.service);
        this.service.login();
        res.send("login");
    }

}