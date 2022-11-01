import express from "express";
import LoginController from "./LoginController.js";
import MemberRepository from "./MemberRepository.js";
import LoginService from "./LoginService.js";


export default class Application {

    #app;
    #router;
    #loginService;
    #loginController;
    #memberRepository;
    #applicationConfig;

    constructor() {
        this.#app = express();
        this.#router = express.Router();
        this.#memberRepository = new MemberRepository();
        this.#loginService = new LoginService(this.#memberRepository);
        this.#loginController = new LoginController(this.#loginService, this.#memberRepository, this.#router);
    }

    start() {
        this.#app.use(express.json()); // for parsing application/json
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use("/", this.#router);
        this.#app.listen(8080, () => {
            console.log("server is running, port : " + 8080);
        });
    }
}


const app = new Application();
app.start();