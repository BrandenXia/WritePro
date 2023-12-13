import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {MarkdownShortcutPlugin} from "@lexical/react/LexicalMarkdownShortcutPlugin";
import {ListItemNode, ListNode} from "@lexical/list";
import {HeadingNode, QuoteNode} from "@lexical/rich-text";
import {HorizontalRuleNode} from "@lexical/react/LexicalHorizontalRuleNode";
import {CodeNode} from "@lexical/code";
import {LinkNode} from "@lexical/link";
import AutoCompletionPlugin from "../plugins/AutoCompletionPlugin";
import TreeViewPlugin from "../plugins/TreeViewPlugin";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {TabIndentationPlugin} from "@lexical/react/LexicalTabIndentationPlugin";

const theme = {};

const onError = (error: Error) => {
  console.error(error);
}

const Editable = () => (
  <ContentEditable
    className="h-full prose p-6 outline-none max-w-full w-full snap-y scroll-mb-12"
    spellCheck={true}
  />
)

export default function Editor() {
  const initialConfig = {
    namespace: 'editor',
    theme,
    onError,
    nodes: [
      CodeNode,
      HeadingNode,
      HorizontalRuleNode,
      LinkNode,
      ListNode,
      ListItemNode,
      QuoteNode,
    ]
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<Editable/>}
        placeholder={null}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <MarkdownShortcutPlugin/>
      <TabIndentationPlugin/>
      <HistoryPlugin/>
      <AutoCompletionPlugin/>
      <TreeViewPlugin/>
      <AutoFocusPlugin/>
    </LexicalComposer>
  )
}