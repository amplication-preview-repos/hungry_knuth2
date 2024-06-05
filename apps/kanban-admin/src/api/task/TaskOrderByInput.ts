import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedTo?: SortOrder;
  assignedUser?: SortOrder;
  columnId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  relatedColumn?: SortOrder;
  status?: SortOrder;
  taskDescription?: SortOrder;
  taskStatus?: SortOrder;
  taskTitle?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
