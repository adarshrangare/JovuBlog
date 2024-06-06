import { Like } from "../like/Like";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  phoneNumber: string | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
