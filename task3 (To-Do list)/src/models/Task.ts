export class Task {
    private static idCounter = 1;

    public readonly id: number;
    public title: string;
    public isCompleted: boolean;

    constructor(title: string) {
        this.id = Task.idCounter++;
        this.title = title;
        this.isCompleted = false;
    }

    toggleCompletion(): void {
        this.isCompleted = !this.isCompleted;
    }
}
