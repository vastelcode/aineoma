import styles from './TemplateCard.module.scss';

interface TemplatesCardProps {
  header:string;
  text:string;
  color?: 'default' | 'yellow' | 'red' | 'green';
}


export const TemplateCard = ({ header, text, color = 'default' } : TemplatesCardProps) => {
  return (
    <div 
    className={`${styles.card} ${styles[`card_${color}`]} flex justify-center items-center flex-col gap-2.5`}
    >
    <p className={`${styles.header}`}>{header}</p>
    <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}