import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import styles from './AccountCard.module.scss';
import iconLogoutDark from '@/shared/assets/icons/icon-logout-dark.svg';
import iconLogoutLight from '@/shared/assets/icons/icon-logout-light.svg';
export const AccountCard = ({ username, avatar }) => {
    const theme = useSelector((state) => state.theme.mode);
    return (_jsx("div", { className: `${styles.container} flex justify-center items-center w-full`, children: _jsxs("div", { className: "flex h-10 items-center gap-10", children: [_jsxs("div", { className: "flex gap-2 5", children: [_jsx("img", { src: avatar, alt: "\u0430\u0432\u0430\u0442\u0430\u0440", className: `${styles.image}` }), _jsxs("div", { className: 'flex flex-col justify-between h-full', children: [_jsx("p", { className: `${styles.username}`, children: username }), _jsx("p", { className: `${styles.text}`, children: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442" })] })] }), _jsx("img", { src: theme === 'light' ? iconLogoutLight : iconLogoutDark, alt: "\u0438\u043A\u043E\u043D\u043A\u0430 \u0432\u044B\u0445\u043E\u0434\u0430", className: `${styles.img}` })] }) }));
};
