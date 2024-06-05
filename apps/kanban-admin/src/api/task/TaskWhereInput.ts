import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  assignedTo?: StringNullableFilter;
  assignedUser?: StringNullableFilter;
  column?: ColumnWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  relatedColumn?: StringNullableFilter;
  status?: "Option1";
  taskDescription?: StringNullableFilter;
  taskStatus?: "Option1";
  taskTitle?: StringNullableFilter;
  title?: StringNullableFilter;
};
