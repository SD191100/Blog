import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import CopyButton from "../ui/CopyButton";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  language,
  value,
}: {
  language?: string;
  value: string;
}) => {
  return (
    <div className="relative bg-transparent group text-xl">
      <span className="absolute hidden text-sm font-mono left-3 top-1 group-hover:block">{language}</span>
      <SyntaxHighlighter
        language={language && SyntaxHighlighter.supportedLanguages.includes(language) ? language : "plaintext"}
        style={oneDark}>
        {value}
      </SyntaxHighlighter>
      <CopyButton value={value} />{" "}
    </div>
  );
};


const code = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className);
    const language = match ? match[1] : "plaintext";
    return match ?
      <CodeBlock language={language} value={String(children).trim()} />
      : (
        <code className={className + " bg-neutral-700 px-2 py-[3px] rounded-lg"} {...props}>
          {children}
        </code>
      );
  },
}


const Content = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-invert prose-xl prose-h1:m-0 prose-h2:my-2 prose-h3:my-2   prose-p:text-2xl prose-p:text-justify max-w-full">
      <div>
        <ReactMarkdown
          components={{
            ...code,
            pre({ children }) {
              return <div className="not-prose pt-3">{children}</div>; // Prevent prose styles on code blocks
            },
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default Content;

