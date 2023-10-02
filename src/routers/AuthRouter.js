const router = require("express").Router();
const controller = require("../controller/AuthController");

router.post("/login", controller.auth);

module.exports = router;