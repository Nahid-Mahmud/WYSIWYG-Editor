# WYSIWYG Editor

A modern, secure WYSIWYG (What You See Is What You Get) text editor built with Next.js, React, and TypeScript. Features a clean interface with essential formatting tools and built-in content sanitization for security.

## 🚀 Live Demo

[View Live Demo](https://wysiwyg-editor-ecru.vercel.app/)

## 📋 Features

- **Rich Text Editing**: Support for bold, italic, underline, headings, and lists
- **Secure Content**: Built-in HTML sanitization using DOMPurify to prevent XSS attacks
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **TypeScript**: Full type safety and better developer experience
- **Modern UI**: Clean, intuitive interface with Lucide React icons
- **Easy Integration**: Simple React component that can be embedded anywhere

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Security**: DOMPurify
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Nahid-Mahmud/WYSIWYG-Editor.git
cd WYSIWYG-Editor
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Usage

The editor component can be easily integrated into your React application:

```tsx
import { WYSIWYGEditor } from "@/components/Editor";

function MyPage() {
  const initialContent = "<p>Start editing...</p>";

  return (
    <WYSIWYGEditor
      initialContent={initialContent}
      onSave={(content) => console.log("Saved:", content)}
      className="prose"
    />
  );
}
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Development Setup

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/your-username/WYSIWYG-Editor.git
cd WYSIWYG-Editor
```

3. Install dependencies:

```bash
pnpm install
```

4. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

5. Start development:

```bash
pnpm dev
```

### Making Changes

- Follow the existing code style
- Add TypeScript types for new features
- Test your changes thoroughly
- Update documentation if needed

### Pull Request Process

1. Ensure your code passes linting: `pnpm lint`
2. Test your changes in the browser
3. Commit your changes with descriptive messages
4. Push to your fork and create a Pull Request
5. Describe your changes and reference any related issues

### Code Style

- Use TypeScript for all new code
- Follow React best practices
- Use Tailwind CSS classes for styling

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [https://github.com/Nahid-Mahmud/WYSIWYG-Editor](https://github.com/Nahid-Mahmud/WYSIWYG-Editor)
- **Live Demo**: [https://wysiwyg-editor-ecru.vercel.app/](https://wysiwyg-editor-ecru.vercel.app/)

---

Made with ❤️ using Next.js and React
