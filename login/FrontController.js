export default class FrontController {

    #app;
    #config;

    constructor(app, applicationConfig) {
        this.#app = app;
        this.#config = applicationConfig;
        this.#app.use("/", this.#doFetch);
    }

    #doFetch = (response, request, next) => {
        // this.#config.validator(request);
        next();
    }
}