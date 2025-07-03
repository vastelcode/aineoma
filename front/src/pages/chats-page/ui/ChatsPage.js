import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ChatsPage.module.scss';
import { Message } from '@/features/message/ui/index.js';
import Ellipse from '@/shared/assets/icons/Ellipse.svg';
import { useSelector } from 'react-redux';
import sendIconLight from '@/shared/assets/icons/icon-send-light.svg';
import sendIconDark from '@/shared/assets/icons/icon-send-dark.svg';
export const ChatsPage = () => {
    const theme = useSelector((state) => state.theme.mode);
    const Icon = theme === 'light' ? sendIconLight : sendIconDark;
    return (_jsx("div", { className: `${styles.container} flex items-center flex-col justify-center`, children: _jsxs("div", { className: `${styles.window} flex flex-col gap-10 justify-end`, children: [_jsxs("div", { className: `${styles.chat}`, children: [_jsx(Message, { type: 'received', text: '\u041C\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043A \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u0438.', avatar: Ellipse }), _jsx(Message, { type: 'sented', text: '\u041C\u043E\u0439 \u043E\u0442\u0432\u0435\u0442 \u0442\u0435\u0431\u0435, \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C.', avatar: Ellipse }), _jsx(Message, { type: 'received', text: '\u041C\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043A \u043D\u0435\u0439\u0440\u043E\u0441\u0435\u0442\u0438.', avatar: Ellipse }), _jsx(Message, { type: 'sented', text: '\u041C\u043E\u0439 \u043E\u0442\u0432\u0435\u0442 \u0442\u0435\u0431\u0435, \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C.', avatar: Ellipse })] }), _jsxs("div", { className: `flex gap-5`, children: [_jsx("textarea", { className: `${styles.input}`, placeholder: '\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0447\u0430\u0442' }), _jsx("button", { className: `${styles.btn}`, children: _jsx("img", { src: Icon, alt: "" }) })] })] }) }));
};
