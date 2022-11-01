

export default class MemberRepository {

    #ID;
    #store;

    constructor() {
        this.#ID = 0;
        this.#store = new Map();
    }

    add(member) {
        this.#ID++;
        this.#store.set(member.loginID, member);
        return this.#ID;
    }

    findOne(id) {
        return this.#store.get(id);
    }

    findByLoginId(loginId) {
        const findMember = this.#store.get(loginId);
        return findMember;
    }
}