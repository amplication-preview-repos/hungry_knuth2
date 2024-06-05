import { Board } from "../board/Board";
import { Task } from "../task/Task";

export type Column = {
  board?: Board | null;
  columnName: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  relatedBoard: string | null;
  relatedTasks: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
