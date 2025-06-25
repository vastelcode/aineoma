// импорт модулей react-router-dom
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./paths.js";


// импорт страниц
import { AboutPage } from "@/pages/about-page/index.js";
import { TariffPage } from "@/pages/tariffs-page/index.js";
import { Layout } from "@/app/layout/index.js";
import { LoginPage } from "@/pages/login-page/index.js";
import { LogupPage } from "@/pages/logup-page/index.js";

import { MessagePage } from "@/pages/message-page/index.js";


// импорт страниц с ленивой загрузкой


export const router = createBrowserRouter([
  {
    element: <Layout />, // общий лейаут для всех страниц
    children: [
      {
        path: RoutePaths.ABOUT,
        element: <AboutPage/>
      },
      {
        path: RoutePaths.TARIFFS,
        element: <TariffPage/>
      },
      {
        path: RoutePaths.LOGIN,
        element: <LoginPage/>
      },
      {
        path: RoutePaths.LOGUP,
        element: <LogupPage/>
      },
      {
        path: '/message/:type',
        element: <MessagePage />
      },
      {
        path:RoutePaths.NOT_FOUND,
        element: <Navigate to="/message/404" />
      }
    ]
  }
])