import {injectable} from "tsyringe";
import {Controller} from "../decorators/Controller";
import {Get, Post} from "../decorators/Handlers";
import {AsyncError} from "../decorators/AsyncError";
import {Inject} from "typedi";
import MemberService from "../service/MemberService";

@injectable()
@Controller("/members")
export default class MemberController {

    private readonly memberService: MemberService

    constructor(memberService: MemberService) {
        this.memberService = memberService;
        console.log("MemberController");
    }

    @Get("/login")
    public login(req, res, next): void {
        const {id, password} = req.query;
        this.memberService.login(id, password);
        res.send("hello" + id);
    }

    @Post("/hello")
    public hello(req, res, next): void {
        res.send("fuck you");
    }

    @Get("/ex")
    @AsyncError()
    public async exception(req, res, next) {
        await new Promise((resolve, reject) =>
            setTimeout(() => reject(new Error("hell")), 2000));
    }
};