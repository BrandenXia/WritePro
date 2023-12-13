import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {TreeView} from "@lexical/react/LexicalTreeView";
import {useEffect, useState} from "react";
import "./style.css"

export default function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const treeView = document.querySelector('.tree-view')! as HTMLDivElement;
    const treeViewPanel = document.querySelector('.tree-view > pre')! as HTMLDivElement;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 't' && event.ctrlKey) {
        setHidden((hidden) => !hidden);
      }
    }

    const elementDrag = (event: MouseEvent) => {
      event.preventDefault();
      const x = event.pageX - treeView.offsetWidth / 2;
      const y = event.pageY - treeView.offsetHeight / 2;
      treeView.style.top = `${y}px`;
      treeView.style.left = `${x}px`;
    }

    const closeDragElement = () => {
      window.removeEventListener('mousemove', elementDrag);
      window.removeEventListener('mouseup', closeDragElement);
    }

    const dragMouseDown = (event: MouseEvent) => {
      event.preventDefault();
      window.addEventListener('mousemove', elementDrag);
      window.addEventListener('mouseup', closeDragElement);
    }

    window.addEventListener('keydown', onKeyDown);
    treeViewPanel.addEventListener('mousedown', dragMouseDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      treeViewPanel.removeEventListener('mousedown', dragMouseDown);
    }
  }, [])

  return <TreeView
    editor={editor}
    treeTypeButtonClassName="hidden"
    timeTravelButtonClassName="absolute top-5 right-5 btn btn-sm"
    timeTravelPanelButtonClassName="btn btn-sm btn-outline btn-ghost"
    timeTravelPanelClassName="absolute -bottom-10 w-full flex flex-row items-center"
    timeTravelPanelSliderClassName="mx-3 flex-1 range range-xs"
    viewClassName={`tree-view ${hidden ? 'hidden' : ''}`}
  />
}