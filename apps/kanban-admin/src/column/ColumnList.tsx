import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOARD_TITLE_FIELD } from "../board/BoardTitle";

export const ColumnList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Columns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
