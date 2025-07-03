import styles from './ChatsPage.module.scss';

import { Message } from '@/features/message/ui/index.js';

import Ellipse from '@/shared/assets/icons/Ellipse.svg';

import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store/index.js';

import sendIconLight from '@/shared/assets/icons/icon-send-light.svg';
import sendIconDark from '@/shared/assets/icons/icon-send-dark.svg';

export const ChatsPage = () => {

  const theme = useSelector((state: RootState) => state.theme.mode);

  const Icon = theme === 'light' ? sendIconLight : sendIconDark;

  return (
    <div className={`${styles.container} flex items-center flex-col justify-center`}>
      <div className={`${styles.window} flex flex-col gap-10 justify-end`}>
        <div className={`${styles.chat}`}>
          <Message type='received' text='Мой запрос к нейросети.' avatar={Ellipse}/>
          <Message type='sented' text='Мой ответ тебе, пользователь.' avatar={Ellipse}/>
          <Message type='received' text='Мой запрос к нейросети.' avatar={Ellipse}/>
          <Message type='sented' text='Мой ответ тебе, пользователь.' avatar={Ellipse}/>

        </div>
        <div className={`flex gap-5`}>
          <textarea className={`${styles.input}`} placeholder='Начните чат'/>
          <button className={`${styles.btn}`}>
            <img src={Icon} alt="иконка стрелки" />
          </button>
        </div>
      </div>
    </div>
  );
};