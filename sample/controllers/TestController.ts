import {injectable} from "tsyringe";
import {Controller} from "../decorators/Controller";
import {Get, Patch, Post} from "../decorators/Handlers";

@injectable()
@Controller("/test")
export default class TestController {

    @Get("/hello")
    public hello(req, res, next) {
        res.send("hello2");
    }

};