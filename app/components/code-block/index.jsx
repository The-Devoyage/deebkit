import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl} from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({ language, code }) {
  return (
    <SyntaxHighlighter language={language} style={nightOwl} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}
