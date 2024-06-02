const { app, express } = require("./utils");

app.use(express.json());

// boot up requisitess
require('dotenv').config(); // loading env variables
require("./dal/package"); // connecting database
require("./controllers/routes"); // initializes routes

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
})