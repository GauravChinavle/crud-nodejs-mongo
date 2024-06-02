const { mongoose } = require("../../utils");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const User = mongoose.model("users", userSchema);

module.exports = User;