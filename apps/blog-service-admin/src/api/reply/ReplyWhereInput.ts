import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ReplyWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
