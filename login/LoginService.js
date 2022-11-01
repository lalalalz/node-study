import Member from "./Member.js";


export default class LoginService {

    #memberRepository;

    constructor(memberRepository) {
        this.#memberRepository = memberRepository;
    }

    join = (loginId, password) => {
        const findMember = this.#memberRepository.findByLoginId(loginId);

        if (findMember == null) {
            this.#memberRepository.add(new Member(loginId, password));
            return true;
        }

        return false;
    }

    login = (loginId, password) => {
        let findMember = this.#memberRepository.findByLoginId(loginId);
        return findMember
            && findMember.loginID == loginId
            && findMember.password == password;
    }
}