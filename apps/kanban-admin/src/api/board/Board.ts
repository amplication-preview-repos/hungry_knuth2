import { Column } from "../column/Column";

export type Board = {
  columns?: Array<Column>;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
