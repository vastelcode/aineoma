import { MessagePageType } from "../model/types.js";
import { MESSAGE_CONTENT } from "../model/message-content.js";

export const getMessageContent = (type : MessagePageType) => {
  return MESSAGE_CONTENT[type];
};