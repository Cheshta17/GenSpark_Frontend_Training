"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./services/TaskManager");
const readline_sync_1 = __importDefault(require("readline-sync"));
const taskManager = new TaskManager_1.TaskManager();
function displayMenu() {
    console.log("\n=== To-Do List Menu ===");
    console.log("1. Add a Task");
    console.log("2. Remove a Task");
    console.log("3. Toggle Task Completion");
    console.log("4. Display Tasks");
    console.log("5. Exit");
}
function main() {
    let running = true;
    while (running) {
        displayMenu();
        const choice = readline_sync_1.default.questionInt("Choose an option: ");
        switch (choice) {
            case 1:
                const title = readline_sync_1.default.question("Enter task title: ");
                const newTask = taskManager.addTask(title);
                console.log(`Task "${newTask.title}" added with ID: ${newTask.id}`);
                break;
            case 2:
                const removeId = readline_sync_1.default.questionInt("Enter task ID to remove: ");
                const removed = taskManager.removeTask(removeId);
                console.log(removed ? "Task removed." : "Task not found.");
                break;
            case 3:
                const toggleId = readline_sync_1.default.questionInt("Enter task ID to toggle completion: ");
                const toggled = taskManager.toggleTaskCompletion(toggleId);
                console.log(toggled ? "Task toggled." : "Task not found.");
                break;
            case 4:
                taskManager.displayTasks();
                break;
            case 5:
                running = false;
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid option. Please try again.");
                break;
        }
    }
}
main();
