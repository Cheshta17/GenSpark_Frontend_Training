import { TaskManager } from "./services/TaskManager";
import readlineSync from "readline-sync";

const taskManager = new TaskManager();

function displayMenu(): void {
    console.log("\n=== To-Do List Menu ===");
    console.log("1. Add a Task");
    console.log("2. Remove a Task");
    console.log("3. Toggle Task Completion");
    console.log("4. Display Tasks");
    console.log("5. Exit");
}

function main(): void {
    let running = true;

    while (running) {
        displayMenu();

        const choice = readlineSync.questionInt("Choose an option: ");

        switch (choice) {
            case 1:
                const title = readlineSync.question("Enter task title: ");
                const newTask = taskManager.addTask(title);
                console.log(`Task "${newTask.title}" added with ID: ${newTask.id}`);
                break;

            case 2:
                const removeId = readlineSync.questionInt("Enter task ID to remove: ");
                const removed = taskManager.removeTask(removeId);
                console.log(removed ? "Task removed." : "Task not found.");
                break;

            case 3:
                const toggleId = readlineSync.questionInt("Enter task ID to toggle completion: ");
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
