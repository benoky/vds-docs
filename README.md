# Voyage Design System Documentation

> A comprehensive documentation site for the Voyage Design System - a modern React component library built with TypeScript and Tailwind CSS.

## 📦 Links

- **[NPM Package](https://www.npmjs.com/package/voyage-design-system)** - Install the package
- **[Documentation](https://voyage-ui-docs.vercel.app/?path=/docs/introduction--docs)** - Full documentation and examples
- **[GitHub Repository](https://github.com/benoky/voyage-design-system)** - Source code

## ✨ Features

- 🎨 **20+ Modern Components** - Essential UI components for building React applications
- 🔥 **TypeScript First** - Built with TypeScript for excellent developer experience
- 🎯 **Accessible** - ARIA-compliant components following accessibility best practices
- 🎨 **Customizable** - Easy theming with Tailwind CSS and CSS variables
- 📱 **Responsive** - Mobile-first responsive design
- 🚀 **SSR Ready** - Server-side rendering support out of the box
- 📦 **Tree Shakeable** - Import only what you need
- 🔧 **Flexible** - Supports both controlled and uncontrolled components

## 🚀 Quick Start

### Installation

```bash
npm install voyage-design-system react react-dom
```

### Basic Usage

```tsx
import { Button, Input, Card } from 'voyage-design-system';
import 'voyage-design-system/styles';

function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Voyage Design System</h1>
      <Input 
        label="Email" 
        placeholder="Enter your email" 
        className="mb-4" 
      />
      <Button variant="default" size="lg">
        Get Started
      </Button>
    </Card>
  );
}
```

## 📚 Component Categories

### Form Components
- **Button** - Multiple variants, sizes, loading states
- **Input** - Labels, validation, icons, different states
- **Select** - Searchable, multi-select, custom options
- **Checkbox** - Indeterminate state, custom icons
- **Radio** - Group support, custom styling
- **Switch** - Controlled/uncontrolled, custom labels
- **Textarea** - Auto-resize, character limit
- **Editor** - WYSIWYG, markdown support, toolbar

### Display Components
- **Avatar** - User profile image with fallback
- **Badge** - Status indicator with variants
- **DataTable** - Data display with sorting and pagination

### Layout Components
- **Tabs** - Tabbed navigation with controlled/uncontrolled support

### Panel Components
- **Card** - Content container with flexible layout

### Feedback Components
- **Progress** - Progress indicator with custom labels
- **Skeleton** - Loading placeholder with animations

### Overlay Components
- **Modal** - Dialog overlay with focus management
- **Tooltip** - Hover information with positioning
- **Popup** - Floating content with positioning
- **ContextMenu** - Right-click menu with nested items

## 🛠️ Development

This repository contains the documentation site for the Voyage Design System. The actual component library is published as an NPM package.

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run start:local

# Build for production
npm run build:product
```

### Tech Stack

- **React 19** - Latest React features
- **Storybook** - Component documentation and testing
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React
- Styled with Tailwind CSS
- Type-safe with TypeScript
- Component variants powered by Class Variance Authority
- Icons by Lucide React

---

Made with ❤️ for the React community 