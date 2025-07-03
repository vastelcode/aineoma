import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, memo } from 'react';
import styles from './Input.module.scss';
import imgEye from '@/shared/assets/icons/eye-slash.svg';
import imgEyeOpen from '@/shared/assets/icons/eye.svg';
export const Input = memo(({ id, label, type = 'text', isPassword, href = '#' }) => {
    const [isOpenPassword, setIsOpenPassword] = useState(false);
    const handleClickEye = useCallback(() => {
        setIsOpenPassword(prev => !prev);
    }, []);
    // Определяем фактический тип инпута
    const actualType = isPassword
        ? (isOpenPassword ? 'text' : 'password')
        : type;
    return (_jsxs("div", { className: "flex flex-col gap-2.5 relative", children: [_jsxs("div", { className: `flex justify-between items-center ${styles["input-container"]}`, children: [_jsx("label", { htmlFor: id, className: styles["input-container__label"], children: label }), isPassword && (_jsx("a", { className: styles["input-container__forget-text"], href: href, children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?" }))] }), _jsxs("div", { className: `relative ${styles["input-container__wrapper"]}`, children: [_jsx("input", { id: id, type: actualType, className: styles['input-container__input'], "aria-describedby": isPassword ? `${id}-password-toggle` : undefined }), isPassword && (_jsx("img", { src: isOpenPassword ? imgEyeOpen : imgEye, alt: isOpenPassword ? "Скрыть пароль" : "Показать пароль", className: `absolute ${styles["input-container__eye"]}`, onClick: handleClickEye, role: "button", "aria-controls": id, "aria-pressed": isOpenPassword, id: `${id}-password-toggle` }))] })] }));
});
