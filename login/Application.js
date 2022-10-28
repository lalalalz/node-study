import express from "express";
import LoginController from "./LoginController.js";
import MemberRepository from "./MemberRepository.js";
import LoginService from "./LoginService.js";


export default class Application {

    #app;
    #loginService;
    #loginController;
    #memberRepository;

    constructor() {
        this.#app = express();
        this.#memberRepository = new MemberRepository();
        this.#loginService = new LoginService(this.#memberRepository);
        this.#loginController = new LoginController(this.#loginService, this.#memberRepository);
    }

    start() {

        const loginRouter = this.#loginController.getRouter();

        this.#app.use("/", loginRouter);
        this.#app.listen(8080, () => {
            console.log("server is running, port : " + 8080);
        });
    }
}


const app = new Application();
app.start();