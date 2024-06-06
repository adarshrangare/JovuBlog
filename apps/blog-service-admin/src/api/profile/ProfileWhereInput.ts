import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  address?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
