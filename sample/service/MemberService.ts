import {injectable} from "tsyringe";

@injectable()
export default class MemberService {

    public login(id, password) {
        console.log(id + "님 로그인 완료");
    }
}