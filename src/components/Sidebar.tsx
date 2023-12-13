import {ReactNode} from "react";

export default function Sidebar(props: {
  id: string,
  children?: ReactNode
}) {
  return (
    <>
      <input id={props.id} type="checkbox" className="drawer-toggle"/>
      <div className="drawer-side">
        <label htmlFor={props.id} aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content z-50">
          {props.children}
        </div>
      </div>
    </>
  )
}