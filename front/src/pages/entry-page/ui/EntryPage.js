import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './EntryPage.module.scss';
import { RoutePaths } from '@/app/providers/router/paths.js';
import { Input } from "@/shared/ui/input/index.js";
import Button from '@/shared/ui/button/index.js';
import imgLogup from '@/shared/assets/images/image-logup.webp';
import imgLogin from '@/shared/assets/images/image-login.webp';
;
export const EntryPage = ({ type }) => {
    const isLogup = type === 'logup';
    const gapClass = isLogup ? styles["my-gap-30"] : styles["my-gap-50"];
    const imageSource = isLogup ? imgLogup : imgLogin;
    const imageClass = isLogup ? styles["img-logup"] : styles["img-login"];
    const headerText = useMemo(() => (isLogup ? 'Регистрация' : 'Вход в аккаунт'), [isLogup]);
    const welcomeText = useMemo(() => (isLogup ? 'Познакомимся?' : 'С возвращением!'), [isLogup]);
    const linkConfig = useMemo(() => ({
        path: isLogup ? RoutePaths.LOGIN : RoutePaths.LOGUP,
        text: isLogup ? 'Вход!' : 'Регистрация!',
        question: isLogup ? 'Есть аккаунт?' : 'Нет аккаунта?',
        buttonText: isLogup ? 'Регистрация' : 'Вход'
    }), [isLogup]);
    return (_jsx("div", { className: `${styles.container} flex justify-center items-center`, children: _jsxs("div", { className: `${styles.content} flex`, children: [_jsx("div", { className: `${styles.wrapper} flex justify-center items-center`, children: _jsxs("div", { className: `${styles["wrapper__content"]} flex-col items-center ${gapClass}`, children: [_jsx("p", { className: `${styles["header-text"]} uppercase`, children: headerText }), _jsxs("form", { className: `${styles.form} flex flex-col ${gapClass}`, children: [_jsx(Input, { type: 'text', label: '\u041B\u043E\u0433\u0438\u043D', isPassword: false, id: 'input__name' }), isLogup && _jsx(Input, { type: 'email', label: '\u041F\u043E\u0447\u0442\u0430', isPassword: false, id: 'input__email' }), _jsx(Input, { type: 'password', label: '\u041F\u0430\u0440\u043E\u043B\u044C', isPassword: true, id: 'input__password' })] }), _jsx(Button, { className: styles.btn, children: _jsx(Link, { to: RoutePaths.ABOUT, children: linkConfig.buttonText }) }), _jsxs("p", { className: `${styles.text} flex gap-1`, children: [linkConfig.question, _jsx(Link, { to: linkConfig.path, className: styles.link, children: linkConfig.text })] })] }) }), _jsxs("div", { className: `flex justify-center items-center flex-col ${styles.wrapperSecond}`, children: [_jsx("p", { className: `${styles["header-text"]} uppercase`, children: welcomeText }), _jsx("img", { src: imageSource, alt: isLogup ? "Иллюстрация регистрации" : "Иллюстрация входа", className: imageClass })] })] }) }));
};
