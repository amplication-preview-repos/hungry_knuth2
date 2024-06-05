import { SortOrder } from "../../util/SortOrder";

export type BoardOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
