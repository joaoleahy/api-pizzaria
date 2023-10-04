const router = require("express").Router();
const controller = require("../controllers/AuthController");

router.post("/login", controller.auth);

module.exports = router;