import AccordionExample from "../components/accordion/AccordionExample";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import CheckboxExample from "../components/checkbox/CheckboxExample";
import Chips from "../components/chips/Chips";
import DrawerExample from "../components/drawer/DrawerExample";
import GridListExample from "../components/grid-list/GridListExample";
import InputExample from "../components/input/InputExample";
import Modal from "../components/modal/Modal";
import RadioButtonExample from "../components/radio-button/RadioButtonExample";
import RangeInputExample from "../components/range-input/RangeInputExample";
import Sidebar from "../components/sidebar/Sidebar";
import ToggleButtonExample from "../components/toggle-button/ToggleButtonExample";

export const ComponentData = [
  {
    id: 1,
    path: "/button",
    code: `
      function Button({ type = "button", onClick, text = "Click me" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {text}
      </button>
    );
  }
    `,
    title: "Button",
    preview: function () {
      return <Button />;
    },
  },
  {
    id: 2,
    path: "/card",
    code: `
  function Card({ title = "card", content="lorem ipsum dolor sit amet, consectetur adip"}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">{content}</p>
      </div>
    </div>
  );
}
    `,
    title: "Card",
    preview: function () {
      return <Card />;
    },
  },
  {
    id: 3,
    path: "/chips",
    code: `
  function Card({ title = "card", content="lorem ipsum dolor sit amet, consectetur adip"}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">{content}</p>
      </div>
    </div>
  );
}
    `,
    title: "Chips",
    preview: function () {
      return <Chips />;
    },
  },
  {
    id: 4,
    path: "/modal",
    code: `
import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">
              This is the content of the modal. You can place any content here.
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

    `,
    title: "Modal",
    preview: function () {
      return <Modal />;
    },
  },
  {
    id: 5,
    path: "/accordion",
    code: `
    import React, { useState } from "react";

    const Accordion = ({ items }) => {
      const [activeIndex, setActiveIndex] = useState(null);

      const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

      return (
        <div className="w-full mx-auto max-w-full">
          {items.map((item, index) => (
            <div key={index} className="rounded-2xl border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 px-6 bg-blue-100 hover:bg-blue-200 focus:outline-none transition-colors duration-300"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{item.title}</span>
                  <svg
                    className={\`w-5 h-5 transform transition-transform duration-300 \${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }\`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </button>
              <div
                className={\`overflow-hidden transition-all duration-500 ease-in-out \${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }\`}
              >
                <div className="px-6 py-4 text-gray-600 bg-white">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };

    export default Accordion;
  `,
    title: "Accordion",
    preview: function () {
      return <AccordionExample />;
    },
  },
  {
    id: 6,
    path: "/card",
    code: `
    import React from "react";
export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      {...props}
    />
  );
};
    `,
    title: "Input",
    preview: () => {
      return <InputExample />;
    },
  },
  {
    id: 7,
    path: "/sidebar",
    code: `
    import React from "react";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex h-screen">
      <button
        className="p-4 bg-gray-800 text-white lg:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Open"} Sidebar
      </button>
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-full bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <h1 className="text-xl font-bold">My Sidebar</h1>
        </div>
        <nav className="flex-grow px-4 py-2">
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-100 rounded-lg hover:bg-gray-700"
          >
            Logout
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
        <p className="mt-4">This is the main content area.</p>
      </div>
    </div>
  );
}

    `,
    title: "Sidebar",
    preview: () => {
      return <Sidebar />;
    },
  },
  {
    id: 8,
    path: "/radio-button",
    code: `
import React, { useState } from "react";

const RadioButton = ({ options, name, selectedOption, onChange }) => {
  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
            className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-blue-500 checked:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;

    `,
    title: "Radio Button",
    preview: () => {
      return <RadioButtonExample />;
    },
  },
  {
    id: 9,
    path: "/checkbox",
    code: `
import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  );
};

export default Checkbox;

    `,
    title: "Checkbox",
    preview: () => {
      return <CheckboxExample />;
    },
  },
  {
    id: 10,
    path: "/range",
    code: ``,
    title: "Range",
    preview: () => {
      return <RangeInputExample />;
    },
  },
  {
    id: 11,
    path: "/drawer",
    code: ``,
    title: "Drawer",
    preview: () => {
      return <DrawerExample />;
    },
  },
  {
    id: 12,
    path: "/grid-list",
    code: ``,
    title: "Grid List",
    preview: () => {
      return <GridListExample />;
    },
  },
  {
    id: 13,
    path: "/button-toggle",
    code: ``,
    title: "Button Toggle",
    preview: () => {
      return <ToggleButtonExample />;
    },
  },
];

export default ComponentData;
