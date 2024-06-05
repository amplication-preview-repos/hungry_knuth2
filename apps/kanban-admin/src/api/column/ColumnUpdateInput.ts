import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { TaskUpdateManyWithoutColumnsInput } from "./TaskUpdateManyWithoutColumnsInput";

export type ColumnUpdateInput = {
  board?: BoardWhereUniqueInput | null;
  columnName?: string | null;
  name?: string | null;
  relatedBoard?: string | null;
  relatedTasks?: string | null;
  tasks?: TaskUpdateManyWithoutColumnsInput;
};
