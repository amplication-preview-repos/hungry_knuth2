import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { TaskCreateNestedManyWithoutColumnsInput } from "./TaskCreateNestedManyWithoutColumnsInput";

export type ColumnCreateInput = {
  board?: BoardWhereUniqueInput | null;
  columnName?: string | null;
  name?: string | null;
  relatedBoard?: string | null;
  relatedTasks?: string | null;
  tasks?: TaskCreateNestedManyWithoutColumnsInput;
};
