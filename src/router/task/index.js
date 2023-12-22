const { getTasks, getATask, postATask, updateStatus, deleteATask } = require("../../api/v1/task/controllers/task");

const router = require("express").Router();

router.get('/email/:email', getTasks);
router.get('/id/:id', getATask);
router.post('/', postATask);
router.put('/status/:id', updateStatus);
router.delete('/:id', deleteATask);

module.exports = router;