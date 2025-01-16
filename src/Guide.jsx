import React from "react";

const Guide = () => {
  return (
    <div className="container mx-auto px-10 py-5">
      <h1 className="text-3xl font-bold text-start mb-4">
        Getting Started with Dextor Components
      </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📦 Installation</h2>
        <p>Install the package via npm or yarn:</p>
        <code className="bg-gray-100 px-2 py-1 rounded-md text-gray-700">
          npm i dextor-components
        </code>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔧 Setup</h2>
        <p>
          To use the components, ensure you have Tailwind CSS set up in your
          project. Follow these steps:
        </p>
        <ol className="list-disc list-inside">
          <li>
            Install and configure Tailwind CSS in your React project.{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out"
            >
              Tailwind CSS Docs
            </a>
          </li>
          <li>
            Add the following to your <code>tailwind.config.js</code> file to
            include the library's styles:
          </li>
        </ol>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-700">
          <code>
            {`module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@dextor/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
          </code>
        </pre>
        <p>
          Import the component styles in your entry file (e.g.,{" "}
          <code>index.css</code>):
        </p>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-700">
          <code>@import "@dextor/main.css";</code>
        </pre>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">✨ Usage</h2>
        <p>Here's an example of how to use a component from the library:</p>
        <pre className="bg-gray-100 p-4 rounded-md text-gray-700">
          <code>
            {`import { Button } from "dextor-components";

function App() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert("Hello, Dextor!")}>
        Click Me
      </Button>
    </div>
  );
}

export default App;`}
          </code>
        </pre>
      </section>
      <p className="text-center">
        Start building modern, elegant UIs with Dextor Components! 🚀
      </p>
    </div>
  );
};

export default Guide;
