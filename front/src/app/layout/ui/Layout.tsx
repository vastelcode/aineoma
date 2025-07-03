import { Outlet } from "react-router-dom";
import { HeaderNav } from "@/widgets/header/index.js";


export function Layout() {
  return (
    <div className="layout">
      <HeaderNav/>
      <main className="flex justify-center">
        <Outlet/>
      </main>
    </div>
  );
}