import {injectable, singleton} from "tsyringe";

@singleton()
export default class service {

    constructor() {
        console.log("service 생성")
    }

    public login() {
        console.log("로그인 됐습니다리~");
    }
}