const router = require("express").Router();
const { getShowsList } = require("../controllers/shows");

router.post("/", getShowsList);

module.exports = router;