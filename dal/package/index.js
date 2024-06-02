const { mongoose } = require("../../utils");

let connection;

(async () => {
    try {
        connection = await mongoose.connect(process.env.MONGO_HOST + process.env.MONGO_DATABASE);
        console.log("mongodb connected!");
    } catch (e) {
        console.log("error connecting mongodb!");
    }
})()

module.exports = connection;