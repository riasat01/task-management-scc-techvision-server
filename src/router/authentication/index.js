const getAToken = require("../../api/v1/authentication/controllers/getAToken");

const router = require("express").Router();

router.post('/', getAToken);

module.exports = router;