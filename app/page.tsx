import { WYSIWYGEditor } from "@/components/Editor";

export default function Editor() {
  const parsedContent = `<h2>Welcome to the WYSIWYG demo</h2>
<p>This is some <strong>initial</strong> content to play with. Try the toolbar to make text <em>italic</em>, <u>underlined</u>, or <strong>bold</strong>.</p>
<p>Here's an unordered list:</p>
<ul>
  <li>First item</li>
  <li>Second item with <strong>bold</strong> text</li>
  <li>Third item</li>
</ul>
<p>And an ordered list:</p>
<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
<p>Have fun editing — click <em>Edit</em> to start.</p>`;

  return (
    <div className="mx-auto max-w-3xl">
      <WYSIWYGEditor className="prose" initialContent={parsedContent} />
    </div>
  );
}
