// импорт модулей react-router-dom
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./paths.js";


// импорт информационных страниц
import { AboutPage } from "@/pages/about-page/index.js";
import { TariffPage } from "@/pages/tariffs-page/index.js";
import { LoginPage } from "@/pages/login-page/index.js";
import { LogupPage } from "@/pages/logup-page/index.js";
import { MessagePage } from "@/pages/message-page/index.js";

// импорт страниц чата
import { ChatsPage } from "@/pages/chats-page/index.js";
import { ProfilePage } from "@/pages/profile-page/index.js";
import { HistoryPage } from "@/pages/history-page/index.js";
import { ImagesPage } from "@/pages/images-page/index.js";
import { SoundPage } from "@/pages/sound-page/index.js";
import { TemplatesPage } from "@/pages/templates-page/index.js";


// импорт шаблонов
import { Layout } from "@/app/layout/index.js";
import { ChatLayout } from "@/app/layout/index.js";


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
        path: RoutePaths.MESSAGE,
        element: <MessagePage />
      },
      {
        path:RoutePaths.NOT_FOUND,
        element: <Navigate to="/message/404" />
      }
    ]
  },
  {
    element: <ChatLayout/>,
    children:[
      {
        path:RoutePaths.CHAT_CHATS,
        element:<ChatsPage/>
      },
      {
        path:RoutePaths.CHAT_PROFILE,
        element:<ProfilePage/>
      },
      {
        path:RoutePaths.CHAT_HISTORY,
        element:<HistoryPage/>
      },
      {
        path:RoutePaths.CHAT_IMAGES,
        element: <ImagesPage/>
      },
      {
        path:RoutePaths.CHAT_SOUND,
        element: <SoundPage/>
      },
      {
        path:RoutePaths.CHAT_TEMPLATES,
        element: <TemplatesPage/>
      },
      {
        path: RoutePaths.NOT_FOUND,
        element:<Navigate to="/message/404"/>
      }
    ]
  }
])