export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: Priority;
    createdAt: string;
    // order: number;
}
export type TaskStatus = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
