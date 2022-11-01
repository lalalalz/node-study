export default class Member {

    #loginID;
    #password;

    constructor(loginID, password) {
        this.#loginID = loginID;
        this.#password = password;
        this._loginID = loginID;
        this._password = password;
    }


    get loginID() {
        return this._loginID;
    }

    set loginID(value) {
        this._loginID = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }
}