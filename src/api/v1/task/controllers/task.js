const { Task } = require("../../../../models/Task");

const getTasks = async (req, res) => {
    try {
        const email = req.params?.email;
        const result = await Task?.find({ email: email });
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const getATask = async (req, res) => {
    try {
        const id = req.params?.id;
        const result = await Task?.find({ _id: id });
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const postATask = async (req, res) => {
    try {
        const task = req.body
        const newTask = new Task(task);
        const result = await newTask?.save();
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const updateATask = async (req, res) => {
    try {
        const id = req.params?.id;
        const { title, description, created, deadline, priority, email } = req.body;
        const updatedTask = {
            $set: {
                title,
                description,
                created,
                deadline,
                priority,
                email
            }
        }
        const result = await Task?.updateOne({ _id: id }, updateATask);
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

const deleteATask = async (req, res) => {
    try {
        const id = req.params?.id;
        const result = await Task?.deleteOne({ _id: id });
        res.send(result);
    } catch (error) {
        res.status(400).send({ error: error?.message });
    }
}

module?.exports = { getATask, getTasks, postATask, updateATask, deleteATask };