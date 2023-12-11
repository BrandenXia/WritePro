import Navbar from "./components/Navbar.tsx";
import Editor from "./components/Editor.tsx";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className="flex-1 flex-grow w-full">
        <Editor/>
      </div>
    </div>
  )
}