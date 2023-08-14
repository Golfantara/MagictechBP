import React, { useState } from "react";
import articles from "./ArtikelPagesData";
import Pagination from "./thirdSection";

const ITEMS_PER_PAGE = 3; // Adjust this value as needed

const PaginatedArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end indexes for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the articles for the current page
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div>
      {currentArticles.map((article, index) => (
        <div key={index} className="shadow-xl p-6 rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-lg"
          />
          <h1 className="text-sm text-merah font-semibold py-3">
            {article.label}
          </h1>
          <h2 className="text-2xl font-semibold py-3">{article.title}</h2>
          <p className="text-base text-gray-500">{article.description}</p>
          <div className="flex items-center mt-4">
            <img
              src={article.authorImage}
              alt={article.authorName}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-col ml-2">
              <p className="text-gray-900">{article.authorName}</p>
              <p className="text-gray-500">{article.date}</p>
            </div>
          </div>
        </div>
      ))}

      <Pagination
        totalItems={articles.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PaginatedArticles;
