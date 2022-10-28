import express from "express";
import { v4 as UUID } from "uuid";
import { StatusCodes } from "http-status-codes";

export default class LoginController {

    #router;
    #loginService;
    #userRepository;

    constructor(loginService, userRepository) {
        this.#router = express.Router();
        this.#loginService = loginService;
        this.#userRepository = userRepository;
        this.doMapping();
    }

    doMapping() {
        this.#router.get("/login", this.login);
    }

    getRouter() {
        return this.#router;
    }

    login = (request, response) => {
        const {loginId, password} = request.query;

        if (this.#loginService.login(loginId, password)) {
            const uuid = UUID();

            response.cookie("sessionId", uuid);
            response.status(StatusCodes.OK).json({
                status: "login success",
            });

            return;
        }

        response.status(StatusCodes.UNAUTHORIZED).json({
            status: "login fail",
        });
    }
}