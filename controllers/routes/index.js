const { app } = require("../../utils");
const { logger } = require("../middlewares");
const userRouter = require("./users");

app.use("/api/users",
    logger,
    userRouter);

module.exports = app;