import { Heading, Text } from "@astryxdesign/core/Text";
import { Code } from "@astryxdesign/core/Code";
import { CodeBlock } from "@astryxdesign/core/CodeBlock";
import { Blockquote } from "@astryxdesign/core/Blockquote";
import { Link } from "@astryxdesign/core/Link";

export const mdxComponents = {
  h1: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Heading level={1}>{children}</Heading>
  ),
  h2: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Heading level={2}>{children}</Heading>
  ),
  h3: ({ children }: React.HTMLProps<HTMLHeadingElement>) => (
    <Heading level={3}>{children}</Heading>
  ),
  p: ({ children }: React.HTMLProps<HTMLParagraphElement>) => (
    <Text type="body" color="secondary">{children}</Text>
  ),
  ul: ({ children }: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc ml-5 space-y-1 text-secondary">{children}</ul>
  ),
  ol: ({ children }: React.HTMLProps<HTMLOListElement>) => (
    <ol className="list-decimal ml-5 space-y-1 text-secondary">{children}</ol>
  ),
  li: ({ children }: React.HTMLProps<HTMLLIElement>) => (
    <li className="leading-relaxed">{children}</li>
  ),
  code: ({ className, children }: React.HTMLProps<HTMLElement>) => {
    const isInline = !className;
    if (isInline) {
      return <Code>{children as string}</Code>;
    }
    return (
      <CodeBlock
        code={String(children).replace(/\n$/, "")}
        language={className?.replace("language-", "") ?? "plaintext"}
      />
    );
  },
  pre: ({ children }: React.HTMLProps<HTMLPreElement>) => (
    <pre className="overflow-x-auto">{children}</pre>
  ),
  strong: ({ children }: React.HTMLProps<HTMLElement>) => (
    <strong className="font-semibold text-primary">{children}</strong>
  ),
  a: ({ href, children }: React.HTMLProps<HTMLAnchorElement>) => (
    <Link href={href!}>{children}</Link>
  ),
  blockquote: ({ children }: React.HTMLProps<HTMLQuoteElement>) => (
    <Blockquote>{children}</Blockquote>
  ),
};
