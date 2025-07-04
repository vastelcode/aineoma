import { Outlet } from "react-router-dom";
import { Sidebar } from "@/widgets/sidebar/index.js";

import styles from './styles.module.scss';

export const ChatLayout = () => {
  return (
    <div className={`${styles["chat-layout"]}`}>
      <Sidebar/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
