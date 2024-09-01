const TaskService = require('../src/services/taskService');
const Task = require('../src/models/taskModel');

jest.mock('../src/models/taskModel');

describe('TaskService', () => {
    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    // Fetch
    it('should fetch all tasks', async () => {
        Task.find.mockResolvedValue([{ title: 'Test Task', description: 'This is a test task' }]);

        const tasks = await TaskService.getAllTasks();

        expect(tasks).toEqual([{ title: 'Test Task', description: 'This is a test task' }]);
        expect(Task.find).toHaveBeenCalledTimes(1);
    });

    // Create
    it('should create a new task', async () => {
        const newTask = { title: 'New Task', description: 'This is a new task' };

        Task.create.mockResolvedValue(newTask);

        const createdTask = await TaskService.createTask(newTask);

        expect(createdTask).toEqual(newTask);
        expect(Task.create).toHaveBeenCalledTimes(1);
        expect(Task.create).toHaveBeenCalledWith(newTask);
    });

    // Update
    it('should update an existing task', async () => {
        const id = '12345';
        const updatedTaskData = { title: 'Updated Task', description: 'This is an updated task' };

        Task.findByIdAndUpdate.mockResolvedValue(updatedTaskData);

        const updatedTask = await TaskService.updateTask(id, updatedTaskData);

        expect(updatedTask).toEqual(updatedTaskData);
        expect(Task.findByIdAndUpdate).toHaveBeenCalledTimes(1);
        expect(Task.findByIdAndUpdate).toHaveBeenCalledWith(id, updatedTaskData, { new: true });
    });

    // Delete
    it('should delete an existing task', async () => {
        const id = '12345';
        const deletedTask = { title: 'Deleted Task', description: 'This task has been deleted' };

        Task.findByIdAndDelete.mockResolvedValue(deletedTask);

        const result = await TaskService.deleteTask(id);

        expect(result).toEqual(deletedTask);
        expect(Task.findByIdAndDelete).toHaveBeenCalledTimes(1);
        expect(Task.findByIdAndDelete).toHaveBeenCalledWith(id);
    });
});
