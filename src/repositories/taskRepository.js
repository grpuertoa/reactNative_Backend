const Task = require('../models/taskModel');

//CRUD operations between model and services
const getAllTasks = async () => {
  return await Task.find();
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const createTask = async (taskData) => {
    try {
      const newTask = await Task.create(taskData);
      return newTask;
    } catch (error) {
      throw new Error('Error creating task');
    }
  };

const updateTask = async (id, updateData) => {
  return await Task.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
