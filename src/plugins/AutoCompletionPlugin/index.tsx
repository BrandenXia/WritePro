import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";

export default function AutoCompletionPlugin() {
  return <OnChangePlugin onChange={(value) => console.log(value)}/>
}