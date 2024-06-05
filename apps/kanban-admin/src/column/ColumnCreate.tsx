import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BoardTitle } from "../board/BoardTitle";
import { TaskTitle } from "../task/TaskTitle";

export const ColumnCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="board.id" reference="Board" label="Board">
          <SelectInput optionText={BoardTitle} />
        </ReferenceInput>
        <TextInput label="columnName" source="columnName" />
        <TextInput label="name" source="name" />
        <TextInput label="relatedBoard" source="relatedBoard" />
        <TextInput label="relatedTasks" source="relatedTasks" />
        <ReferenceArrayInput
          source="tasks"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
