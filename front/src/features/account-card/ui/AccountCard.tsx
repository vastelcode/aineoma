import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store/index.js';

import styles from './AccountCard.module.scss';

import iconLogoutDark from '@/shared/assets/icons/icon-logout-dark.svg';
import iconLogoutLight from '@/shared/assets/icons/icon-logout-light.svg';

interface AccountCardProps {
  username:string;
  avatar?:string;
}



export const AccountCard = ({ username, avatar } : AccountCardProps) => {

  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div 
    className={`${styles.container} flex justify-center items-center w-full`}
    >
      <div className="flex h-10 items-center gap-10">
        <div className="flex gap-2 5">
        <img src={avatar} alt="аватар" className={`${styles.image}`} />
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.username}`}>{username}</p>
          <p className={`${styles.text}`}>Аккаунт</p>
        </div>
        </div>
        <img 
        src={theme === 'light' ? iconLogoutLight : iconLogoutDark} 
        alt="иконка выхода"  
        className={`${styles.img}`} />
      </div>
    </div>
  );
};