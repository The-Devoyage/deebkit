import React from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeBlock({ language, code }) {
  return (
    <div className="dark:bg-base-200 text-left max-w-full overflow-auto p-4 rounded-lg shadow">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

