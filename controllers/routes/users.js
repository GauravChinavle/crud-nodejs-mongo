const { express } = require("../../utils");
const userRouter = express.Router();
const { createUser, getAllUsers, getUserByID, removeUserByID, findAndUpdateUserByID } = require("../../services");

userRouter
    .post("/", async (req, res) => {
        try {
            const response = await createUser(req.body);
            return res.status(200).send({
                message: "User created!",
                data: response
            })
        } catch (e) {
            console.log("Error", e);
            return res.status(400).send({
                message: "Error occured while creating user!"
            })
        }
    })
    .get("/", async (req, res) => {
        try {
            const response = await getAllUsers();
            return res.status(200).send({
                message: "List of all users",
                data: response
            })
        } catch (e) {
            console.log("Error", e);
            return res.status(400).send({
                message: "Error occured while fetching all users!"
            })
        }
    })
    .get("/:id", async (req, res) => {
        try {
            const response = await getUserByID(req.params.id);
            return res.status(200).send({
                message: "Details of user",
                data: response
            })
        } catch {
            return res.status(400).send({
                message: "Error occured while fetching user!"
            })
        }
    })
    .put("/:id", async (req, res) => {
        try {
            const response = await findAndUpdateUserByID(req.params.id, req.body);
            return res.status(200).send({
                message: "User updated!",
                data: response
            })
        } catch {
            return res.status(400).send({
                message: "Error occured while updating user!"
            })
        }
    })
    .delete("/:id", async (req, res) => {
        const response = await removeUserByID(req.params.id);
        return res.status(200).send({
            message: "User deleted!",
            data: response
        })
    });

module.exports = userRouter;
