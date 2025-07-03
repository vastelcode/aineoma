import styles from './Message.module.scss';

interface MessageProps {
  avatar: string;
  text: string;
  type: 'received' | 'sented'
}

export const Message = ({ avatar, text, type } : MessageProps) => {
  return (
    <div 
    className={`flex  ${type == 'received' ? 'flex-row-reverse' : 'flex-row'} gap-5`}>
      <img src={avatar} alt="аватар"  className={`${styles.avatar}`}/>
      <div className={`${styles.message}`}>
        {text}
      </div>
    </div>
  );
}