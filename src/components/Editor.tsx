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

const theme = {};

const onError = (error: Error) => {
  console.error(error);
}

const Editable = () => (
  <ContentEditable
    className="prose text-base-content outline-none p-4 max-w-full w-full h-full overflow-y-scroll"
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
      <HistoryPlugin/>
    </LexicalComposer>
  )
}