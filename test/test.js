// const server = require("../main");
const chai = require("chai");
const should = chai.should();
const assert = chai.assert;
const chaiHttp = require("chai-http");
const request = require("request");

chai.use(chaiHttp);

describe("API TEST", () => {
    describe("GET request /", () => {
        it("should return hello world", (done) => {
            // chai.request(server)
            //     .get("/")
            //     .end((err, res) => {
            //         res.should.have.status(200);
            //         done();
            //     });

            request("http://localhost:8080/", (err, res, body) => {
                // console.log(res)
                console.log(res.statusCode)
                assert.equal(res.statusCode, 200);
                done();
            })
        })
    })
})