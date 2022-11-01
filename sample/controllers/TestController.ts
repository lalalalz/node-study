import {injectable} from "tsyringe";
import {Controller} from "../decorators/Controller";

@injectable()
@Controller("/test")
export default class TestController {

}