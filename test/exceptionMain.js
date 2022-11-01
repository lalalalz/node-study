const exception = require("./exception2.js");

async function main() {

    console.log("main start..");

    try {
        await exception("ex");
        console.log("예외가 터지지 않았습니다.");
    }
    catch (e) {
        console.log("에러가 main까지 전달됐습니다.");
    }

    console.log("main end..");
}

main();