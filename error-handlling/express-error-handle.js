import express from "express";

const app = express();

const wrapAsync = (fn) => (req, res, next) => fn(req, res, next).catch(next);

function asyncFunc(req, res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("비동기 에러 발생!!"));
        }, 2000);
    });
}


app.get("/error", (req, res, next) => {
    throw new Error("동기 error 발생");
});

app.get("/error-async", wrapAsync(asyncFunc));

app.use((err, req, res, next) => {
    res.json({
        message: err.message,
    })
});

app.listen(8080, () => {
    console.log("server is running!");
});