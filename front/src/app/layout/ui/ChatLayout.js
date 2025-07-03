import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/sidebar/index.js";
import styles from './styles.module.scss';
export const ChatLayout = () => {
    return (_jsxs("div", { className: `${styles["chat-layout"]}`, children: [_jsx(Sidebar, {}), _jsx("main", { children: _jsx(Outlet, {}) })] }));
};
