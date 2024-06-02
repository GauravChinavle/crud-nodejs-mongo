const { insertUser, fetchAllUsers, fetchUserByID, deleteUser, updateUser } = require("../dal/users");

async function createUser (data) {
    const user = await insertUser(data);
    return user;
}

async function getAllUsers () {
    const user = await fetchAllUsers();
    return user;
}

async function getUserByID(id) {
    const user = await fetchUserByID(id);
    return user;
}

async function removeUserByID(id) {
    const user = await deleteUser(id);
    return user;
}

async function findAndUpdateUserByID(id, data) {
    const user = await updateUser(id, data);
    return user;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByID,
    removeUserByID,
    findAndUpdateUserByID
};