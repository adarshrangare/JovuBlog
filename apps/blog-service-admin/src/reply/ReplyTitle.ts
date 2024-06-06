import { Reply as TReply } from "../api/reply/Reply";

export const REPLY_TITLE_FIELD = "author";

export const ReplyTitle = (record: TReply): string => {
  return record.author?.toString() || String(record.id);
};
