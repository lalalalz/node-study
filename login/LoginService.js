

export default class LoginService {

    #memberRepository;

    constructor(memberRepository) {
        this.#memberRepository = memberRepository;
    }

    login(loginId, password) {
        console.log("로그인 확인" + loginId + "," + password);
        return loginId == "lalalalz" && password == "1234";
    }
}