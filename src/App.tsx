import Navbar from "./components/Navbar.tsx";
import Editor from "./components/Editor.tsx";
import Suggestions from "./components/Suggestions.tsx";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className="flex flex-1 min-h-0 flex-row bg-base-200 px-5 pt-4 pb-2">
        <div className="bg-base-100 rounded-2xl flex-1 overflow-y-auto">
          <Editor/>
        </div>
        <div className="flex-none w-72 hidden md:block">
          <Suggestions/>
        </div>
      </div>
    </div>
  )
}