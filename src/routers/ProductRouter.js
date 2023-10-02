const router = require("express").Router();
const controller = require("../controller/ProductController");

const authMiddleware = require("../middleware/AuthMiddleware");

router.use(authMiddleware);

router.get("/find", authMiddleware, controller.findAll);
router.get("/find/:id", authMiddleware, controller.find);

router.post("/create", authMiddleware, controller.create);

router.put("/update/:id", authMiddleware, controller.update);

router.delete("/delete/:id", authMiddleware, controller.remove);

module.exports = router;