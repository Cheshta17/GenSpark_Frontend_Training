import { Task } from "../models/Task";

export class TaskManager {
    private tasks: Task[] = [];

    addTask(title: string): Task {
        const task = new Task(title);
        this.tasks.push(task);
        return task;
    }

    removeTask(id: number): boolean {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    displayTasks(): void {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }

        console.log("\nTo-Do List:");
        this.tasks.forEach(task => {
            console.log(`[${task.isCompleted ? "x" : " "}] ${task.id}. ${task.title}`);
        });
    }

    toggleTaskCompletion(id: number): boolean {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleCompletion();
            return true;
        }
        return false;
    }
}
