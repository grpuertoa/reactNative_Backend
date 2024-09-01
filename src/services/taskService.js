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

const updateTask = async (id, taskData) => {
  try {
    const updatedTask = await taskRepository.updateTask(id, taskData);
    if (!updatedTask) {
      throw new Error('Task not found');
    }
    return updatedTask; 
  } catch (error) {
    throw new Error(`Error updating task: ${error.message}`);
  }
};

const deleteTask = async (id) => {
    try {
      const deletedTask = await taskRepository.deleteTask(id);
      if (!deletedTask) {
        throw new Error('Task not found');
      }
      return deletedTask;
    } catch (error) {
      throw new Error(`Error deleting task: ${error.message}`);
    }
  };

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
