const express = require("express");

const {postsCtrl} = require("../controllers");

const router = express.Router();

router.get("/", postsCtrl.getAll);

router.get("/:id", postsCtrl.getOne);

router.post("/", postsCtrl.add);

module.exports = router;


