import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.js";
export const RouterApp = () => {
    return _jsx(RouterProvider, { router: router });
};
