import {registry} from "tsyringe";
import controller1 from "./controller1";
import controller2 from "./controller2";
import service from "./service";

@registry([
    {token: "ControllerInterface", useToken: controller1},
    {token: "ControllerInterface", useToken: controller2},
])
export default class Controllers {
}