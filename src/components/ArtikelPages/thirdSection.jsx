import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage = 3, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between p-4">
      <button
        onClick={previousPage}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Previous
      </button>

      <div>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <span
            key={idx}
            className={`mx-2 cursor-pointer ${
              idx + 1 === currentPage
                ? "text-blue-500 font-bold"
                : "text-gray-500"
            }`}
            onClick={() => goToPage(idx + 1)}
          >
            {idx + 1}
          </span>
        ))}
      </div>

      <button
        onClick={nextPage}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
