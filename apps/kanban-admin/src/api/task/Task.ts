import { Column } from "../column/Column";

export type Task = {
  assignedTo: string | null;
  assignedUser: string | null;
  column?: Column | null;
  createdAt: Date;
  description: string | null;
  id: string;
  relatedColumn: string | null;
  status?: "Option1" | null;
  taskDescription: string | null;
  taskStatus?: "Option1" | null;
  taskTitle: string | null;
  title: string | null;
  updatedAt: Date;
};
