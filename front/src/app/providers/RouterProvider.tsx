import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.js";

export const RouterApp = () => {
  return <RouterProvider router={router} />;
}