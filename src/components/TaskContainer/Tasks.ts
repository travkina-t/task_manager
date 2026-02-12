export interface Task {
    id: string;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: Priority;
    createdAt: number;
}
export type TaskStatus = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
