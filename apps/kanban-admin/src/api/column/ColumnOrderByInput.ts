import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  boardId?: SortOrder;
  columnName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  relatedBoard?: SortOrder;
  relatedTasks?: SortOrder;
  updatedAt?: SortOrder;
};
