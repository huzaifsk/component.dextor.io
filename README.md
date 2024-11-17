# **Dextor Components**

A modern React component library built with Vite and styled with Tailwind CSS. This library offers a set of reusable, customizable, and accessible UI components for rapid development.

[![NPM](https://img.shields.io/npm/v/dextor-components.svg)](https://www.npmjs.com/package/dextor-components)
[![License](https://img.shields.io/npm/l/dextor-components)](https://github.com/dextor-io/components.dextor.io/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/dextor-components)](https://www.npmjs.com/package/dextor-components)

## 🚀 **Features**

- **Lightweight & Fast**: Built with Vite for blazing-fast development.
- **Tailwind CSS Support**: Pre-styled components using Tailwind CSS for a consistent design system.
- **Customizable**: Easily extend and customize components to match your branding.
- **Accessible**: Components adhere to accessibility standards for an inclusive user experience.
- **Modular**: Import only what you need to optimize performance.

---

## 🌐 Website

Discover full documentation, live previews, and component guides on our official website:
👉 https://components.dextor.io/

---

## 📦 **Installation**

Install the package via npm or yarn:

```bash
npm i dextor-components
```

---

## 🔧 **Setup**

To use the components, ensure you have Tailwind CSS set up in your project. Follow these steps:

1. Install and configure Tailwind CSS in your React project. [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)

2. Add the following to your `tailwind.config.js` file to include the library's styles:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@dextor/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Import the component styles in your entry file (e.g., `index.css`):

```css
@import "@dextor/main.css";
```

---

## ✨ **Usage**

Here's an example of how to use a component from the library:

```jsx
import { Button } from "dextor-components";

function App() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert("Hello, Dextor!")}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
```

## 🛠️ **Development**

Do you want to contribute or explore the source code? Clone the repository:

```bash
git clone https://github.com/dextor-io/components.dextor.io.git
cd components.dextor.io
npm install
npm run dev
```

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to open issues, suggest improvements, or submit pull requests. See the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 📢 **Feedback**

We’d love to hear your thoughts! Open an issue or reach out to us on [GitHub](https://github.com/dextor-io/).

---

Start building modern, elegant UIs with **Dextor Components**! 🚀
