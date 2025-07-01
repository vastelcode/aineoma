import styles from './MessageLayout.module.scss';

import { MessageContent } from "../model/types.js";
import Button from "@/shared/ui/button/index.js";

import { Link } from 'react-router-dom';
import { RoutePaths } from '@/app/providers/router/paths.js';


interface MessageLayoutProps {
  content: MessageContent;
};

export const MessageLayout = ({ content } : MessageLayoutProps) => {
  return (
    <div 
    className={`${styles["message-layout"]}`}>
      
      <p 
      className={`${styles["message-layout__header"]}`}>
        {content.title}
      </p>
      <Button className={`${styles.btn}`}>
        <Link to={RoutePaths.ABOUT}>
        {content.buttonText}
        </Link>
      </Button>
      <img src={content.imageSrc} alt={content.title} className={`${styles.img}`}/>
    </div>
  );
}