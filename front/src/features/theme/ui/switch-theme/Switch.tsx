// 1. импортируем внутренние модули React и Redux
import { useDispatch, useSelector } from 'react-redux';

// 2. импортируем собственную логику работы с хранилищем
import { AppDispatch, RootState } from '@/app/providers/store/index.js';
import { toggleTheme } from '../../model/slice.js';



//  3. импортируем стили компонента
import styles from './Switch.module.scss';


export const SwitchTheme = () => {
  // 4. получаем текущую тему из хранилища
  const theme = useSelector((state: RootState) => state.theme.mode);

  // 5. Получаем функцию dispatch для отправки actions
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
    className={`${styles.switch}`}
    onClick={() => dispatch(toggleTheme())}
    >
      <div className={`${styles["switch__wrapper"]} ${theme === 'dark' ? styles["switch__wrapper--dark"] : styles["switch__wrapper--light"]}`}>

        <div className={`${styles["switch__circle"]} ${theme === 'dark' ? styles["switch__circle--dark"] : styles["switch__circle--light"]}`}>

        </div>


      </div>
    </div>
  );
}