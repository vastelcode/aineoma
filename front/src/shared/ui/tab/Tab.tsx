import { Icon } from "../icon/Icon.js";

import styles from './Tab.module.scss';

interface TabProps {
  text:string;
  icon:string;
  isActive?:boolean;
  onClick?:() => void;
  className?:string;
}

export const Tab = ({ text, icon, isActive = false, onClick, className = '' } : TabProps) => {
  return (
    <div
    onClick={onClick} 
    className={`${styles.tab} ${className}`}>
      <p 
      className={`${styles.text}`}>
        {text}
      </p>
      <Icon source={icon} isActive={isActive} />
    </div>
  );
};