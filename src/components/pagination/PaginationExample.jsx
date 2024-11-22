import React, { useState } from "react";
import Pagination from "./Pagination";

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center overflow-auto">
      <div className="w-full max-w-md pt-20">
        <h3 className="text-lg font-medium text-black mb-4">
          Basic Pagination
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="w-full max-w-md py-4">
        <h3 className="text-lg font-medium text-black mb-4">
          Pagination with First/Last
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
          showFirstLast={true}
        />
      </div>

      <div className="w-full max-w-md py-4">
        <h3 className="text-lg font-medium text-black mb-4">
          Disabled Pagination
        </h3>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={() => {}}
          disabled={true}
        />
      </div>

      <div className="w-full max-w-md py-4">
        <h3 className="text-lg font-medium text-black mb-4">
          Pagination with Custom Styling
        </h3>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
          showFirstLast={true}
          style={{
            firstLastButton:
              "px-4 py-2 text-xl font-bold rounded-lg cursor-pointer hover:bg-gray-200",
            prevNextButton:
              "px-4 py-2 text-xl font-bold rounded-lg cursor-pointer hover:bg-gray-200",
            pageButton:
              "px-4 py-2 mx-2 text-sm font-bold rounded-lg cursor-pointer hover:bg-gray-200",
            activePageButton: "bg-blue-500 text-white",
            disabledButton: "cursor-not-allowed opacity-50",
          }}
        />
      </div>
    </div>
  );
}

export default PaginationExample;
