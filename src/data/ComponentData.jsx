import Button from "../packages/button/Button";
import Card from "../packages/card/Card";
import Chips from "../packages/chips/Chips";

const ComponentData = [
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
      return <Chips />;
    },
  },
];

export default ComponentData;
