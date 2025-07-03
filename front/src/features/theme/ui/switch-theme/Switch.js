import { jsx as _jsx } from "react/jsx-runtime";
// 1. импортируем внутренние модули React и Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../model/slice.js';
//  3. импортируем стили компонента
import styles from './Switch.module.scss';
export const SwitchTheme = () => {
    // 4. получаем текущую тему из хранилища
    const theme = useSelector((state) => state.theme.mode);
    // 5. Получаем функцию dispatch для отправки actions
    const dispatch = useDispatch();
    return (_jsx("div", { className: `${styles.switch}`, onClick: () => dispatch(toggleTheme()), children: _jsx("div", { className: `${styles["switch__wrapper"]} ${theme === 'dark' ? styles["switch__wrapper--dark"] : styles["switch__wrapper--light"]}`, children: _jsx("div", { className: `${styles["switch__circle"]} ${theme === 'dark' ? styles["switch__circle--dark"] : styles["switch__circle--light"]}` }) }) }));
};
