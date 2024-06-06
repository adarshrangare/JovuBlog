import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  address?: SortOrder;
  avatarUrl?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
