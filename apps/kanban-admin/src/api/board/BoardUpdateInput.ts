import { ColumnUpdateManyWithoutBoardsInput } from "./ColumnUpdateManyWithoutBoardsInput";

export type BoardUpdateInput = {
  columns?: ColumnUpdateManyWithoutBoardsInput;
  createdBy?: string | null;
  description?: string | null;
  name?: string | null;
};
