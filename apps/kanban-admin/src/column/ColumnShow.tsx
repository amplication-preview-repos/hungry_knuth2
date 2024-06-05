import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COLUMN_TITLE_FIELD } from "./ColumnTitle";
import { BOARD_TITLE_FIELD } from "../board/BoardTitle";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Board" source="board.id" reference="Board">
          <TextField source={BOARD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="columnName" source="columnName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="relatedBoard" source="relatedBoard" />
        <TextField label="relatedTasks" source="relatedTasks" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Task" target="columnId" label="Tasks">
          <Datagrid rowClick="show">
            <TextField label="assignedTo" source="assignedTo" />
            <TextField label="assignedUser" source="assignedUser" />
            <ReferenceField
              label="Column"
              source="column.id"
              reference="Column"
            >
              <TextField source={COLUMN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="relatedColumn" source="relatedColumn" />
            <TextField label="status" source="status" />
            <TextField label="taskDescription" source="taskDescription" />
            <TextField label="taskStatus" source="taskStatus" />
            <TextField label="taskTitle" source="taskTitle" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
