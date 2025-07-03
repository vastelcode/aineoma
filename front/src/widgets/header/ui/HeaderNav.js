import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const theme = useSelector((state) => state.theme.mode);
    return (_jsx("header", { className: `${styles.header}`, children: _jsxs("div", { className: `${styles["header__content"]}`, children: [_jsx("div", { className: 'flex items-center', children: _jsx(Icon, { source: theme === 'dark' ? logoIconDark : logoIconLight }) }), _jsxs("div", { className: `${styles["header__wrapper"]}`, children: [_jsx(SwitchTheme, {}), _jsxs("nav", { className: `${styles["header__nav"]}`, children: [_jsx(Link, { to: RoutePaths.ABOUT, className: `${styles["header__nav-point"]}`, children: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435" }), _jsx(Link, { to: RoutePaths.TARIFFS, className: `${styles["header__nav-point"]}`, children: "\u0426\u0435\u043D\u044B" }), _jsx(Link, { to: RoutePaths.LOGIN, className: `${styles["header__nav-point"]}`, children: "\u0412\u0445\u043E\u0434" })] }), _jsx("button", { className: `${styles["header__btn"]}`, children: _jsx(Link, { to: RoutePaths.LOGUP, children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }) })] })] }) }));
};
