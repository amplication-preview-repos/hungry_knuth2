import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COLUMN_TITLE_FIELD } from "../column/ColumnTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="assignedTo" source="assignedTo" />
        <TextField label="assignedUser" source="assignedUser" />
        <ReferenceField label="Column" source="column.id" reference="Column">
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
    </List>
  );
};
