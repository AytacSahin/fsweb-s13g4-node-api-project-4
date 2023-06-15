const router = require("express").Router();
const middleware = require("./users-middleware");
const userModel = require("./users-model");

router.get("/users", (req, res, next) => {
    try {
        const allUsers = userModel.getAllUsers();
        res.json(allUsers);
    } catch (error) {
        next(error);
    }
})

router.post("/register", middleware.validatePayload, (req, res, next) => {
    try {
        let userObj = {
            username: req.body.username,
            password: req.body.password
        }
        const insertedUser = userModel.insert(userObj);
        res.status(201).json(insertedUser);
    } catch (error) {
        next(error)
    }
})

router.post("/login", middleware.validatePayload, middleware.validateLogin, (req, res, next) => {
    try {
        res.json({ message: `Hoşgeldin, ${req.existUser.username}`})
    } catch (error) {
        next(error)
    }
})

module.exports = router;