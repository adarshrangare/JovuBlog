import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  address?: string | null;
  avatarUrl?: string | null;
  bio?: string | null;
  user?: UserWhereUniqueInput | null;
};
