import styles from "./Icon.module.scss";

interface IconProps {
  source:string;
  alt?:string;
  className?:string;
  style?: React.CSSProperties;
  isActive?:boolean;
};

export const Icon : React.FC<IconProps> = ({source, alt='',className, style, isActive=false}) => {
  const modifierClass = isActive ? styles["icon--active"] : '';
  return (
    <img src={source} alt={alt} className={`${styles.icon} ${className} ${modifierClass}`} style={style}/>
  );
} 

