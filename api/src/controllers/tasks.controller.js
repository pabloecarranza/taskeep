import { Task } from "./../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const userid = req.params.id;
    const {
      completed,
      important,
      description,
      reminder,
      expiration_date,
      repeat,
      notes,
      listid,
    } = req.body;

    const newTask = await Task.create({
      completed,
      important,
      description,
      reminder,
      expiration_date,
      repeat,
      notes,
      listid,
      userid,
    });
    console.log("entre", newTask);
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    if (!task) return res.status(404).json({ message: "Task dont exists" });
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      completed,
      important,
      description,
      reminder,
      expiration_date,
      repeat,
      notes,
    } = req.body;

    const task = await Task.findByPk(id);
    if (!task) return res.json({ message: "Task dont exists" });
    (task.completed = completed),
      (task.important = important),
      (task.description = description),
      (task.reminder = reminder),
      (task.expiration_date = expiration_date),
      (task.repeat = repeat),
      (task.notes = notes),
      await task.save();
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
