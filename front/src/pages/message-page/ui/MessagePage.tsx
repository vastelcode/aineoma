import { useParams } from "react-router-dom";
import { MessagePageType } from "../model/types.js";
import { getMessageContent } from "../lib/get-message-content.js";
import { MessageLayout } from "./MessageLayout.js";


export const MessagePage = () => {
  const { type } = useParams<{ type : MessagePageType }>();

  const validTypes : MessagePageType[] = ['404','in-progress','payment-error','payment-success'];

  const pageType = validTypes.includes(type!) ? type! : '404';

  const content = getMessageContent(pageType);

  return <MessageLayout content={content}/>;
}