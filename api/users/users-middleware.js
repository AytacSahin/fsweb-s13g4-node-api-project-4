const userModel = require("./users-model");

function logger(req, res, next) {
    console.log(`${new Date().toLocaleString()} - req created as = ${req.method} - URL: ${req.originalUrl}`
    );
    next();
}

function validatePayload(req, res, next) {
    try {
        let { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ message: "kullanıcı bulunamadı..." })
        }
        else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

function validateLogin(req, res, next) {
    try {
        let existUser = userModel.findUser(req.body.username, req.body.password);
        if (!existUser) {
            res.status(404).json({ message: "Böyle bir kullanıcı bulunamadı..." });
        } else {
            req.existUser = existUser;
            next()
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    logger,
    validateLogin,
    validatePayload
}