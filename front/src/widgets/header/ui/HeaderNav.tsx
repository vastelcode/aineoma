import { RootState } from '@/app/providers/store/index.js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/app/providers/router/paths.js';


// импортируем стили
import styles from './HeaderNav.module.scss';

// импрортируем изображения
import logoIconLight from '@/shared/assets/icons/Logo-Light.svg';
import logoIconDark from '@/shared/assets/icons/Logo-Dark.svg';



// импортируем необходимые компоненты
import { Icon } from '@/shared/ui/icon/index.js';
import { SwitchTheme } from '@/features/theme/index.js';

export const HeaderNav = () => {


  const theme = useSelector((state : RootState) => state.theme.mode);
  return (
    <header
    className={`${styles.header}`}
    >
      <div
      className={`${styles["header__content"]}`}>

        <div className='flex items-center'>
          <Icon source={theme === 'dark' ? logoIconDark : logoIconLight} />
        </div>

        <div 
        className={`${styles["header__wrapper"]} `}>
          <SwitchTheme/>

          <nav 
          className={`${styles["header__nav"]}`}>
         <Link to={RoutePaths.ABOUT} className={`${styles["header__nav-point"]}`}>О проекте</Link>
         <Link to={RoutePaths.TARIFFS} className={`${styles["header__nav-point"]}`}>Цены</Link>
         <Link to={RoutePaths.LOGIN} className={`${styles["header__nav-point"]}`}>Вход</Link>
          </nav>

          <button className={`${styles["header__btn"]}`}>
          <Link to={RoutePaths.LOGUP}>Регистрация</Link>
          </button>
        </div>

      </div>
    </header>
  );
}



