import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './EntryPage.module.scss';
import { RoutePaths } from '@/app/providers/router/paths.js';
import { Input } from "@/shared/ui/input/index.js";
import Button from '@/shared/ui/button/index.js';
import imgLogup from '@/shared/assets/images/image-logup.webp';
import imgLogin from '@/shared/assets/images/image-login.webp';

interface EntryProps {
  type: 'login' | 'logup';
};

export const EntryPage = ({ type } : EntryProps) => {
  const isLogup = type === 'logup';
  const gapClass = isLogup ? styles["my-gap-30"] : styles["my-gap-50"];
  const imageSource = isLogup ? imgLogup : imgLogin;
  const imageClass = isLogup ? styles["img-logup"] : styles["img-login"];

  const headerText = useMemo(() => (
    isLogup ? 'Регистрация' : 'Вход в аккаунт'
  ), [isLogup]);

  const welcomeText = useMemo(() => (
    isLogup ? 'Познакомимся?' : 'С возвращением!'
  ), [isLogup]);

  const linkConfig = useMemo(() => ({
    path: isLogup ? RoutePaths.LOGIN : RoutePaths.LOGUP,
    text: isLogup ? 'Вход!' : 'Регистрация!',
    question: isLogup ? 'Есть аккаунт?' : 'Нет аккаунта?',
    buttonText: isLogup ? 'Регистрация' : 'Вход'
  }), [isLogup]);

  return (
    <div className={`${styles.container} flex justify-center items-center`}>

      <div className={`${styles.content} flex`}>

        <div className={`${styles.wrapper} flex justify-center items-center`}>
          <div className={`${styles["wrapper__content"]} flex-col items-center ${gapClass}`}>
            <p className={`${styles["header-text"]} uppercase`}>
              {headerText}
            </p>
            <form className={`${styles.form} flex flex-col ${gapClass}`}>
              <Input type='text' label='Логин' isPassword={false} id='input__name' />
              {isLogup && <Input type='email' label='Почта' isPassword={false} id='input__email' />}
              <Input type='password' label='Пароль' isPassword={true} id='input__password' />
            </form>
            <Button className={styles.btn}>
              <Link to={RoutePaths.ABOUT}>
                {linkConfig.buttonText}
              </Link>
            </Button>
            <p className={`${styles.text} flex gap-1`}>
              {linkConfig.question}
              <Link to={linkConfig.path} className={styles.link}>
                {linkConfig.text}
              </Link>
            </p>
          </div>
        </div>

        <div className={`flex justify-center items-center flex-col ${styles.wrapperSecond}`}>
          <p className={`${styles["header-text"]} uppercase`}>
            {welcomeText}
          </p>
          <img 
            src={imageSource} 
            alt={isLogup ? "Иллюстрация регистрации" : "Иллюстрация входа"} 
            className={imageClass}
          />
        </div>

      </div>
    </div>
  );
};