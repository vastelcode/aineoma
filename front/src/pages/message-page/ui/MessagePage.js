import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
import { getMessageContent } from "../lib/get-message-content.js";
import { MessageLayout } from "./MessageLayout.js";
export const MessagePage = () => {
    const { type } = useParams();
    const validTypes = ['404', 'in-progress', 'payment-error', 'payment-success'];
    const pageType = validTypes.includes(type) ? type : '404';
    const content = getMessageContent(pageType);
    return _jsx(MessageLayout, { content: content });
};
