import { ColumnCreateNestedManyWithoutBoardsInput } from "./ColumnCreateNestedManyWithoutBoardsInput";

export type BoardCreateInput = {
  columns?: ColumnCreateNestedManyWithoutBoardsInput;
  createdBy?: string | null;
  description?: string | null;
  name?: string | null;
};
