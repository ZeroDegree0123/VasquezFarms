const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

//Post /api/users

router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);

router.post("/:id/address", usersCtrl.createAddress)
// GET /api/users/check-token
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;