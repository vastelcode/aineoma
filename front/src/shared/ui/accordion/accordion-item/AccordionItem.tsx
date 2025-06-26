import { useState } from 'react';

import styles from './AccordionItem.module.scss';

interface AccordionItemProps {
  title:string;
  content: string;
};

import arrowIcon from '@/shared/assets/icons/arrow.svg';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content
}) => {

  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div 
    className={`${styles.container} flex justify-center flex-col`}
    onClick={toggleIsOpen}
    >
      <div className="flex justify-between items-center">

      <p 
      className={`${styles.header}`}>
        {title}
      </p>

      <img 
      src={arrowIcon}
      alt="стрелочка"
      className={`${styles.symbol} flex justify-center items-center ${isOpen ? `${styles["symbol_active"]}` : ''}`}
       />

      </div>

      <div 
      className={`${styles.content} ${isOpen ? `${styles["content_active"]}` : ''}`}>
        {content}
      </div>

    </div>
  );
};