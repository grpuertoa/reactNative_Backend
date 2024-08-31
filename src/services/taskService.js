const taskRepository = require('../repositories/taskRepository');

//Business logic before getting a response
const getAllTasks = async () => {
  return await taskRepository.getAllTasks();
};

const getTaskById = async (id) => {
  return await taskRepository.getTaskById(id);
};

const createTask = async (taskData) => {
  return await taskRepository.createTask(taskData);
};

const updateTask = async (id, updateData) => {
  return await taskRepository.updateTask(id, updateData);
};

const deleteTask = async (id) => {
  return await taskRepository.deleteTask(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
