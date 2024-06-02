const { User } = require("./models");

function insertUser (data) {
    const result = User.create(data);
    return result;
}

function fetchAllUsers() {
    const result = User.find({});
    return result;
}

function fetchUserByID(id) {
    const result = User.findById(id);
    return result;
}

function deleteUser(id) {
    const result = User.findByIdAndDelete(id);
    return result;
}

function updateUser(id, data) {
    const result = User.findByIdAndUpdate(id, data);
    return result;
}

module.exports = {
    insertUser,
    fetchAllUsers,
    fetchUserByID,
    deleteUser,
    updateUser
}