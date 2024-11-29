"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Task_1 = require("../models/Task");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(title) {
        const task = new Task_1.Task(title);
        this.tasks.push(task);
        return task;
    }
    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }
    displayTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }
        console.log("\nTo-Do List:");
        this.tasks.forEach(task => {
            console.log(`[${task.isCompleted ? "x" : " "}] ${task.id}. ${task.title}`);
        });
    }
    toggleTaskCompletion(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleCompletion();
            return true;
        }
        return false;
    }
}
exports.TaskManager = TaskManager;
