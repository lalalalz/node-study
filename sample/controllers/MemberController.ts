import {injectable} from "tsyringe";
import {Controller} from "../decorators/Controller";

@injectable()
@Controller("/members")
export default class MemberController {

    @Get("/login")
    login(req, res, next) {
        res.send("hello");
    }
}