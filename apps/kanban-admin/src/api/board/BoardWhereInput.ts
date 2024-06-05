import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BoardWhereInput = {
  columns?: ColumnListRelationFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
