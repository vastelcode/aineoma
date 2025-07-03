import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './MessageLayout.module.scss';
import Button from "@/shared/ui/button/index.js";
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/app/providers/router/paths.js';
;
export const MessageLayout = ({ content }) => {
    return (_jsxs("div", { className: `${styles["message-layout"]}`, children: [_jsx("p", { className: `${styles["message-layout__header"]}`, children: content.title }), _jsx(Button, { className: `${styles.btn}`, children: _jsx(Link, { to: RoutePaths.ABOUT, children: content.buttonText }) }), _jsx("img", { src: content.imageSrc, alt: content.title, className: `${styles.img}` })] }));
};
