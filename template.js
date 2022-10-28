const strategy = require("./strategy");

function template() {

    let name = "최진수";
    
    const print = function () {
        return strategy()();
    }

    print();

}

template();