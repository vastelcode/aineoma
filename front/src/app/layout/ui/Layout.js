import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import { HeaderNav } from "@/widgets/header/index.js";
export function Layout() {
    return (_jsxs("div", { className: "layout", children: [_jsx(HeaderNav, {}), _jsx("main", { children: _jsx(Outlet, {}) })] }));
}
