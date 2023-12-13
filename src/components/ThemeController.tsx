import {Icon} from "@iconify-icon/react";

export default function ThemeController() {
  return (
    <div className="btn btn-ghost btn-circle">
      <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value="dark"/>
        <Icon icon="ph:sun" className="swap-on fill-current" width={24} height={24}/>
        <Icon icon="ph:moon" className="swap-off fill-current" width={24} height={24}/>
      </label>
    </div>
  )
}