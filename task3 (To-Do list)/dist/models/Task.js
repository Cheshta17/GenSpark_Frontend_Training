"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(title) {
        this.id = Task.idCounter++;
        this.title = title;
        this.isCompleted = false;
    }
    toggleCompletion() {
        this.isCompleted = !this.isCompleted;
    }
}
exports.Task = Task;
Task.idCounter = 1;
