import Favicon from "../assets/favicon.svg?react";
import Sidebar from "./Sidebar.tsx";
import Setting from "./Setting.tsx";
import {Icon} from "@iconify-icon/react";

export default function Navbar() {
  return (
    <nav className="fixed navbar bg-base-200/50 backdrop-blur drawer drawer-end">
      <div className="navbar-start">
        <button className="btn btn-ghost text-xl">
          <Favicon className="w-8 fill-current"/>
          <span>WritePro</span>
        </button>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-2">
          <label htmlFor="settings" className="btn btn-ghost">Settings</label>
          <div className="w-0.5 h-6 bg-base-300"/>
          <a className="btn btn-ghost btn-circle">
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