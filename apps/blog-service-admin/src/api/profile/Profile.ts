import { User } from "../user/User";

export type Profile = {
  address: string | null;
  avatarUrl: string | null;
  bio: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
