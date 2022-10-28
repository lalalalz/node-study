

export default class MemberRepository {

    #ID;
    #store;

    constructor() {
        this.#ID = 0;
        this.#store = new Map();
    }

    add(loginId) {
        this.#ID++;
        this.#store.set(this.#ID, loginId);
        return loginId;
    }
}