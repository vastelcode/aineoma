import { MESSAGE_CONTENT } from "../model/message-content.js";
export const getMessageContent = (type) => {
    return MESSAGE_CONTENT[type];
};
