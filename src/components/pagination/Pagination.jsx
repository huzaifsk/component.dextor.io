import {
  faAnglesLeft,
  faAnglesRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  showFirstLast = true,
  style = {
    firstLastButton:
      "px-3 py-1 text-xl font-bold rounded-md cursor-pointer hover:bg-black/10",
    prevNextButton:
      "px-3 py-1 text-xl font-bold rounded-md cursor-pointer hover:bg-black/10",
    pageButton:
      "px-3 py-1 mx-1 text-sm font-bold rounded-md cursor-pointer hover:bg-black/10",
    activePageButton: "bg-black text-white",
    disabledButton: "cursor-not-allowed opacity-50",
  },
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
          className={`px-3 py-1 mx-1 text-sm font-bold rounded-md
            ${disabled ? style.disabledButton : style.pageButton}
            ${currentPage === i ? style.activePageButton : ""}`}
        >
          {i}
        </button>
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
          className={`px-3 py-1 text-xl font-bold rounded-md
            ${
              disabled || currentPage === 1
                ? style.disabledButton
                : style.firstLastButton
            }`}
          title="first"
        >
          <FontAwesomeIcon size="sm" icon={faAnglesLeft} />
        </button>
      )}

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        className={`px-3 py-1 text-xl font-bold rounded-md
          ${
            disabled || currentPage === 1
              ? style.disabledButton
              : style.prevNextButton
          }`}
        title="previous"
      >
        <FontAwesomeIcon size="sm" icon={faChevronLeft} />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        className={`px-3 py-1 text-xl font-bold rounded-md
          ${
            disabled || currentPage === totalPages
              ? style.disabledButton
              : style.prevNextButton
          }`}
        title="next"
      >
        <FontAwesomeIcon size="sm" icon={faChevronRight} />
      </button>

      {showFirstLast && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          className={`px-3 py-1 text-xl font-bold rounded-md
            ${
              disabled || currentPage === totalPages
                ? style.disabledButton
                : style.firstLastButton
            }`}
          title="last"
        >
          <FontAwesomeIcon size="sm" icon={faAnglesRight} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
