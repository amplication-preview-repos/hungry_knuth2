import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ColumnWhereInput = {
  board?: BoardWhereUniqueInput;
  columnName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  relatedBoard?: StringNullableFilter;
  relatedTasks?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
