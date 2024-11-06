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
          Single Page Pagination
        </h3>
        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
      </div>
    </div>
  );
}

export default PaginationExample;
