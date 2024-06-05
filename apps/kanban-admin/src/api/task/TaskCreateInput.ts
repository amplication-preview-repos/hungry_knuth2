import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: string | null;
  assignedUser?: string | null;
  column?: ColumnWhereUniqueInput | null;
  description?: string | null;
  relatedColumn?: string | null;
  status?: "Option1" | null;
  taskDescription?: string | null;
  taskStatus?: "Option1" | null;
  taskTitle?: string | null;
  title?: string | null;
};
