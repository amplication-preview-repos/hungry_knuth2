import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BOARD_TITLE_FIELD } from "./BoardTitle";

export const BoardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Column" target="boardId" label="Columns">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
