const removeToken = require("../../api/v1/authentication/controllers/removeToken");

const router = require("express").Router();

router.post('/', removeToken);

module.exports = router;