import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber?: string | null;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
