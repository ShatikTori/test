const express = require("express");
const { getAll, getOne, create, update, remove } = require("./handlers/courses");

const {
  sendMessage,
  sendWelcomeMail,
  sendPasswordResetMail,
} = require("./handlers/mailer");
const config = require("./pkg/config");

const api = express();

api.use(express.json());

api.post("/api/v1/sendmessage", sendMessage);
api.post("/api/v1/sendmail", sendWelcomeMail);
api.post("api/v1/reset-pass", sendPasswordResetMail);

api.listen(config.get("development").port, (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${config.get("development").port}`);
});



api.use(express.json());

api.get("/api/courses", getAll);

api.get("/api/courses/:id", getOne);

api.post("/api/courses", create);

api.put("/api/courses/:id", update);

api.delete("/api/courses/:id", remove);

api.listen(10000, (err) => {
  err ? console.log(err) : console.log("Server started on port 10000");
});