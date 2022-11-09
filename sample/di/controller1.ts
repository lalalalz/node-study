import {inject, injectable, registry, singleton} from "tsyringe";
import service from "./service";
import {ControllerInterface} from "./ControllerInterface";
import {Controller} from "../decorators/Controller";
import {Get, Post} from "../decorators/Handlers";
import testDto from "./testDto";
import {validateOrReject} from "class-validator";
import {AsyncError} from "../decorators/AsyncError";


@singleton()
@Controller("/controller1")
export default class controller1 implements ControllerInterface {

    constructor(@inject(service) private readonly service: service) {
        this.service.login();
        console.log("controller1 생성");
    }

    @Post("/login")
    @AsyncError()
    public async login(req, res, next) {
        const {id, name, age} = req.body;

        const testDto1 = new testDto(id, name, age);
        console.log(testDto1);

        await validateOrReject(testDto1);

        this.service.login();
        res.send("login");
    }

}