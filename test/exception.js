class Hello {

    constructor() {
        this.test();

    }

    test() {
        const myName = "hello";
        const myAge = 10;

        this.hello2();
    }

    hello2() {
        for (let i = 0; i < 10; i++) {
            this.extracted();
        }
    }
}

module.exports = function myException(msg) {

    if (msg == "ex") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // throw new Error("에러가 터졌습니다!");
                reject(new Error("에러가 터졌습니다."));
            }, 2000);
        })
    }
}