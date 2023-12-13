import Sidebar from "./Sidebar.tsx";
import Setting from "./Setting.tsx";
import {Icon} from "@iconify-icon/react";
import ThemeController from "./ThemeController.tsx";
import Logo from "./Logo.tsx";

export default function Navbar() {
  return (
    <nav className="flex-none navbar bg-base-200 backdrop-blur drawer drawer-end drop-shadow">
      <div className="navbar-start">
        <div className="btn btn-ghost text-xl">
          <Logo/>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-2">
          <ThemeController/>
          <label htmlFor="settings" className="btn btn-ghost">Settings</label>
          <div className="w-0.5 h-6 bg-base-300"/>
          <a className="btn btn-ghost btn-circle" href="https://github.com/BrandenXia/WritePro" target="_blank">
            <Icon icon="ph:github-logo" width={24} height={24}/>
          </a>
        </div>
      </div>
      <Sidebar id="settings">
        <Setting/>
      </Sidebar>
    </nav>
  )
}