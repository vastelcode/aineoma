import { useState, useCallback, memo } from 'react';
import styles from './Input.module.scss';
import imgEye from '@/shared/assets/icons/eye-slash.svg';
import imgEyeOpen from '@/shared/assets/icons/eye.svg';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  isPassword: boolean;
  href?:string;
}

export const Input = memo(({ 
  id, 
  label, 
  type = 'text',
  isPassword,
  href = '#'
}: InputProps) => {
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  
  const handleClickEye = useCallback(() => {
    setIsOpenPassword(prev => !prev);
  }, []);

  // Определяем фактический тип инпута
  const actualType = isPassword 
    ? (isOpenPassword ? 'text' : 'password') 
    : type;

  return (
    <div className="flex flex-col gap-2.5 relative">
      <div className={`flex justify-between items-center ${styles["input-container"]}`}>
        <label htmlFor={id} className={styles["input-container__label"]}>
          {label}
        </label>
        
        {isPassword && (
          <a className={styles["input-container__forget-text"]} href={href} >
            Забыли пароль?
          </a>
        )}
      </div>
      
      <div className={`relative ${styles["input-container__wrapper"]}`}>
        <input 
          id={id}
          type={actualType}
          className={styles['input-container__input']}
          aria-describedby={isPassword ? `${id}-password-toggle` : undefined}
        />
        
        {isPassword && (
          <img
            src={isOpenPassword ? imgEyeOpen : imgEye} 
            alt={isOpenPassword ? "Скрыть пароль" : "Показать пароль"} 
            className={`absolute ${styles["input-container__eye"]}`}
            onClick={handleClickEye}
            role="button"
            aria-controls={id}
            aria-pressed={isOpenPassword}
            id={`${id}-password-toggle`}
          />
        )}
      </div>
    </div>
  );
});