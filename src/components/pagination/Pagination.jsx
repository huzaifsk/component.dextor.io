import React from "react";

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
          className={`px-3 py-1 mx-1 text-sm font-bold rounded-md
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
            ${
              currentPage === i
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-black/10"
            }`}
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
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-black/10"
            }`}
          title="first"
        >
          {`<<`}
        </button>
      )}

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        className={`px-3 py-1 text-xl font-bold rounded-md
          ${
            disabled || currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-black/10"
          }`}
        title="previous"
      >
        {`<`}
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        className={`px-3 py-1 text-xl font-bold rounded-md
          ${
            disabled || currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:bg-black/10"
          }`}
        title="next"
      >
        {`>`}
      </button>

      {showFirstLast && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          className={`px-3 py-1 text-xl font-bold rounded-md
            ${
              disabled || currentPage === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-black/10"
            }`}
          title="last"
        >
          {`>>`}
        </button>
      )}
    </div>
  );
};

export default Pagination;
