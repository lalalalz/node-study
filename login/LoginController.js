import { v4 as UUID } from "uuid";
import { StatusCodes } from "http-status-codes";
import express from "express";

export default class LoginController {

    #router;
    #loginService;
    #userRepository;

    constructor(loginService, userRepository, router) {
        this.#router = router;
        this.#loginService = loginService;
        this.#userRepository = userRepository;
        this.doMapping();
    }

    doMapping() {
        this.#router.get("/login", this.login);
        this.#router.post("/join", this.join);
    }

    join = (request, response) => {
        console.log(request.body);

        const {loginId, password} = request.body;

        if (this.#loginService.join(loginId, password)) {
            response.status(StatusCodes.CREATED).json({
                status: "join success",
            })
            return;
        }

        response.status(StatusCodes.BAD_REQUEST).json({
            status: "join fail",
        });
    }

    login = (request, response) => {
        const {loginId, password} = request.query;

        if (this.#loginService.login(loginId, password)) {
            this.setCookie(response);
            response.status(StatusCodes.OK).json({
                status: "login success",
            });
            return;
        }

        response.status(StatusCodes.UNAUTHORIZED).json({
            status: "login fail",
        });
    }

    setCookie(response) {
        const uuid = UUID();
        response.cookie("sessionId", uuid);
    }
}