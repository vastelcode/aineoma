import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Message.module.scss';
export const Message = ({ avatar, text, type }) => {
    return (_jsxs("div", { className: `flex  ${type == 'received' ? 'flex-row-reverse' : 'flex-row'} gap-5`, children: [_jsx("img", { src: avatar, alt: "\u0430\u0432\u0430\u0442\u0430\u0440", className: `${styles.avatar}` }), _jsx("div", { className: `${styles.message}`, children: text })] }));
};
