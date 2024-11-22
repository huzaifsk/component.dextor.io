import React from "react";

const Breadcrumb = ({ items, style = {} }) => {
  const defaultStyle = {
    nav: "flex",
    ol: "inline-flex items-center space-x-1 md:space-x-3",
    li: "inline-flex items-center",
    svg: "w-6 h-6 text-black/40",
    a: "inline-flex items-center ml-1 text-sm font-medium text-black hover:text-black/70",
    span: "inline-flex items-center ml-1 text-sm font-medium text-black/50",
  };

  const mergedStyle = {
    ...defaultStyle,
    ...style,
  };

  return (
    <nav className={mergedStyle.nav} aria-label="Breadcrumb">
      <ol className={mergedStyle.ol}>
        {items.map((item, index) => (
          <li key={index} className={mergedStyle.li}>
            {index > 0 && (
              <svg
                className={mergedStyle.svg}
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
                className={`${mergedStyle.a} ${index === 0 ? "ml-0" : "ml-1"}`}
              >
                {item.label}
              </a>
            ) : (
              <span
                className={`${mergedStyle.span} ${index === 0 ? "ml-0" : "ml-1"}`}
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

export default Breadcrumb;
