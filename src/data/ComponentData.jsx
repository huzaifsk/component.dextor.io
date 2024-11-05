import AccordionExample from "../components/accordion/AccordionExample";
import AvatarExample from "../components/avatar/AvatarExample";
import BreadcrumbExample from "../components/breadcrumb/BreadcrumbExample";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import CheckboxExample from "../components/checkbox/CheckboxExample";
import Chips from "../components/chips/Chips";
import Datepicker from "../components/datepicker/Datepicker";
import DrawerExample from "../components/drawer/DrawerExample";
import DropdownExample from "../components/dropdown/DropdownExample";
import GridListExample from "../components/grid-list/GridListExample";
import InputExample from "../components/input/InputExample";
import Modal from "../components/modal/Modal";
import PaginationExample from "../components/pagination/PaginationExample";
import RadioButtonExample from "../components/radio-button/RadioButtonExample";
import RangeInputExample from "../components/range-input/RangeInputExample";
import RatingExample from "../components/rating/RatingExample";
import Sidebar from "../components/sidebar/Sidebar";
import StepperExample from "../components/stepper/StepperExample";
import TimePicker from "../components/timepicker/Timepicker";
import ToastExample from "../components/toast/ToastExample";
import ToggleButtonExample from "../components/toggle-button/ToggleButtonExample";

const componentConfig = {
  button: {
    code: `
import React from "react";

export default function Button({ onClick, text = "Click me" }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-white bg-black rounded hover:bg-gray-700 outline-none"
    >
      {text}
    </button>
  );
}
    `,
  },
  card: {
    code: `
import React from "react";

const Card = ({
  title = "title",
  description = "This is a modern card component with a share button. It features a clean design with a title, description text, and an interactive share button. The card has subtle hover effects and smooth transitions.",
}) => {
  
  const handleShare = () => {
    // Share functionality (you can customize this)
  };

  return (
    <div className="rounded-xl w-1/2 min-w-fit overflow-hidden shadow-2xl bg-white p-6 hover:shadow-3xl transition-all duration-300 border border-gray-100">
      <div className="font-bold text-2xl mb-3 text-gray-800 tracking-tight">
        {title}
      </div>
      <p className="text-gray-600 text-base mb-6 leading-relaxed">
        {description}
      </p>
      <button
        onClick={handleShare}
        className="bg-black hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        Share
      </button>
    </div>
  );
};

export default Card;
    `,
  },
  chips: {
    code: `
import React from "react";

export default function Chips() {
  const chips = [
    {
      label: "Apple",
      color: "bg-red-100 hover:bg-red-200 text-red-800",
      icon: "🍎",
    },
    {
      label: "Banana",
      color: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
      icon: "🍌",
    },
    {
      label: "Cherry",
      color: "bg-pink-100 hover:bg-pink-200 text-pink-800",
      icon: "🍒",
    },
    {
      label: "Blueberry",
      color: "bg-blue-100 hover:bg-blue-200 text-blue-800",
      icon: "🫐",
    },
    {
      label: "Elderberry",
      color: "bg-purple-100 hover:bg-purple-200 text-purple-800",
      icon: "🫐",
    },
    {
      label: "Fig",
      color: "bg-orange-100 hover:bg-orange-200 text-orange-800",
      icon: "🪴",
    },
  ];

  const getChipClasses = (color = "") => {
    return \`inline-flex items-center gap-2 px-4 py-2 m-1 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md \${color}\`;
  };

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {chips &&
        chips.map((chip) => {
          return (
            <div
              key={chip.label}
              className={getChipClasses(chip.color)}
              onClick={() => {}}
            >
              <span className="text-base">{chip.icon}</span>
              {chip.label}
            </div>
          );
        })}
    </div>
  );
}
  `,
  },
  modal: {
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
        className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 pointer-events-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Modal Title
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                This is the content of the modal. You can place any content
                here.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

    `,
  },
  accordion: {
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
        <div key={index} className="my-2 ">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left py-4 px-6 bg-white hover:bg-black hover:text-white focus:outline-none transition-colors duration-300 rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{item.title}</span>
              <svg
                className={\`w-5 h-5 transform transition-transform duration-300 \${activeIndex === index ? "rotate-180" : "rotate-0"}\`}
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
            className={\`overflow-hidden transition-all duration-500 ease-in-out \${activeIndex === index ? "max-h-40" : "max-h-0"}\`}
          >
            <div className="px-6 py-4 text-gray-600 bg-white rounded-2xl">
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
  },
  input: {
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
      className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors duration-200 "
      {...props}
    />
  );
};

    `,
  },
  sidebar: {
    code: `
import React, { useState, useEffect } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show button initially
    setIsVisible(true);

    const handleScroll = () => {
      // Get the sidebar component's position
      const sidebarElement = document.getElementById("sidebar-component");
      if (sidebarElement) {
        const rect = sidebarElement.getBoundingClientRect();
        const buffer = 100; // Add buffer zone for smoother transition

        // Check if component is in viewport with buffer
        const isInViewport =
          rect.top >= -buffer && rect.bottom <= window.innerHeight + buffer;

        setIsVisible(isInViewport);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common navigation items
  const navItems = [
    {
      name: "Dashboard",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      ),
    },
    {
      name: "Settings",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </>
      ),
    },
    {
      name: "Profile",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
    {
      name: "Logout",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      ),
    },
  ];

  const NavLink = ({ name, icon }) => (
    <a
      href="#"
      className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-black hover:text-white transition-all duration-200 group"
    >
      <svg
        className="w-5 h-5 mr-3 group-hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
      {name}
    </a>
  );

  return (
    //change the height to screen and remove the padding
    <div id="sidebar-component" className="flex h-full bg-gray-50 py-5">
      {" "}
      {/* Mobile Button */}
      {isVisible && (
        <button
          className="fixed top-4 left-4 z-50 p-3 rounded-lg bg-black shadow-lg text-white lg:hidden hover:bg-gray-800 hover:text-white transition-all duration-200 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
            </svg>
          )}
        </button>
      )}
      {/* Mobile Sidebar */}
      <div
        className={\`fixed lg:hidden inset-y-0 left-0 z-30 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out \${
          open ? "translate-x-0" : "-translate-x-full"
        }\`}
      >
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black">Mobile Menu</h1>
        </div>
        <nav className="flex-grow px-6 py-8 space-y-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <NavLink key={index} {...item} />
          ))}
        </nav>
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-72 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-20 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-black">Desktop Menu</h1>
        </div>
        <nav className="flex-grow px-6 py-8 space-y-4 overflow-y-auto">
          {navItems.map((item, index) => (
            <NavLink key={index} {...item} />
          ))}
        </nav>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Main Content */}
      <div className="lg:hidden">
        <div className="flex-1 h-ful">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mt-16 lg:mt-0">
              Click the icon on top left to open the sidebar
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex-1">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mt-16 lg:mt-0">
              Welcome to the Dashboard
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              This is the main content area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
    `,
  },
  radiobutton: {
    code: `import React, { useState } from "react";

const RadioButton = ({ options, name, selectedOption, onChange }) => {
  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center space-x-4 cursor-pointer group hover:bg-gray-50/50 p-3 rounded-xl transition-all duration-300 backdrop-blur-sm relative"
        >
          <div className="relative">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onChange(option.value)}
              className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-black checked:border-[6px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300 hover:border-gray-600"
            />
            <div className="absolute inset-0 bg-gray-100 scale-0 rounded-full transition-transform duration-300 group-hover:scale-150 opacity-0 group-hover:opacity-30" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-medium group-hover:text-black transition-colors duration-300">
              {option.label}
            </span>
            {option.description && (
              <span className="text-sm text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                {option.description}
              </span>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;`,
  },
  checkbox: {
    code: `import React from "react";

const Checkbox = ({ options = [], selectedOptions = [], onChange }) => {
  const handleChange = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    onChange(newSelectedOptions);
  };

  return (
    <div className="flex flex-col space-y-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-3 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200"
        >
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:border-black checked:bg-black outline-none transition-all duration-200"
            />
            <svg
              className="absolute w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200 pointer-events-none"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 4L6.00008 11.3333L2.66675 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-gray-700 font-medium select-none group-hover:text-gray-900 transition-colors duration-200 text-sm">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;`,
  },
  rangeinput: {
    code: `import React from "react";

const RangeInput = ({ label, min, max, value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <label className="text-gray-800 font-medium tracking-wide">
          {label}
        </label>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          {value}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-300
          [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150
          [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:border-gray-400
          focus:outline-none"
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">{min}</span>
        <span className="text-xs text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default RangeInput;`,
  },
  drawer: {
    code: `import React from "react";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={\`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 \${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }\`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={\`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl transition-all duration-300 transform backdrop-blur-md border-r border-black/10 \${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }\`}
      >
        <div className="flex justify-between items-center p-6 border-b border-black/10">
          <h2 className="text-xl font-semibold text-black">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors duration-200 group"
          >
            <svg
              className="w-5 h-5 text-black/50 group-hover:text-black transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;`,
  },
  gridlist: {
    code: `import React from "react";

const GridList = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-8 p-4 md:p-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 backdrop-blur-sm hover:-translate-y-1"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {item.title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridList;`,
  },
  togglebutton: {
    code: `import React, { useState } from "react";

const ToggleButton = ({ initialState = false, onToggle, label }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };

  return (
    <div className="inline-flex items-center gap-3">
      {label && <span className="text-gray-700 font-medium">{label}</span>}
      <button
        onClick={handleToggle}
        className={\`relative flex items-center justify-between w-14 h-7 rounded-full p-1 transition-all duration-300 ease-in-out \${
          isOn ? "bg-black hover:bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 \${
          isOn ? "focus:ring-black" : "focus:ring-gray-400"
        }\`}
        aria-pressed={isOn}
        role="switch"
      >
        <span className="sr-only">{label || "Toggle"}</span>
        <span
          className={\`absolute w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out \${
            isOn ? "translate-x-7" : "translate-x-0"
          } hover:scale-110\`}
        ></span>
        <span
          className={\`ml-1 text-xs font-medium \${isOn ? "opacity-0" : "text-gray-500"}\`}
        >
          Off
        </span>
        <span
          className={\`mr-1 text-xs font-medium \${isOn ? "text-white" : "opacity-0"}\`}
        >
          On
        </span>
      </button>
    </div>
  );
};

export default ToggleButton;`,
  },
  dropdown: {
    code: `import React, { useState } from "react";

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className={\`block truncate \${!value ? "text-gray-500" : "text-gray-900"}\`}
        >
          {value ? value.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={\`w-5 h-5 text-gray-400 transition-transform duration-200 \${
              isOpen ? "transform rotate-180" : ""
            }\`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1" role="listbox">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors duration-150 ease-in-out"
                role="option"
                aria-selected={value?.value === option.value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;`,
  },
  datepicker: {
    code: `import React, { useState } from "react";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMonthYearDropdown, setShowMonthYearDropdown] = useState(false);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const generateDays = () => {
    const days = [];
    const totalDays = daysInMonth(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
    );

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }
    return days;
  };

  const months = [
    "January",
    "February", 
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      years.push(i);
    }
    return years;
  };

  const handleDateClick = (day) => {
    const newDate = new Date(selectedDate.setDate(day));
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  const handleMonthChange = (monthIndex) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(monthIndex);
    setSelectedDate(newDate);
    setShowMonthYearDropdown(false);
  };

  const handleYearChange = (year) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(year);
    setSelectedDate(newDate);
    setShowMonthYearDropdown(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Date Picker</h2>
      <div className="relative">
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-72 p-4 text-white bg-black rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-between"
        >
          <span>{selectedDate.toLocaleDateString()}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>

        {showCalendar && (
          <div className="absolute mt-2 p-4 bg-white border-2 border-black rounded-xl shadow-xl z-50">
            <div className="flex justify-between mb-4">
              <button
                onClick={() => setShowMonthYearDropdown(!showMonthYearDropdown)}
                className="px-4 py-1 bg-black text-white rounded flex-grow text-center"
              >
                {selectedDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </button>
            </div>

            {showMonthYearDropdown && (
              <div className="absolute left-0 right-0 bg-white border-2 border-black rounded-xl p-4 mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <h3 className="font-bold mb-2">Month</h3>
                    <div className="max-h-48 overflow-y-auto">
                      {months.map((month, index) => (
                        <button
                          key={month}
                          onClick={() => handleMonthChange(index)}
                          className={\`w-full text-left p-2 hover:bg-gray-100 \${
                            index === selectedDate.getMonth()
                              ? "bg-black text-white"
                              : ""
                          }\`}
                        >
                          {month}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold mb-2">Year</h3>
                    <div className="max-h-48 overflow-y-auto">
                      {generateYears().map((year) => (
                        <button
                          key={year}
                          onClick={() => handleYearChange(year)}
                          className={\`w-full text-left p-2 hover:bg-gray-100 \${
                            year === selectedDate.getFullYear()
                              ? "bg-black text-white"
                              : ""
                          }\`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-7 gap-2">
              {generateDays().map((day) => (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={\`p-2 rounded hover:bg-gray-200 \${
                    day === selectedDate.getDate() ? "bg-black text-white" : ""
                  }\`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-gray-600">
        Selected date:{" "}
        <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
      </p>
    </div>
  );
}

export default DatePicker;`,
  },
  timepicker: {
    code: `import React, { useState } from "react";

function TimePicker({ value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value || "");
  const [period, setPeriod] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );

  const handleTimeChange = (hour, minute) => {
    const newTime = \`\${hour}:\${minute} \${period}\`;
    setSelectedTime(newTime);
    if (onChange) {
      onChange(newTime);
    }
  };

  const togglePeriod = () => {
    const newPeriod = period === "AM" ? "PM" : "AM";
    setPeriod(newPeriod);
    if (selectedTime) {
      const [time] = selectedTime.split(" ");
      const newTime = \`\${time} \${newPeriod}\`;
      setSelectedTime(newTime);
      if (onChange) {
        onChange(newTime);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-full">
      <div className="relative">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="w-64 p-3 text-white bg-black border border-gray-300 rounded-md hover:bg-gray-800 transition-all duration-200 flex items-center justify-between"
        >
          <span>{selectedTime || "Select Time"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        {showPicker && (
          <div className="absolute mt-2 p-4 bg-white border-2 border-black rounded-md shadow-xl z-50 w-72">
            <div className="flex gap-4 justify-between">
              <div className="h-48 overflow-y-auto scrollbar-thin">
                <div className="font-semibold text-center mb-2">Hours</div>
                {hours.map((hour) => (
                  <div
                    key={hour}
                    onClick={() =>
                      handleTimeChange(
                        hour,
                        selectedTime?.split(":")[1]?.split(" ")[0] || "00",
                      )
                    }
                    className={\`p-2 text-center hover:bg-gray-100 cursor-pointer rounded \${
                      selectedTime?.split(":")[0] === hour ? "bg-gray-200" : ""
                    }\`}
                  >
                    {hour}
                  </div>
                ))}
              </div>
              <div className="h-48 overflow-y-auto scrollbar-thin">
                <div className="font-semibold text-center mb-2">Minutes</div>
                {minutes.map((minute) => (
                  <div
                    key={minute}
                    onClick={() =>
                      handleTimeChange(
                        selectedTime?.split(":")[0] || "12",
                        minute,
                      )
                    }
                    className={\`p-2 text-center hover:bg-gray-100 cursor-pointer rounded \${
                      selectedTime?.split(":")[1]?.split(" ")[0] === minute
                        ? "bg-gray-200"
                        : ""
                    }\`}
                  >
                    {minute}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-start">
                <div className="font-semibold text-center mb-2">Period</div>
                <button
                  onClick={togglePeriod}
                  className={\`p-2 mb-2 rounded \${
                    period === "AM"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }\`}
                >
                  AM
                </button>
                <button
                  onClick={togglePeriod}
                  className={\`p-2 rounded \${
                    period === "PM"
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }\`}
                >
                  PM
                </button>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowPicker(false)}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
      {selectedTime && (
        <p className="mt-3 text-black text-sm">
          Selected: <span className="font-medium">{selectedTime}</span>
        </p>
      )}
    </div>
  );
}

export default TimePicker;`,
  },
  toast: {
    code: `import React, { useState, useEffect } from "react";

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={\`mb-4 p-4 rounded-lg shadow-lg flex items-center justify-between min-w-[300px] animate-[slideIn_0.3s_ease-out] \${
            toast.type === "success"
              ? "bg-green-50 text-green-800"
              : toast.type === "error"
                ? "bg-red-50 text-red-800"
                : toast.type === "warning"
                  ? "bg-yellow-50 text-yellow-800"
                  : "bg-blue-50 text-blue-800"
          }\`}
          style={{
            animation: toast.isExiting
              ? "slideOut 0.3s ease-in forwards"
              : "slideIn 0.3s ease-out",
          }}
        >
          <p>{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      ))}
      <style>
        {\`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slideOut {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }
        \`}
      </style>
    </div>
  );
};

let toastCount = 0;
let addToastCallback = () => {};

const Toast = {
  success: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "success", message });
    }
  },

  error: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "error", message });
    }
  },

  warning: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "warning", message });
    }
  },

  info: (message) => {
    if (typeof addToastCallback === "function") {
      addToastCallback({ id: ++toastCount, type: "info", message });
    }
  },
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    addToastCallback = (toast) => {
      setToasts((prev) => [...prev, { ...toast, isExiting: false }]);
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === toast.id ? { ...t, isExiting: true } : t)),
        );
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== toast.id));
        }, 300);
      }, 2700);
    };

    return () => {
      addToastCallback = () => {};
    };
  }, []);

  const removeToast = (id) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, isExiting: true } : toast,
      ),
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  };

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
};

export default Toast;`,
  },
  avatar: {
    code: `import React from "react";

const Avatar = ({ images, names, limit = 4, size = "md" }) => {
  // Size classes mapping
  const sizeClasses = {
    sm: "w-8 h-8", 
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  // Calculate how many avatars to show and if we need a +X more indicator
  const visibleAvatars = images.slice(0, limit);
  const remainingCount = images.length - limit;
  const showRemaining = remainingCount > 0;

  return (
    <div className="flex items-center -space-x-2">
      {visibleAvatars.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image}
            alt={names[index]}
            className={\`\${sizeClasses[size]} rounded-full border-2 border-white object-cover hover:z-10 transition-all duration-200\`}
          />
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
            {names[index]}
          </div>
        </div>
      ))}

      {showRemaining && (
        <div
          className={\`\${sizeClasses[size]} rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-sm font-medium text-gray-600\`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default Avatar;`,
  },
  stepper: {
    code: `import React from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Step circle */}
          <div
            className={\`flex items-center justify-center w-8 h-8 rounded-full border-2 \${
              index <= currentStep
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-500"
            }\`}
          >
            {index < currentStep ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <span>{index + 1}</span>
            )}
          </div>

          {/* Step label */}
          <span
            className={\`ml-2 text-sm font-medium \${
              index <= currentStep ? "text-black" : "text-gray-500"
            }\`}
          >
            {step}
          </span>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div
              className={\`w-12 h-0.5 mx-4 \${
                index < currentStep ? "bg-black" : "bg-gray-300"
              }\`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;`,
  },
  rating: {
    code: `import React, { useState } from "react";

const Rating = ({
  initialRating = 0,
  maxRating = 5,
  onRatingChange,
  size = "md",
  disabled = false,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (value) => {
    if (!disabled) {
      setRating(value);
      if (onRatingChange) {
        onRatingChange(value);
      }
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-8 h-8";
      default:
        return "w-6 h-6";
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            className={\`\${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}\`}
            onClick={() => handleRatingClick(ratingValue)}
            onMouseEnter={() => !disabled && setHover(ratingValue)}
            onMouseLeave={() => !disabled && setHover(null)}
            disabled={disabled}
          >
            <svg
              className={\`\${getSizeClasses()} \${
                ratingValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }\`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;`,
  },
  breadcrumb: {
    code: `import React from "react";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-6 h-6 text-black/40"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {item.href ? (
              <a
                href={item.href}
                className={\`inline-flex items-center \${
                  index === 0 ? "ml-0" : "ml-1"
                } text-sm font-medium text-black hover:text-black/70\`}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={\`inline-flex items-center \${
                  index === 0 ? "ml-0" : "ml-1"
                } text-sm font-medium text-black/50\`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;`,
  },
  pagination: {
    code: `import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  showFirstLast = true,
}) => {
  const handlePageChange = (page) => {
    if (!disabled && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={disabled}
          className={\`px-3 py-1 mx-1 text-sm font-medium rounded-md
            \${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            \${
              currentPage === i
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-black/10"
            }\`}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(1)}
          disabled={disabled || currentPage === 1}
          className={\`px-3 py-1 text-sm font-medium rounded-md
            \${
              disabled || currentPage === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-black/10"
            }\`}
          title="first"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-to-arc"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 12h-12" />
            <path d="M13 16l-4 -4l4 -4" />
            <path d="M12 3a9 9 0 1 0 0 18" />
          </svg>
        </button>
      )}

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        className={\`px-3 py-1 text-sm font-medium rounded-md
          \${
            disabled || currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-black/10"
          }\`}
        title="previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        className={\`px-3 py-1 text-sm font-medium rounded-md
          \${
            disabled || currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-black/10"
          }\`}
        title="next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </button>

      {showFirstLast && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          className={\`px-3 py-1 text-sm font-medium rounded-md
            \${
              disabled || currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-black/10"
            }\`}
          title="last"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right-to-arc"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h12" />
            <path d="M11 8l4 4l-4 4" />
            <path d="M12 21a9 9 0 0 0 0 -18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;`,
  },
};

export const ComponentData = [
  {
    id: 1,
    path: "/button",
    code: componentConfig?.button?.code,
    title: "Button",
    preview: () => <Button />,
  },
  {
    id: 2,
    path: "/card",
    code: componentConfig?.card?.code,
    title: "Card",
    preview: () => <Card />,
  },
  {
    id: 3,
    path: "/chips",
    code: componentConfig?.chips?.code,
    title: "Chips",
    preview: () => <Chips />,
  },
  {
    id: 4,
    path: "/modal",
    code: componentConfig?.modal?.code,
    title: "Modal",
    preview: () => <Modal />,
  },
  {
    id: 5,
    path: "/accordion",
    code: componentConfig?.accordion?.code,
    title: "Accordion",
    preview: () => <AccordionExample />,
  },
  {
    id: 6,
    path: "/input",
    code: componentConfig?.input?.code,
    title: "Input",
    preview: () => <InputExample />,
  },
  {
    id: 7,
    path: "/sidebar",
    code: componentConfig?.sidebar?.code,
    title: "Sidebar",
    preview: () => <Sidebar />,
  },
  {
    id: 8,
    path: "/radio-button",
    code: componentConfig?.radiobutton?.code,
    title: "Radio Button",
    preview: () => <RadioButtonExample />,
  },
  {
    id: 9,
    path: "/checkbox",
    code: componentConfig?.checkbox?.code,
    title: "Checkbox",
    preview: () => <CheckboxExample />,
  },
  {
    id: 10,
    path: "/range",
    code: componentConfig?.rangeinput?.code,
    title: "Range",
    preview: () => <RangeInputExample />,
  },
  {
    id: 11,
    path: "/drawer",
    code: componentConfig?.drawer?.code,
    title: "Drawer",
    preview: () => <DrawerExample />,
  },
  {
    id: 12,
    path: "/grid-list",
    code: componentConfig?.gridlist?.code,
    title: "Grid List",
    preview: () => <GridListExample />,
  },
  {
    id: 13,
    path: "/button-toggle",
    code: componentConfig?.togglebutton?.code,
    title: "Button Toggle",
    preview: () => <ToggleButtonExample />,
  },
  {
    id: 14,
    path: "/dropdown",
    code: componentConfig?.dropdown?.code,
    title: "Dropdown",
    preview: () => <DropdownExample />,
  },
  {
    id: 15,
    path: "/date-picker",
    code: componentConfig?.datepicker?.code,
    title: "Date Picker",
    preview: () => <Datepicker />,
  },
  {
    id: 16,
    path: "/time-picker",
    code: componentConfig?.timepicker?.code,
    title: "Time Picker",
    preview: () => <TimePicker />,
  },
  {
    id: 17,
    path: "/toast",
    code: componentConfig?.toast?.code,
    title: "Toast",
    preview: () => <ToastExample />,
  },
  {
    id: 18,
    path: "/avatar",
    code: componentConfig?.avatar?.code,
    title: "Avatar",
    preview: () => <AvatarExample />,
  },
  {
    id: 19,
    path: "/stepper",
    code: componentConfig?.stepper?.code,
    title: "Stepper",
    preview: () => <StepperExample />,
  },
  {
    id: 20,
    path: "/rating",
    code: componentConfig?.rating?.code,
    title: "Rating",
    preview: () => <RatingExample />,
  },
  {
    id: 21,
    path: "/breadcrumb",
    code: componentConfig?.breadcrumb?.code,
    title: "Breadcrumb",
    preview: () => <BreadcrumbExample />,
  },
  {
    id: 22,
    path: "/pagination",
    code: componentConfig?.pagination?.code,
    title: "Pagination",
    preview: () => <PaginationExample />,
  },
];

export default ComponentData;
